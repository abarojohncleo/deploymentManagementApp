import { engineer_types } from "../api/constants";

export const getPositionName = (code) => {
  const engineerType = engineer_types.find((type) => type.code === code);
  return engineerType.name 
}
