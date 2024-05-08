import { QuestionInterface } from "libs/questionForm/src/lib/questionForm/models/question.model"

export interface AppStoreInterface{
    questions:QuestionInterface[]
}

export const appState:AppStoreInterface={
    questions:[]
}