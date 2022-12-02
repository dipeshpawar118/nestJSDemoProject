import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/cats.dto';
import { CreateCricketDto } from 'src/dto/cricket.dto';
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
    async AddCricket( @Body() cricketDto : CreateCricketDto ) {
        return await this.cricketService.addCricket(cricketDto);
    }

    @Get('GetRecord')
    getRecord () {
        return this.cricketService.getMatch();
    }
    
    @Delete ('delete/:name')
    async deleteCricket( @Param('name') cricketName : string) {
        return await this.cricketService.deleteCricket(cricketName);
    }

    @Put('update/:name')
    async updateCricket (@Param('name')cricketName : string , @Body() updateCricketDto:CreateCricketDto) {
        return await this.cricketService.updateCricket(cricketName, updateCricketDto);
    }

    
}
