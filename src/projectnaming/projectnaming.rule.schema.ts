import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectNamingRuleDocument = ProjectNamingRule & Document ;

@Schema()
export class ProjectNamingRule {
    @Prop()
    id: string;

    @Prop({
        require : true
    })
    grade : string;

    @Prop({
        require : true
    })
    workCode : string;

    @Prop({
        require : true,
        unique : true
    })
    no : Number;

    @Prop({
        require : true
    })
    title : string;

    @Prop({
        require : true
    })
    expectStartDate : string;

    @Prop({
        require : true
    })
    expectEndDate : string;

    @Prop()
    requestDate : string;

    @Prop()
    requestTeam : string;

    @Prop()
    requester : string;

    @Prop()
    writer : string;

    @Prop({
        require : true
    })
    projectName : string;

    @Prop()
    outputs : [string];

    @Prop()
    createdDt: Date;
    
    @Prop()
    updatedDt?: Date;    
}

export const ProjectNamingRuleSchema = SchemaFactory.createForClass(ProjectNamingRule);