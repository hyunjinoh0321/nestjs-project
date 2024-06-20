export interface GradeDto {
    id: string;
    grade : string;
    code: string;
    createdDt: Date;
    updatedDt?: Date;
}

export interface SimpleGradeDto {
    grade : string;
    code: string;
}

export interface WorkDto {
    id: string;
    work : string;
    workCode : string;
    createdDt: Date;
    updatedDt?: Date;
}

export interface SimpleWorkDto {
    work : string;
    workCode : string;
}

export interface RuleDto {
    id: string;
    grade : string;
    workCode : string;
    no : Number;
    title : string;
    expectStartDate : string;
    expectEndDate : string;
    requestDate : string;
    requestTeam : string;
    requester : string;
    writer : string;
    projectName : string;
    outputs : [string];
    createdDt: Date;
    updatedDt?: Date;    
}

export interface BoardDto {
    no : Number;
    title: string;
    description : string;
    creator : string;
    comments : [string];
    processYN : string;
    createdDt: Date;
    updatedDt?: Date;    
}