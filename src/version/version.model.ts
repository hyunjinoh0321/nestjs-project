export interface VersionDto {
     id: string;
     applyDate: string;
     versions : [string];
     server: string;
     contents: string;
     requester: string;
     manager: string; 
     result: string;
     createdDt: Date;
     updatedDt?: Date;
}