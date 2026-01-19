// src/services/userService.ts
import api from "../../apis/api";

export interface Users
{
  userName: string;
  contactNummber: string;
}

export const getUsers = async () => {
  const response = await api.get("/GetUserDetails?id=0");
  return response.data as Users[];
};