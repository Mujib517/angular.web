import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {

    info(msg){
        console.info(msg);
    }
    
    warn(msg){
        console.warn(msg);
    }

    error(msg){
        console.error(msg);
    }
}