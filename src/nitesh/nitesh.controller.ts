import { NiteshService } from './nitesh.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NiteshDto } from 'src/dto/nitesh.dto';
import { Nitesh } from 'src/schemas/nitesh.schema';

@Controller('nitesh')
export class NiteshController {
    constructor(private niteshService: NiteshService) {

    }

    @Get()
    getType(): string {
        return 'Hello nitesh';
    }

    @Post('add')
    async addPlayer(@Body() niteshDto: NiteshDto) {
        return await this.niteshService.AddPlayer(niteshDto);
    }

    @Get('getPlayers')
    async getPlayer(@Body() niteshDto: any): Promise<Nitesh[]> {
        return await this.niteshService.GetPlayers();

    }

    @Delete('delete/:name')
    async deletePlayer(@Param('name') playerName: string) {
        return await this.niteshService.deletePlayer(playerName);
    }
    @Put('update/:name')
    async updateplayer(@Param('name') playerName: string, @Body() updatedNiteshDto: NiteshDto) {
        return await this.niteshService.updateplayer(playerName, updatedNiteshDto);
    }



}
