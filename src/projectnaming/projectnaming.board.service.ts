import { Injectable } from '@nestjs/common';
import { BoardDto } from './projectnaming.model';
import { ProjectNamingBoardRepository } from './projectnaming.board.repository';

@Injectable()
export class ProjectnamingBoardService {

    constructor(private boardRepository: ProjectNamingBoardRepository) {}

    async getAllBoards() {
        return await this.boardRepository.getAllBoard();
    }

    createBoard(boardDto: BoardDto) {
        this.boardRepository.createBoard(boardDto);
    }

    async getBoard(id) {
        return await this.boardRepository.getBoard(id);
    }

    deleteBoard(id) {
        this.boardRepository.deleteBoard(id);
    }

    updateBoard(id, boardDto: BoardDto) {
        this.boardRepository.updateBoard(id, boardDto);
    }

    updateProcessYN(id, boardDto: BoardDto) {
        this.boardRepository.updateProcessYN(id, boardDto);
    }

}
