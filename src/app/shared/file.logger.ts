import { Injectable } from "@angular/core";

@Injectable()
export class FileLoggerService {

    info(msg) {
        console.info("File ", msg);
    }

    warn(msg) {
        console.warn("File ", msg);
    }

    error(msg) {
        console.error("File ", msg);
    }
}