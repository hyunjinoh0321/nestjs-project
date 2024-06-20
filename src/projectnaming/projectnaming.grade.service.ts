import { Injectable } from '@nestjs/common';
import { GradeDto } from './projectnaming.model';
import { ProjectNamingGradeRepository } from './projectnaming.grade.repository';

@Injectable()
export class ProjectnaminggradeService {

    constructor(private gradeRepository: ProjectNamingGradeRepository) {}

    async getAllGrades() {
        return await this.gradeRepository.getAllGrade();
    }

    async getAllGrades2() {
        return await this.gradeRepository.getAllGrade2();
    }

    createGrade(GradeDto: GradeDto) {
        this.gradeRepository.createGrade(GradeDto);
    }

    async getGrade(id) {
        return await this.gradeRepository.getGrade(id);
    }

    deleteGrade(id) {
        this.gradeRepository.deleteGrade(id);
    }

    updateGrade(id, GradeDto: GradeDto) {
        this.gradeRepository.updateGrade(id, GradeDto);
    }

}
