import { QuestionInterface } from '@angular-monorepo/questionCard';

export interface AppStoreInterface{
    questions:QuestionInterface[]
}

export const appState:AppStoreInterface={
    questions:[]
}