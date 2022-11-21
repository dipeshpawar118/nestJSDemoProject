import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class  LoggerMiddleware implements NestMiddleware{
    logs = 0  ;
    use(req : Request , res : Response , next : NextFunction ){
        console.log('Request called ' + this.logs );
       this.logs++;
        next();
    }

}