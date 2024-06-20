import { VersionDto } from "./version.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Version, VersionDocument } from "./version.schema";
import mongoose, { Model } from "mongoose";

export interface VersionRepository {
    getAllRecord(): Promise<VersionDto[]>;
    createRecord(recordDto: VersionDto);
    getRecord(id:String): Promise<VersionDto>;
    deleteRecord(id:String);
    updateRecord(id:String, recordDto:VersionDto);
}

@Injectable()
export class VersionMongoRepository implements VersionRepository {
    
    constructor(@InjectModel(Version.name) private maratonModel: Model<VersionDocument>){}

    async getAllRecord(): Promise<VersionDto[]> {
        return await this.maratonModel.find().exec();
    }

    async createRecord(recordDto: VersionDto) {
        const createRecord = {
            ...recordDto,
            createdDt: new Date(),
            updatedDt: new Date(),
        };

        await this.maratonModel.create(createRecord);
    }

    async getSearchRecord(name:string): Promise<VersionDto[]> {
        return await this.maratonModel.find(
            { name : name }
        ).exec();
    }

    async getRecord(id: string): Promise<VersionDto> {
        const objectID = new mongoose.Types.ObjectId(id);
        return await this.maratonModel.findById(objectID);
    }

    async deleteRecord(id: string) {
        await this.maratonModel.findByIdAndDelete(id);
    }

    async updateRecord(id: string, recordDto: VersionDto) {
        const updateRecord = {id, ...recordDto, updatedDate: new Date()};
        await this.maratonModel.findByIdAndUpdate(id, updateRecord);
    }
    
}