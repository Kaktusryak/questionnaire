import { createReducer, on } from "@ngrx/store";
import { UserInterface } from "../interfaces/user-interface";
import { login, logout, restore } from "../store/user.actions";


export interface UserState{
    user: UserInterface | null | undefined
}

export const initialState : UserState={
    user:undefined
}



export const userReducer = createReducer(initialState,
    on(login,(state,{user})=>{
        // console.log(state)
        return {
            ...state,
            user:user
        }
    }),
    on(logout,(state)=>{
        return {
            ...state,
            user:null
        }
    }),
    on(restore,(state,user)=>{
        return {
            ...state,
            user:user
        }
    })

)

