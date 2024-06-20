import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectNamingWorkDocument = ProjectNamingWork & Document ;

@Schema()
export class ProjectNamingWork {
    @Prop()
    id: string;

    @Prop()
    work : string;

    @Prop()
    workCode : string;

    @Prop()
    createdDt: Date;
    
    @Prop()
    updatedDt?: Date;    
}

export const ProjectNamingWorkSchema = SchemaFactory.createForClass(ProjectNamingWork);