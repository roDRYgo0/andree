export const createReducer = (initialState, handlers) =>
  function(state = initialState, action) {
    const handler = handlers[action.type];
    if (handler) {
      return handler(state, action);
    }
    return state;
  };
