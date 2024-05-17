import { createReducer, on } from "@ngrx/store"
// import { storeBoard } from "../store/dashboard.actions"

import { storeBoard } from "../store/dashboard.actions"


export const initialState:any[] = []

export const dashboardReducer = createReducer(initialState,
    on(storeBoard,(state,data)=>[...state,data])
)