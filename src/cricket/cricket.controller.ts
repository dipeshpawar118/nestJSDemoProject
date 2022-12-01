import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/cats.dto';
import { CricketService } from './cricket.service';

@Controller('cricket')
export class CricketController {
    constructor( private cricketService : CricketService) {  
    }
    @Get()
    getType () : string {
        return "cricket";
    }

    @Post ('Add')
    async AddCricket( @Body() cricketDto : CreateCatDto ) {
        return await this.cricketService.addCricket(cricketDto);
    }

    @Get('GetRecord')
    getRecord () {
        return this.cricketService.getMatch();
    }
    
}
