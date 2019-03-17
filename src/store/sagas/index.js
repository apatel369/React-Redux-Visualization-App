import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import DroneDataSagas from "./DroneData";

export default [...ApiErrors, ...WeatherSagas, ...DroneDataSagas];
