import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectNamingGradeDocument = ProjectNamingGrade & Document ;

@Schema()
export class ProjectNamingGrade {
    @Prop()
    id: string;

    @Prop()
    grade : string;

    @Prop()
    code : string;

    @Prop()
    createdDt: Date;
    
    @Prop()
    updatedDt?: Date;    
}

export const ProjectNamingGradeSchema = SchemaFactory.createForClass(ProjectNamingGrade);