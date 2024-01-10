import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { IMarqueVoiture } from './marque-voiture.interface';
import { CreateMarqueVoitureDto } from 'src/dto/create-marque-voiture.dto';
import { UpdateMarqueVoitureDto } from 'src/dto/update-marque-voiture.dto';

@Injectable()
export class MarqueVoitureService {
    constructor(@InjectModel('MarqueVoiture') private marqueVoitureModel: Model<IMarqueVoiture>) { }

    async createMarqueVoiture(createMarqueVoitureDto: CreateMarqueVoitureDto): Promise<IMarqueVoiture> {
        const newMarqueVoiture = await new this.marqueVoitureModel(createMarqueVoitureDto);
        return newMarqueVoiture.save();
    }

    async updateMarqueVoiture(marqueVoitureId: string, updateMarqueVoitureDto: UpdateMarqueVoitureDto): Promise<IMarqueVoiture> {
        const existingMarqueVoiture = await this.marqueVoitureModel.findByIdAndUpdate(marqueVoitureId, updateMarqueVoitureDto, { new: true });
        if (!existingMarqueVoiture) {
            throw new NotFoundException(`MarqueVoiture #${marqueVoitureId} not found`);
        }
        return existingMarqueVoiture;
    }

    async getAllMarqueVoitures(): Promise<IMarqueVoiture[]> {
        const marqueVoitureData = await this.marqueVoitureModel.find();
        if (!marqueVoitureData || marqueVoitureData.length == 0) {
            throw new NotFoundException('MarqueVoitures data not found!');
        }
        return marqueVoitureData;
    }

    async getMarqueVoiture(marqueVoitureId: string): Promise<IMarqueVoiture> {
        const existingMarqueVoiture = await this.marqueVoitureModel.findById(marqueVoitureId).exec();
        if (!existingMarqueVoiture) {
            throw new NotFoundException(`MarqueVoiture #${marqueVoitureId} not found`);
        }
        return existingMarqueVoiture;
    }
    
    async deleteMarqueVoiture(marqueVoitureId: string): Promise<IMarqueVoiture> {
        const deletedMarqueVoiture = await this.marqueVoitureModel.findByIdAndDelete(marqueVoitureId);
        if (!deletedMarqueVoiture) {
            throw new NotFoundException(`MarqueVoiture #${marqueVoitureId} not found`);
        }
        return ;
    }

}
