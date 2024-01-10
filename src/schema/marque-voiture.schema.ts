import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MarqueVoitureDocument = HydratedDocument<MarqueVoiture>;

@Schema()
export class MarqueVoiture {
  @Prop()
  name: string;

  @Prop()
  yearCreation: number;

  @Prop()
  country: string;
}

export const MarqueVoitureSchema = SchemaFactory.createForClass(MarqueVoiture);
