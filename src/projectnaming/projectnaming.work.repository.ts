import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { WorkDto, SimpleWorkDto } from "./projectnaming.model";
import { ProjectNamingWork, ProjectNamingWorkDocument } from "./projectnaming.work.schema";
import mongoose from "mongoose"

export interface WorkRepository {
    getAllWork(): Promise<WorkDto[]>;
    createWork(workDto: WorkDto);
    getWork(id:string): Promise<WorkDto>;
    deleteWork(id:string);
    updateWork(id:string, workDto:WorkDto);
}

@Injectable()
export class ProjectNamingWorkRepository implements WorkRepository {
    
    constructor(@InjectModel(ProjectNamingWork.name) private  WorkModel: Model<ProjectNamingWorkDocument>){}

    async getAllWork(): Promise<WorkDto[]> {
        return await this.WorkModel.find().exec();
    }

    async getAllWork2(): Promise<SimpleWorkDto[]> {
        return await this.WorkModel.find(
            {},
            {
                _id : 0,
                work : 1,
                workCode : 1,
            }
        ).exec();
    }   

    async createWork(workDto: WorkDto) {
        const createWork = {
            ...workDto,
            createdDt: new Date(),
            updatedDt: new Date(),
        };

        await this.WorkModel.create(createWork);
    }
    async getWork(id: string): Promise<WorkDto> {
        const objectID = new mongoose.Types.ObjectId(id);
        return await this.WorkModel.findById(objectID);
    }

    async deleteWork(id: string) {
        await this.WorkModel.findByIdAndDelete(id);
    }

    async updateWork(id: string, workDto: WorkDto) {
        const updateWork = {id, ...workDto, updatedDate: new Date()};
        await this.WorkModel.findByIdAndUpdate(id, updateWork);
    }
    
}