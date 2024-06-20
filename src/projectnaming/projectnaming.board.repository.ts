import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BoardDto } from "./projectnaming.model";
import { ProjectNamingBoard, ProjectNamingBoardDocument } from "./projectnaming.board.schema";
import mongoose from "mongoose"

export interface boardRepository {
    getAllBoard(): Promise<BoardDto[]>;
    createBoard(BoardDto: BoardDto);
    getBoard(id:string): Promise<BoardDto>;
    deleteBoard(id:string);
    updateBoard(id:string, BoardDto:BoardDto);
}

@Injectable()
export class ProjectNamingBoardRepository implements boardRepository {
    
    constructor(@InjectModel(ProjectNamingBoard.name) private  boardModel: Model<ProjectNamingBoardDocument>){}

    async getAllBoard(): Promise<BoardDto[]> {
        return await this.boardModel.find().sort( { "no":  -1} ).exec();
    }

    async getMaxNo(): Promise<Number> {
        /* Get Max Number */
        try {
            const no = await this.boardModel.find().sort({"no":-1}).limit(1).exec();
            console.log(no);
            
            if (no.length === 0){
                console.log("No Data found");
                return 0;
            } 
            else {
                console.log("MAX NO : " + no[0].no);
                return no[0].no;
            }
        } catch (error) {
            console.log(error);
            return -1;
        }    
    }

    async createBoard(BoardDto: BoardDto) {
        const inputNo = Number(await this.getMaxNo()) + 1;
        console.log("New No : " + inputNo);

        const createBoard = {
            ...BoardDto,
            no : inputNo,
            createdDt: new Date(),
            updatedDt: new Date(),
        };

        await this.boardModel.create(createBoard);
    }

    async getBoard(id: string): Promise<BoardDto> {
        const objectID = new mongoose.Types.ObjectId(id);
        return await this.boardModel.findById(objectID);
    }

    async deleteBoard(id: string) {
        await this.boardModel.findByIdAndDelete(id);
    }

    async updateBoard(id: string, BoardDto: BoardDto) {
        /* Make Project Naming */
        const updateboard = {id, ...BoardDto, updatedDate: new Date()};
        await this.boardModel.findByIdAndUpdate(id, updateboard);
    }

    async updateProcessYN(id: string, BoardDto: BoardDto) {
        /* Make Project Naming */
        const updateboard = {id, ...BoardDto,
            processYN : "Y",
            updatedDate: new Date()};
        await this.boardModel.findByIdAndUpdate(id, updateboard);
    }
    
}