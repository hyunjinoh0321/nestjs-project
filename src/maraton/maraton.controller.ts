import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { MaratonMongoService } from './maratonMongo.service';

@Controller('maraton')
export class MaratonController {

    constructor(private maratonService : MaratonMongoService){}

    @Get()
    async GetAllRecord() {
        console.log("GetAllRecord");

        return await this.maratonService.getAllRecords();
    }

    @Post()
    createRecord(@Body() recodeDto) {
        console.log("createRecord");
        console.log(recodeDto);

        this.maratonService.createRecord(recodeDto);
        return 'success';
    }

    @Get('/search/:name')
    async getSearchRecord(@Param('name') name : string) {
        console.log(`GetRecord : ${name}`);    
        return await this.maratonService.getSearchRecord(name);   
    }

    @Get('/:id')
    async getRecord(@Param('id') id : string) {
        console.log(`GetRecord : ${id}`);    
        return await this.maratonService.getRecord(id);   
    }

    @Delete('/:id')
    deleteRecord(@Param('id') id : string) {
        console.log(`DeleteRecord : ${id}`); 
        this.maratonService.deleteRecord(id);
        return 'success';
    }

    @Put('/:id')
    updateRecord(@Param('id') id : string, @Body() recordDto){
        console.log(`UpdateRecord : ${id}`); 
        return this.maratonService.updateRecord(id, recordDto);
    }
}