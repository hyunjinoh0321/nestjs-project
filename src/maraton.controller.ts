import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { MaratonService } from './maraton.service';

@Controller('maraton')
export class MaratonController {

    maratonService : MaratonService;

    constructor(){
        this.maratonService= new MaratonService();
    }

    @Get()
    GetAllRecord() {
        console.log("GetAllRecord");

        return this.maratonService.getAllRecords();
    }

    @Post()
    createRecord(@Body() recodeDto) {
        console.log("createRecord");
        console.log(recodeDto);

        this.maratonService.createRecord(recodeDto);
        return 'success';
    }

    @Get('/:id')
    getRecord(@Param('id') id : string) {
        console.log(`GetRecord : ${id}`);    
        return this.maratonService.getRecord(id);   
    }

    @Delete('/:id')
    deleteRecord(@Param('id') id : string) {
        console.log(`DeleteRecord : ${id}`); 
        this.maratonService.deleteRecord(id);
        return 'success';
    }

    @Put('/id')
    updateRecord(@Param('id') id : string, @Body() recordDto){
        console.log(`UpdateRecord : ${id}`); 
        return this.maratonService.updateRecord(id, recordDto);
    }
}