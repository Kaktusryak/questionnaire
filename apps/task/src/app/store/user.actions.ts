import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../interfaces/user-interface';

export const login = createAction(
  '[User] login',
  props<{ user: UserInterface }>()
);
export const logout = createAction('[User] logout');
export const restore = createAction('[User] restore',props<UserInterface>())
