import * as actions from "../actions";

const initialState = {
  temp: "",
  lat: "",
  long: "",
  lastRece: ""
};

const fetchDroneData = (state, action) => {
  const { data } = action;
  // const drone = data[data.length - 1];
  if (!data) return state;
  const { metric, latitude, longitude, timestamp } = data["data"][data["data"].length - 1];

  return {
    ...state,
    temp: metric,
    lat: latitude,
    long: longitude,
    lastRece: Math.round((new Date() - timestamp) / 1000) + " seconds ago"
  };
};

const handlers = {
  [actions.DRONE_DATA_RECEIVED]: fetchDroneData
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};