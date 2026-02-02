import api from "@/axios";
import { isAxiosError } from "axios";
import type { User } from "@/modules/auth/interfaces";
import unwrap from "../../common/helpers/unwrap.helper";
import type { ApiResponse } from "../../common/interfaces";

export const getUserAction = async (): Promise<User> => {
  try {
    return await unwrap(
      api.get<ApiResponse<User>>("/user")
    );
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      throw new Error("UNAUTHENTICATED");
    }
    console.log({error});
    throw new Error("SERVER ERROR");
  }
};