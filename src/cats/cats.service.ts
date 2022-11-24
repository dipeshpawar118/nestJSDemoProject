import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from 'src/dto/cats.dto';
import { Cat, CatDocument } from 'src/schemas/cat.schema';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

    getType() : string {
        return "Cat "
    }
    
    async addCat( catDto : CreateCatDto ): Promise<Cat> {
        const createdCat = new this.catModel(catDto);
        return createdCat.save();
      }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
      }
}
