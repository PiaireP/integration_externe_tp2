import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateMarqueVoitureDto } from 'src/dto/create-marque-voiture.dto';
import { UpdateMarqueVoitureDto } from 'src/dto/update-marque-voiture.dto';
import { MarqueVoitureService } from './marque-voiture.service';

@Controller('marque-voiture')
export class MarqueVoitureController {
    constructor(private readonly voitureMarqueService: MarqueVoitureService) { }

    @Post()
    async createVoitureMarque(@Res() response, @Body() createMarqueVoitureDto: CreateMarqueVoitureDto) {
        try {
            const newVoitureMarque = await this.voitureMarqueService.createMarqueVoiture(createMarqueVoitureDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Marque Voiture has been created successfully',
                newVoitureMarque,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Marque Voiture not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateVoitureMarque(@Res() response, @Param('id') marqueVoitureId: string,
        @Body() updateVoitureMarqueDto: UpdateMarqueVoitureDto) {
        try {
            const existingMarqueVoiture = await this.voitureMarqueService.updateMarqueVoiture(marqueVoitureId, updateVoitureMarqueDto);
            return response.status(HttpStatus.OK).json({
                message: 'Marque Voiture has been successfully updated',
                existingMarqueVoiture,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getMarqueVoitures(@Res() response) {
        try {
            const marqueVoitureData = await this.voitureMarqueService.getAllMarqueVoitures();
            return response.status(HttpStatus.OK).json({
                message: 'All students data found successfully', marqueVoitureData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getMarqueVoiture(@Res() response, @Param('id') marqueVoitureId: string) {
        try {
            const existingMarqueVoiture = await
                this.voitureMarqueService.getMarqueVoiture(marqueVoitureId);
            return response.status(HttpStatus.OK).json({
                message: 'Marque Voiture found successfully', existingMarqueVoiture,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    
    @Delete('/:id')
    async deleteMarqueVoiture(@Res() response, @Param('id') marqueVoitureId: string) {
        try {
            const deletedMarqueVoiture = await this.voitureMarqueService.deleteMarqueVoiture(marqueVoitureId);
            return response.status(HttpStatus.OK).json({
                message: 'Marque Voiture deleted successfully',
                deletedMarqueVoiture,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
