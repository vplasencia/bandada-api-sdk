import { GroupResponse, CreateGroup } from "./types"
import request from "./request"

let url = "/groups"

export async function getGroups(): Promise<GroupResponse[]> {
  const groups = await request(url)

  return groups
}

export async function getGroup(groupId: string): Promise<GroupResponse> {
  url += `/${groupId}`

  return await request(url)
}

export async function createGroup(group: CreateGroup) {
  const config = {
    method: "post",
    data: group
  }

  return await request(url, config)
}
