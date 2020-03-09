import { FormState } from '../reducers/FormReducer';

export enum Action {
  ADD = 'add'
}

type AddAction = {
  type: Action.ADD,
  payload: FormState
};

export const add = (payload: FormState): AddAction => ({
  type: Action.ADD,
  payload: payload
});

export type FormActions = (
  ReturnType<typeof add>
);
