import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { ProjectnamingWorkService } from './projectnaming.Work.service';

@Controller('projectnaming/work')
export class ProjectnamingWorkController {
    constructor(private WorkService : ProjectnamingWorkService){}

    @Get('/')
    async GetAllWork() {
        console.log("GetAllWork");
        return await this.WorkService.getAllWorks();
    }

    @Get('/simple')
    async GetAllWork2() {
        console.log("GetAllWork2");
        return await this.WorkService.getAllWorks2();
    }    

    @Post('/')
    createWork(@Body() recodeDto) {
        console.log("createWork");
        console.log(recodeDto);
        this.WorkService.createWork(recodeDto);
        return 'success';
    }

    @Get('/:id')
    async getWork(@Param('id') id : string) {
        console.log(`GetWork : ${id}`);    
        const returnData = await this.WorkService.getWork(id);
        console.log(returnData);
        return returnData;   
    }

    @Delete('/:id')
    deleteWork(@Param('id') id : string) {
        console.log(`DeleteWork : ${id}`); 
        this.WorkService.deleteWork(id);
        return 'success';
    }

    @Put('/:id')
    updateWork(@Param('id') id : string, @Body() WorkDto){
        console.log(`UpdateWork : ${id}`); 
        return this.WorkService.updateWork(id, WorkDto);
    }


}
