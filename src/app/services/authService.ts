import axios from "axios";
import { api } from "./axios";
export interface UserResponse {
  results: Array<{
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
  }>;
}
export const getUser = async (userId: string) => {
  try {
    const response = await api.get<UserResponse>(userId);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const postUser = async (userData:{}) => {
  try {
    const response = await axios.post(api,userData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
