import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

    getType() : string {
        return "Cat "
    }
}
