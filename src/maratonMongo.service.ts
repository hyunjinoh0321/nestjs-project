import { Injectable } from "@nestjs/common";
import { RecordDto } from "./maraton.model";

import { MaratonMongoRepository } from "./maraton.repository";

@Injectable()
export class MaratonMongoService {

    constructor(private maratonRepository: MaratonMongoRepository) {}

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