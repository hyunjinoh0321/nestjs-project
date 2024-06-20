import { Injectable } from "@nestjs/common";
import { VersionDto } from "./version.model";

import { VersionMongoRepository } from "./version.repository";

@Injectable()
export class VersionMongoService {

    constructor(private versionRepository: VersionMongoRepository) {}

    async getAllRecords() {
        return await this.versionRepository.getAllRecord();
    }

    createRecord(recordDto: VersionDto) {
        this.versionRepository.createRecord(recordDto);
    }

    async getSearchRecord(name) {
        return await this.versionRepository.getSearchRecord(name);
    }

    async getRecord(id) {
        return await this.versionRepository.getRecord(id);
    }

    deleteRecord(id) {
        this.versionRepository.deleteRecord(id);
    }

    updateRecord(id, recordDto: VersionDto) {
        this.versionRepository.updateRecord(id, recordDto);
    }
}