import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { ProjectnaminggradeService } from './projectnaming.grade.service';

@Controller('projectnaming/grade')
export class ProjectnamingGradeController {
    constructor(private gradeService : ProjectnaminggradeService){}

    @Get('/')
    async GetAllGrade() {
        console.log("GetAllGrade");
        return await this.gradeService.getAllGrades();
    }

    @Get('/simple')
    async GetAllGrade2() {
        console.log("GetAllGrade2");
        return await this.gradeService.getAllGrades2();
    }    

    @Post('/')
    createGrade(@Body() recodeDto) {
        console.log("createGrade");
        console.log(recodeDto);
        this.gradeService.createGrade(recodeDto);
        return 'success';
    }

    @Get('/:id')
    async getGrade(@Param('id') id : string) {
        console.log(`GetGrade : ${id}`);    
        const returnData = await this.gradeService.getGrade(id);
        console.log(returnData);
        return returnData;   
    }

    @Delete('/:id')
    deleteGrade(@Param('id') id : string) {
        console.log(`DeleteGrade : ${id}`); 
        this.gradeService.deleteGrade(id);
        return 'success';
    }

    @Put('/:id')
    updateGrade(@Param('id') id : string, @Body() GradeDto){
        console.log(`UpdateGrade : ${id}`); 
        return this.gradeService.updateGrade(id, GradeDto);
    }


}
