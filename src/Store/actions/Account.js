
export const loadLoginPageDataSuccess = (data) => {
  return {
    type: 'LOAD_LOGIN_PAGE_DATA',
    pageData: data
  };
};

export const loadLoginPageData = (data) => {
    return (dispatch) =>{
        dispatch(loadLoginPageDataSuccess(data));
    }
}