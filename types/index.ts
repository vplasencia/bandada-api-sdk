export type GroupResponse = {
  id: string
  name: string
  description: string
  admin: string
  treeDepth: number
  fingerprintDuration: number
  createdAt: Date
  members: string[]
  reputationCriteria: object
}

export type CreateGroup = {
  id?: string
  name: string
  description: string
  treeDepth: number
  fingerprintDuration: number
}
