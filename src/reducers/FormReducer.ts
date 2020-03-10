import { Action, FormActions } from '../actions/FormAction';

type _FormValue = {
  value: string,
  date: string
}
export type FormValue = Readonly<_FormValue>;

type _FormState = {
  list: FormValue[]
};
export type FormState = Readonly<_FormState>

export const initialState: FormState = {
  list: []
};

export function formReducer(state: FormState | never = initialState, action: FormActions): FormState {
  switch (action.type) {
    case Action.ADD:
      return {
        list: [...state.list, action.payload]
      };
    default:
      return initialState;
  }
}
