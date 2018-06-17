export const createReducer = (initial, actionHandlers) => (
  state = initial,
  action
) => {
  console.log(action.type);
  if (actionHandlers.hasOwnProperty(action.type)) {
    console.log(action.type);
    return actionHandlers[action.type](state, action);
  } else {
    return state;
  }
};
