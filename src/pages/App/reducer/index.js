import * as R from 'ramda';

const initialState = {
  youtuber: {}
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_FETCH_YOUTUBER':
      return R.compose(
        R.mergeDeepRight({}),
        R.objOf('youtuber'),
        R.path(['payload'])
      )(action);
    default:
      return state;
  }
};

export default AppReducer;
