import type { ApiResponse } from "../interfaces"

export default async function unwrapData<T>(promise: Promise<{ data: ApiResponse<T> }>): Promise<T> {
  const res = await promise
  return res.data.data
}
