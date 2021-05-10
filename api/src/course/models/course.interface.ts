export interface Course {
    id?: number,
    number?: string,
    name?: string,
    description?: string,
    units?: number,
    is100s?: boolean,
    is200s?: boolean,
    is300s?: boolean,
    is400s?: boolean,
    is500s?: boolean,
    isIntro?: boolean,
    isLowerDiv?: boolean,
    isUpperDiv?: boolean,
    isElective?: boolean,
    isMasters?: boolean
}