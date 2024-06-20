import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { required } from 'joi';
import mongoose, { Document } from 'mongoose';

export type ProjectNamingBoardDocument = ProjectNamingBoard & Document ;

@Schema()
export class ProjectNamingBoard {
    @Prop()
    id: string;

    @Prop({
        require : true,
        unique : true
    })
    no : Number;

    @Prop( { required : true })
    title: string;

    @Prop( { required : true })
    description : string;

    @Prop( { required : true })
    creator : string;

    @Prop( {default: new Date()} )
    createdDt: Date;

    @Prop( {default: "N"})
    processYN: string;

    @Prop()
    updatedDt?: Date;     

    @Prop({ 
    })
    comments : [string];
}

export const ProjectNamingBoardSchema = SchemaFactory.createForClass(ProjectNamingBoard);