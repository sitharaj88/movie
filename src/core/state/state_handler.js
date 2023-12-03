const initialState = {
  loading: false,
  error: null,
  data: null,
};

const progress = (state) => {
  state.loading = true;
  state.error = null;
};

const success = (state, action) => {
  state.loading = false;
  state.data = action.payload;
};

const failure = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const getIntialState = () => {
  return JSON.parse(JSON.stringify(initialState));
};

export { progress, success, failure, getIntialState };
