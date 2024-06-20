import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GradeDto, SimpleGradeDto } from "./projectnaming.model";
import { ProjectNamingGrade, ProjectNamingGradeDocument } from "./projectnaming.grade.schema";
import mongoose from "mongoose"

export interface GradeRepository {
    getAllGrade(): Promise<GradeDto[]>;
    createGrade(gradeDto: GradeDto);
    getGrade(id:string): Promise<GradeDto>;
    deleteGrade(id:string);
    updateGrade(id:string, gradeDto:GradeDto);
}

@Injectable()
export class ProjectNamingGradeRepository implements GradeRepository {
    
    constructor(@InjectModel(ProjectNamingGrade.name) private  gradeModel: Model<ProjectNamingGradeDocument>){}

    async getAllGrade(): Promise<GradeDto[]> {
        return await this.gradeModel.find().exec();
    }

    async getAllGrade2(): Promise<SimpleGradeDto[]> {
        return await this.gradeModel.find(
            {},
            {
                _id : 0,
                grade : 1,
                code : 1,
            }
        ).exec();
    }

    async createGrade(GradeDto: GradeDto) {
        const createGrade = {
            ...GradeDto,
            createdDt: new Date(),
            updatedDt: new Date(),
        };

        await this.gradeModel.create(createGrade);
    }
    async getGrade(id: string): Promise<GradeDto> {
        const objectID = new mongoose.Types.ObjectId(id);
        return await this.gradeModel.findById(objectID);
    }

    async deleteGrade(id: string) {
        const objectID = new mongoose.Types.ObjectId(id);
        await this.gradeModel.findByIdAndDelete(objectID);
    }

    async updateGrade(id: string, GradeDto: GradeDto) {
        const objectID = new mongoose.Types.ObjectId(id);
        const updateGrade = {_id : objectID, ...GradeDto, updatedDate: new Date()};
        await this.gradeModel.findByIdAndUpdate(id, updateGrade);
    }
    
}