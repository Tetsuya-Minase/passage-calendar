import { Action, FormActions } from '../actions/FormAction';

type _FormState = {
  value: string,
  date: string
}

export type FormState = Readonly<_FormState>;

export const initialState: FormState = {
  value: '',
  date: ''
};

export function formReducer(state: FormState | never = initialState, action: FormActions): FormState | undefined {
  switch (action.type) {
    case Action.ADD:
      return action.payload;
    default:
      return;
  }
}
