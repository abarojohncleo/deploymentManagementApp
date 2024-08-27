import { AUTHENTICATION_LOGIN, AUTHENTICATION_LOGOUT } from "../constants";
import request from "../../hooks/axiosRequest";

export const getToken = async (user) => {
  const response = await request.post(AUTHENTICATION_LOGIN, user)
  return response;
}; 

export const logOut = async (refreshToken) => {
  try {
    const response = await request.post(AUTHENTICATION_LOGOUT, refreshToken)
    return response;
  } catch (error) {
    throw new Error('Error logging out!')
  }
};