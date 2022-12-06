import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    requestCount = 0;
    use(req: any, res: any, next: NextFunction) {
        this.requestCount++;
        console.log("Request Count " + this.requestCount + " ip address " + req.ip + " for " + req.originalUrl);
        next()
    }
  
}
