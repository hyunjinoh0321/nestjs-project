import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { ProjectnamingBoardService } from './projectnaming.board.service';

@Controller('projectnaming/board')
export class ProjectnamingBoardController {
    constructor(private boardService : ProjectnamingBoardService){}

    @Get('/')
    async GetAllBoard() {
        console.log("GetAllBoard");
        return await this.boardService.getAllBoards();
    }

    @Post('/')
    createBoard(@Body() recodeDto) {
        console.log("createBoard");
        console.log(recodeDto);
        this.boardService.createBoard(recodeDto);
        return 'success';
    }

    @Get('/:id')
    async getBoard(@Param('id') id : string) {
        console.log(`GetBoard : ${id}`);    
        const returnData = await this.boardService.getBoard(id);
        console.log(returnData);
        return returnData;   
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id : string) {
        console.log(`DeleteBoard : ${id}`); 
        this.boardService.deleteBoard(id);
        return 'success';
    }

    @Put('/:id')
    updateBoard(@Param('id') id : string, @Body() boardDto){
        console.log(`UpdateBoard : ${id}`); 
        return this.boardService.updateBoard(id, boardDto);
    }

    @Put('/processYN/:id')
    updateProcessYN(@Param('id') id : string, @Body() boardDto){
        console.log(`updateProcessYN : ${id}`); 
        return this.boardService.updateProcessYN(id, boardDto);
    }

}
