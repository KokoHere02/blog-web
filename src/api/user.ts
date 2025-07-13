import request from "@/utils/request";
import type { ApiResponse } from '@/api/api'

export interface UserInfo {
  id: number
  name: string
  email: string
}

export function getUserInfo(id: string): Promise<ApiResponse<UserInfo>> {
  return request.get(`/user/${id}`)
}