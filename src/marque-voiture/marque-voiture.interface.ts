import { Document } from 'mongoose';

export interface IMarqueVoiture extends Document{
    readonly name: string;
    readonly yearCreation: number;
    readonly country: string;
}