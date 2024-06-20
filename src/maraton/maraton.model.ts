export interface RecordDto {
     id: string;
     name: string;
     eventDate: string;
     eventName: string;
     type: string; 
     record: string;
     createdDt: Date;
     updatedDt?: Date;
}