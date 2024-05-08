import { createSelector } from "@ngrx/store";
import { AppStoreInterface } from "../app.state";
import { QuestionInterface } from "libs/questionForm/src/lib/questionForm/models/question.model";

export const selectFeature = (state:AppStoreInterface)=>state.questions

export const selectAllQuestions = createSelector(selectFeature,(state:QuestionInterface[])=>state)