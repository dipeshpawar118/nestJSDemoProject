import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class  LogeMiddleware implements NestMiddleware{
    logs = 0  ;
    use(req  , res : Response, next : NextFunction ){
        
        // this.logs++;
        // console.log('Request called ' + this.logs + 'ip address' +  req.ip) ;
        next();
        // if(req.ip === '::1'){
        //     next();
        // }else {
        //     res
        //     throw new UnauthorizedException();
        // }
       
    }

}