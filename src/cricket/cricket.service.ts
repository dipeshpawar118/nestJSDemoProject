import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from 'src/dto/cats.dto';
import { Cricket, CricketDocument } from 'src/schemas/cricket.schema';

@Injectable()
export class CricketService {
    constructor(@InjectModel(Cricket.name) private cricketModel: Model<CricketDocument>) {}
    
    async getMatch(): Promise<Cricket[]> {
        return this.cricketModel.find().exec();
    }

    async addCricket( cricketDto : CreateCatDto ): Promise<Cricket> {
        const createdCricket = new this.cricketModel(cricketDto);
        return createdCricket.save();
    }

}
