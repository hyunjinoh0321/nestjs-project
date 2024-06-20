import { Injectable } from '@nestjs/common';
import { RuleDto } from './projectnaming.model';
import { ProjectNamingRuleRepository } from './projectnaming.rule.repository';

@Injectable()
export class ProjectnamingRuleService {

    constructor(private RuleRepository: ProjectNamingRuleRepository) {}

    async getAllRules() {
        return await this.RuleRepository.getAllRule();
    }

    createRule(RuleDto: RuleDto) {
        this.RuleRepository.createRule(RuleDto);
    }

    async getRule(id) {
        return await this.RuleRepository.getRule(id);
    }

    deleteRule(id) {
        this.RuleRepository.deleteRule(id);
    }

    updateRule(id, RuleDto: RuleDto) {
        this.RuleRepository.updateRule(id, RuleDto);
    }

}
