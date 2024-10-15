import { ENGINEERS, ENGINEERS_TYPE } from "../constants";
import request from "../../hooks/axiosRequest";

export const getEngineers = async  () => {
  const response = await request.get(ENGINEERS)
  return response; 
};

export const getEngineersType = async () => {
  const response = await request.get(ENGINEERS_TYPE);
  return response;
};

export const addEngineer = async (data) => {
  const response = await request.post(ENGINEERS, data)
  return response
}