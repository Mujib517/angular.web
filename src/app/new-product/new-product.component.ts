import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  template: `
  <div class="row">

  <div *ngIf="success" class="alert alert-success">Successfully saved</div>
  <div *ngIf="failed" class="alert alert-danger">Oop!something went wrong. please try again </div>

  <div class="col-md-5">
      <form [formGroup]="frm">
          <div class="form-group">
              <select class="form-control" name="brand" formControlName="brand">
                  <option>Apple</option>
                  <option>Nokia</option>
                  <option>Samsung</option>
                  <option>Nokia</option>
                  <option>LG</option>
                  <option>Xiomi</option>
              </select>

          </div>
          <div class="form-group">
              <input type="text" placeholder="Model" class="form-control" formControlName="model" />
              <span class="text-danger"  *ngIf="frm.controls.model.touched && frm.controls.model.errors?.required">Required</span>
              <span class="text-danger" *ngIf="frm.controls.model.touched && frm.controls.model.errors?.minlength">Min 3 Chars</span>
              <span class="text-danger" *ngIf="frm.controls.model.touched && frm.controls.model.errors?.maxlength">Max 10 Chars</span>
          </div>
          <div class="form-group">
              <input type="number" placeholder="Price" class="form-control" formControlName="price" />
          </div>
          <div class="form-group">
              InStock:
              <input type="checkbox" name="inStock" formControlName="inStock" />
          </div>
          <div class="form-group">
              <button [disabled]="frm.invalid" class="btn btn-success" (click)="onSave()">Save New Product</button>
          </div>
      </form>
  </div>
</div>
  `,
  styles: []
})
export class NewProductComponent implements OnInit {

  clear(): any {
    this.success = true;
    this.frm.setValue({});
  }
  frm: FormGroup;
  success: boolean;
  failed: boolean;

  constructor(private fb: FormBuilder, private productSvc: ProductService, private router: Router) {
    this.frm = this.fb.group({
      brand: ['', [Validators.required]],
      model: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      price: [],
      inStock: []
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.frm.valid) {
      this.productSvc.save(this.frm.value)
        .subscribe(
        () => this.clear(),
        err => this.router.navigate(["/products"]),
        () => console.log("Completed")
        );
    }

  }


}
