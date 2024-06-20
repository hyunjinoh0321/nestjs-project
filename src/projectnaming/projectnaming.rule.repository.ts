import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RuleDto } from "./projectnaming.model";
import { ProjectNamingRule, ProjectNamingRuleDocument } from "./projectnaming.rule.schema";
import mongoose from "mongoose"

export interface RuleRepository {
    getAllRule(): Promise<RuleDto[]>;
    createRule(ruleDto: RuleDto);
    getRule(id:string): Promise<RuleDto>;
    deleteRule(id:string);
    updateRule(id:string, ruleDto:RuleDto);
}

@Injectable()
export class ProjectNamingRuleRepository implements RuleRepository {
    
    constructor(@InjectModel(ProjectNamingRule.name) private  RuleModel: Model<ProjectNamingRuleDocument>){}

    async getAllRule(): Promise<RuleDto[]> {
        return await this.RuleModel.find().sort( { "no":  -1} ).exec();
    }

    async getMaxNo(): Promise<Number> {
        /* Get all data*/
        const no = await this.RuleModel.find().sort({"no":-1}).limit(1).exec();
        
        console.log("DATA : " + no);

        if ( no.length === 0 ) {
            console.log("no data");
            return 10000;
        } else {
            console.log(no);
            console.log("MAX NO : " + no[0].no);
            return no[0].no;
        }

    }

    async createRule(ruleDto: RuleDto) {
        const inputNo = Number(await this.getMaxNo()) + 1;
        console.log("New No : " + inputNo);

        /* Make Project Naming */
        const projectName = ruleDto.grade + "-" 
        + ruleDto.workCode + "-" 
        + inputNo + "(" + ruleDto.title + ")"
        + ruleDto.expectStartDate + "-" + ruleDto.expectEndDate;

        console.log("New Project Naming : " + projectName);

        const createRule = {
            ...ruleDto,
            no : inputNo,
            projectName : projectName,
            createdDt: new Date(),
            updatedDt: new Date(),
        };

        await this.RuleModel.create(createRule);
    }
    async getRule(id: string): Promise<RuleDto> {
        const objectID = new mongoose.Types.ObjectId(id);
        return await this.RuleModel.findById(objectID);
    }

    async deleteRule(id: string) {
        await this.RuleModel.findByIdAndDelete(id);
    }

    async updateRule(id: string, ruleDto: RuleDto) {
        /* Make Project Naming */
        const projectName = ruleDto.grade + "-" 
        + ruleDto.workCode + "-" 
        + ruleDto.no + "(" + ruleDto.title + ")"
        + ruleDto.expectStartDate + "-" + ruleDto.expectEndDate;

        const updateRule = {id, ...ruleDto, updatedDate: new Date()};
        await this.RuleModel.findByIdAndUpdate(id, updateRule);
    }
    
}