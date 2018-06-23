export const createReducer = (initial, actionHandlers) => (
  state = initial,
  action
) => {
  if (actionHandlers.hasOwnProperty(action.type)) {
    return actionHandlers[action.type](state, action);
  } else {
    return state;
  }
};
