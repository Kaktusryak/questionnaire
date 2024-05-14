import { createAction, props } from "@ngrx/store";
import { Dashboard } from "../interfaces/dashboard";




export const storeBoard = createAction('[Dashboard Component] Store',(data:any)=>data)