import { PartialType } from '@nestjs/mapped-types';
import { CreateMarqueVoitureDto } from './create-marque-voiture.dto';

export class UpdateMarqueVoitureDto extends PartialType(CreateMarqueVoitureDto) {}
