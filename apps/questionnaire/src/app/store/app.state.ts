import { QuestionInterface } from "libs/questionCards/src/lib/models/question.model"



export interface AppStoreInterface{
    questions:QuestionInterface[]
}

export const appState:AppStoreInterface={
    questions:[]
}