const success = (data) => {
  return {
    type: "SUCCESS",
    data,
  };
};

const failure = (error) => {
  return {
    type: "FAILURE",
    error,
  };
};

const processing = () => {
  return {
    type: "PROCESSING",
  };
};

const initialState = {
  processing: false,
  error: null,
  data: null,
};


