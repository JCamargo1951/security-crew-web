import type { ApiResponse } from "../interfaces"

export default async function unwrapFull<T>(promise: Promise<{ data: ApiResponse<T> }>): Promise<ApiResponse<T>> {
  const res = await promise
  return res.data
}
