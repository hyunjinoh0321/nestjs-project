import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { ProjectnamingRuleService } from './projectnaming.rule.service';

@Controller('projectnaming/rule')
export class ProjectnamingRuleController {
    constructor(private RuleService : ProjectnamingRuleService){}

    @Get('/')
    async GetAllRule() {
        console.log("GetAllRule");
        return await this.RuleService.getAllRules();
    }

    @Post('/')
    createRule(@Body() recodeDto) {
        console.log("createRule");
        console.log(recodeDto);
        this.RuleService.createRule(recodeDto);
        return 'success';
    }

    @Get('/:id')
    async getRule(@Param('id') id : string) {
        console.log(`GetRule : ${id}`);    
        const returnData = await this.RuleService.getRule(id);
        console.log(returnData);
        return returnData;   
    }

    @Delete('/:id')
    deleteRule(@Param('id') id : string) {
        console.log(`DeleteRule : ${id}`); 
        this.RuleService.deleteRule(id);
        return 'success';
    }

    @Put('/:id')
    updateRule(@Param('id') id : string, @Body() RuleDto){
        console.log(`UpdateRule : ${id}`); 
        return this.RuleService.updateRule(id, RuleDto);
    }


}
