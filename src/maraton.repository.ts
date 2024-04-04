import { readFile, writeFile } from "fs/promises";
import { RecordDto } from "./maraton.model";
import { Injectable } from "@nestjs/common";

export interface MaratonRepository {
    getAllRecord(): Promise<RecordDto[]>;
    createRecord(recordDto: RecordDto);
    getRecord(id:String): Promise<RecordDto>;
    deleteRecord(id:String);
    updateRecord(id:String, recordDto:RecordDto);
}

@Injectable()
export class MaratonFileRepository implements MaratonRepository {

    FILE_NAME = './src/maraton.data.json';

    async getAllRecord(): Promise<RecordDto[]> {
        const datas = await readFile(this.FILE_NAME, { encoding: 'utf8' });
        const records = JSON.parse(datas);
        return records;    
    }

    async createRecord(recordDto: RecordDto) {
        const records = await this.getAllRecord();
        const id = records.length + 1;
        const createPost = { id: id.toString(), ...recordDto, createDt: new Date()};
        records.push(createPost);
        await writeFile(this.FILE_NAME, JSON.stringify(records));
    }

    async getRecord(id: String): Promise<RecordDto> {
        const records = await this.getAllRecord();
        const result = records.find((record) => record.id === id);
        return result;
    }

    async deleteRecord(id: String) {
        const records = await this.getAllRecord();
        const filteredRecords = records.filter((record) => record.id !== id);
        await writeFile(this.FILE_NAME, JSON.stringify(filteredRecords));
    }

    async updateRecord(id: String, recordDto: RecordDto) {
        const records = await this.getAllRecord();
        const index = records.findIndex((record) => record.id === id);
        const updateRecord = { id, ...recordDto, updatedDt: new Date()};
        records[index] = updateRecord;
        await writeFile(this.FILE_NAME, JSON.stringify(records));
    }    
}