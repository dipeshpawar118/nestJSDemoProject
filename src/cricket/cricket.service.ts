import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from 'src/dto/cats.dto';
import { CreateCricketDto } from 'src/dto/cricket.dto';
import { Cricket, CricketDocument } from 'src/schemas/cricket.schema';

@Injectable()
export class CricketService {
    constructor(@InjectModel(Cricket.name) private cricketModel: Model<CricketDocument>) {}
    
    async getMatch(): Promise<Cricket[]> {
        return this.cricketModel.find().exec();
    }

    async addCricket( cricketDto : CreateCricketDto ): Promise<Cricket> {
        const createdCricket = new this.cricketModel(cricketDto);
        return createdCricket.save();
    }

    async deleteCricket( cricketName : string) {
        const result = await this.cricketModel.deleteOne({name : cricketName});
        if (result.acknowledged && result.deletedCount > 0 ){
            return  `Cricket ${cricketName} is deleted deletedCount ${result.deletedCount} `
        }else {
          return  `no Cricket   ${cricketName} found `
        }
    }

    async updateCricket (cricketName:string, updateCricketDto:CreateCricketDto){
        const result = await this.cricketModel.updateOne({name:cricketName}, updateCricketDto);
        return result;
    }

}
