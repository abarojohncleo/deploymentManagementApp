export const BASE_URL = process.env.REACT_APP_BASE_URL
export const REFRESH_TOKEN = BASE_URL + '/auth/token/refresh/'; 
export const AUTHENTICATION_LOGIN = BASE_URL + `/auth/token/`;
export const AUTHENTICATION_LOGOUT = BASE_URL + '/auth/logout/';

// Engineers API 
export const ENGINEERS = BASE_URL + '/engineers/engineers/';
export const ENGINEERS_TYPE = BASE_URL + '/engineers/engineers-type/'



export const engineer_types = [
  { code:"FE" , name: 'Frontend Developer' },
  { code:"BE" , name: 'Backend Developer' },
  { code:"FS" , name: 'Full Stack Dev' },
  { code:"DO" , name: 'Dev Ops Engineer' },
  { code:"CE" , name: 'Cloud Engineer' },
]

export const gender = [
  { code: 'M', name: 'Male' },
  { code: 'F', name: 'Female' },
]
