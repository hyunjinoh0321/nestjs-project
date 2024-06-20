import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VersionDocument = Version & Document ;

@Schema()
export class Version {
    @Prop()
    id: string;

    @Prop({
        require : true
    })
    applyDate : string;

    @Prop({
        require : true
    })
    versions : [string];

    @Prop({
        require : true
    })
    server: string;

    @Prop({
        require : true
    })
    contents: string;
    
    @Prop({
        require : true
    })
    requester: string;
    
    @Prop({
        require : true
    })
    manager: string; 
    
    @Prop({
        require : true
    })
    result: string;
    
    @Prop()
    createdDt: Date;
    
    @Prop()
    updatedDt?: Date;
}

export const VersionSchema = SchemaFactory.createForClass(Version);