import { Injectable } from "@nestjs/common";
import { RecordDto } from "./maraton.model";

import { MaratonFileRepository, MaratonRepository } from "./maraton.repository";

@Injectable()
export class MaratonFileService {

    constructor(private maratonRepository: MaratonFileRepository) {}

    async getAllRecords() {
        return await this.maratonRepository.getAllRecord();
    }

    createRecord(recordDto: RecordDto) {
        this.maratonRepository.createRecord(recordDto);
    }

    async getRecord(id) {
        return await this.maratonRepository.getRecord(id);
    }

    deleteRecord(id) {
        this.maratonRepository.deleteRecord(id);
    }

    updateRecord(id, recordDto: RecordDto) {
        this.maratonRepository.updateRecord(id, recordDto);
    }
}