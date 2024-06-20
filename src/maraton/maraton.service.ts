import { RecordDto } from "./maraton.model";

export class MaratonService {

    records = [];

    getAllRecords() {
        return this.records;
    }

    createRecord(recordDto: RecordDto) {
        const id = this.records.length + 1;
        this.records.push({id : id.toString(), ...recordDto, createdDt: new Date()});
    }

    getRecord(id) {
        const record = this.records.find((record) => {
            return record.id === id;
        });

        console.log(record);
        return record;
    }

    deleteRecord(id) {
        const filteredRecords = this.records.filter((record) => record.id !== id);
        this.records = [...filteredRecords];
    }

    updateRecord(id, recordDto: RecordDto) {
        let updateIndex = this.records.findIndex((record) => record.id === id);

        const updateRecord = {id, ...recordDto, updateDt: new Date()};
        this.records[updateIndex] = updateRecord;
        return updateRecord;
    }
}