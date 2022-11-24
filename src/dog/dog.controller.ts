import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private dogService : DogService){
  }

    // @Get()
    // getType () : string {
    //   try {
    //     return this.dogService.getType();
    //   } catch (error) {
    //     throw new HttpException({
    //       status : HttpStatus.UNAUTHORIZED ,
    //       error : 'this user is Unauthorized'
    //     } , HttpStatus.FORBIDDEN); 
    //   } 
    // }

    @Get(':number')
    async checkNumber( @Param('number') num :number) {
      console.log(num ) 
      if(this.dogService.checkUser(num)){
        return this.dogService.checkNumber(num);
      }else {
        throw new HttpException({status : HttpStatus.UNAUTHORIZED , error : 'this user is Unauthorized'} , HttpStatus.FORBIDDEN); 
      }
     
    }
}
