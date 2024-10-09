import { ENGINEERS, ENGINEERS_TYPE } from "../constants";
import request from "../../hooks/axiosRequest";

export const getEngineers = async  () => {
  console.log('api', ENGINEERS)
  const response = await request.get(ENGINEERS)
  console.log('response from api', response)
  return response; 
};

export const getEngineersType = async () => {
  const response = await request.get(ENGINEERS_TYPE);
  return response;
};