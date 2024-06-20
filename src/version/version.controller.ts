import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { VersionMongoService } from './version.service';

@Controller('version')
export class VersionController {

    constructor(private versionService : VersionMongoService){}

    @Get()
    async GetAllRecord() {
        console.log("GetAllRecord");

        return await this.versionService.getAllRecords();
    }

    @Post()
    createRecord(@Body() recodeDto) {
        console.log("createRecord");
        console.log(recodeDto);

        this.versionService.createRecord(recodeDto);
        return 'success';
    }

    @Get('/search/:name')
    async getSearchRecord(@Param('name') name : string) {
        console.log(`GetRecord : ${name}`);    
        return await this.versionService.getSearchRecord(name);   
    }

    @Get('/:id')
    async getRecord(@Param('id') id : string) {
        console.log(`GetRecord : ${id}`);    
        return await this.versionService.getRecord(id);   
    }

    @Delete('/:id')
    deleteRecord(@Param('id') id : string) {
        console.log(`DeleteRecord : ${id}`); 
        this.versionService.deleteRecord(id);
        return 'success';
    }

    @Put('/:id')
    updateRecord(@Param('id') id : string, @Body() recordDto){
        console.log(`UpdateRecord : ${id}`); 
        return this.versionService.updateRecord(id, recordDto);
    }
}