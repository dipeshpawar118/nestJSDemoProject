import { Controller, Get } from '@nestjs/common';

@Controller('cricket')
export class CricketController {
    constructor() {  
    }
    @Get()
    getType () : string {
        return "cricket";
    }
}
