import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';

@Controller()
export class PahadiFigtersController {

    @Get("pahadifigters")
    getTeam () : string {
        return "pahadiFigters"
    } 
}
