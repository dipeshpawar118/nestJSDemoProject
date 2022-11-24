import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { CreateCatDto } from 'src/dto/cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor( private  catsService : CatsService , @InjectConnection() private connection: Connection) {  
  }
  @Get()
  getType () : string {
      return this.catsService.getType();
  }

  @Post('Add')
  async AddCat( @Body() catDto : CreateCatDto )  {
      return await this.catsService.addCat(catDto); 
  }
  
  @Get('findAll')
  async findAll ()  {
    var catName = await this.catsService.findAll();

    return catName ;
  }

}