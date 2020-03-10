import { FormValue } from '../reducers/FormReducer';

export enum Action {
  ADD = 'add'
}

type AddAction = {
  type: Action.ADD,
  payload: FormValue
};

export const add = (payload: FormValue): AddAction => ({
  type: Action.ADD,
  payload: payload
});

export type FormActions = (
  ReturnType<typeof add>
  );
