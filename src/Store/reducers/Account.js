import { updateObject } from '../../utils/utils';

export const LoadLoginPageData = (state, action) => {
  return updateObject(state, {
    pageData: action.pageData
  });
}

export const LoadLoginPageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_LOGIN_PAGE_DATA':
      return LoadLoginPageData(state, action);
    default:
      return state;
  }
};