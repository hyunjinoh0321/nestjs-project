export interface RecordDto {
     id: string;
     name: string;
     eventDate: Date;
     eventName: string;
     type: string; 
     record: string;
     createdDt: Date;
     updatedDt?: Date;
}