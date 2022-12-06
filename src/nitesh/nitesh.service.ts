import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NiteshDto } from 'src/dto/nitesh.dto';
import { Nitesh, NiteshDocument } from 'src/schemas/nitesh.schema';

@Injectable()
export class NiteshService {
    constructor(@InjectModel(Nitesh.name) private NiteshModel: Model<NiteshDocument>) {
    }

    async AddPlayer(createNiteshDto: NiteshDto): Promise<Nitesh> {
        let createdNiteshDto = new this.NiteshModel(createNiteshDto)
        return createdNiteshDto.save();
    }

    async GetPlayers(): Promise<Nitesh[]> {
        return this.NiteshModel.find().exec();
    }

    async deletePlayer(playerName: string) {
        const result = await this.NiteshModel.deleteOne({ name: playerName });
        if (result.acknowledged && result.deletedCount > 0) {
            return `Player ${playerName} is deleted deletedCount ${result.deletedCount} `
        } else {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `No Player   ${playerName} found `
            }, HttpStatus.NOT_FOUND);
            // return  `no Player ${playerName} found `
        }
    }
    async updateplayer(playerName: string, updatedNiteshDto: NiteshDto) {
        const result = await this.NiteshModel.updateOne({ name: playerName }, updatedNiteshDto);

        return result;
    }
}


