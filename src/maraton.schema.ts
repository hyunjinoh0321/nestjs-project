import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MaratonDocument = Maraton & Document ;

@Schema()
export class Maraton {
    @Prop()
    id: string;

    @Prop()
    name : string;

    @Prop()
    eventDate: Date;
    
    @Prop()
    eventName: string;
    
    @Prop()
    type: string; 
    
    @Prop()
    record: string;
    
    @Prop()
    createdDt: Date;
    
    @Prop()
    updatedDt?: Date;
}

export const MaratonSchema = SchemaFactory.createForClass(Maraton);