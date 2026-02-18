import api from "@/axios";
import { isAxiosError } from "axios";
import type { User } from "@/modules/auth/interfaces";
import unwrap from "../../common/helpers/unwrap-data.helper";
import type { ApiResponse } from "../../common/interfaces";

export const getUserAction = async (): Promise<{ ok: boolean, user?: User }> => {
  try {
    const user = await unwrap( api.get<ApiResponse<User>>("/user") );
    return {
      ok: true,
      user: user
    }
  } catch (error) {
    return {
      ok: false,
    }
  }
};