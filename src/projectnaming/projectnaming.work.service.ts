import { Injectable } from '@nestjs/common';
import { WorkDto } from './projectnaming.model';
import { ProjectNamingWorkRepository } from './projectnaming.Work.repository';

@Injectable()
export class ProjectnamingWorkService {

    constructor(private WorkRepository: ProjectNamingWorkRepository) {}

    async getAllWorks() {
        return await this.WorkRepository.getAllWork();
    }

    async getAllWorks2() {
        return await this.WorkRepository.getAllWork2();
    }

    createWork(workDto: WorkDto) {
        this.WorkRepository.createWork(workDto);
    }

    async getWork(id) {
        return await this.WorkRepository.getWork(id);
    }

    deleteWork(id) {
        this.WorkRepository.deleteWork(id);
    }

    updateWork(id, workDto: WorkDto) {
        this.WorkRepository.updateWork(id, workDto);
    }

}
