import { createGroup, getGroup, getGroups } from "./groups"
import { GroupResponse, CreateGroup } from "./types"
import request from "./request"

jest.mock("./request", () => ({
  __esModule: true,
  default: jest.fn()
}))

const requestMocked = request as jest.MockedFunction<typeof request>

describe("Groups", () => {
  describe("# Groups", () => {
    it("Should return all groups", async () => {
      requestMocked.mockImplementationOnce(() =>
        Promise.resolve([
          {
            id: "10402173435763029700781503965100",
            name: "Group1",
            description: "This is a new group",
            admin:
              "0xdf558148e66850ac48dbe2c8119b0eefa7d08bfd19c997c90a142eb97916b847",
            treeDepth: 16,
            fingerprintDuration: 3600,
            createdAt: "2023-07-15T08:21:05.000Z",
            members: [],
            reputationCriteria: null
          }
        ])
      )

      const groups = await getGroups()
      expect(groups.length).toBe(1)
    })
    it("Should return a group", async () => {
      requestMocked.mockImplementationOnce(() =>
        Promise.resolve({
          id: "10402173435763029700781503965100",
          name: "Group1",
          description: "This is a new group",
          admin:
            "0xdf558148e66850ac48dbe2c8119b0eefa7d08bfd19c997c90a142eb97916b847",
          treeDepth: 16,
          fingerprintDuration: 3600,
          createdAt: "2023-07-15T08:21:05.000Z",
          members: [],
          reputationCriteria: null
        })
      )

      const groupId = "10402173435763029700781503965100"
      const group: GroupResponse = await getGroup(groupId)
      expect(group.id).toBe(groupId)
    })
    it.skip("Should create a group", async () => {
      const groupInfo: CreateGroup = {
        id: "1234",
        name: "GroupTest",
        description: "Testing Group",
        treeDepth: 16,
        fingerprintDuration: 3600
      }
      const config = {
        method: "post"
      }
      const group: GroupResponse = await createGroup(groupInfo)
      expect(group)
    })
  })
})
