import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from 'src/dto/cats.dto';
import { Cat, CatDocument } from 'src/schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }

  getType(): string {
    return "Cat "
  }

  async addCat(catDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(catDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }


  async deleteCat(catName: string) {
    const result = await this.catModel.deleteOne({ name: catName });
    if (result.acknowledged && result.deletedCount > 0) {
      return `Cats ${catName} is deleted deletedCount ${result.deletedCount} `
    } else {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error:`No Cat   ${catName} found `
      },HttpStatus.NOT_FOUND);
     // return `no Cat   ${catName} found `
    }
  }

  async updateCat(catName: string, updatedCatDto: CreateCatDto) {
    const result = await this.catModel.updateOne({ name: catName }, updatedCatDto);

    return result;
  }
}
