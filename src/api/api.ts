// src/types/api.ts
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}