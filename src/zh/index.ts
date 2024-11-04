import { NicknameGenerator } from "..";
import { Random } from 'random'

export const createGenerator = (options?: {
  seed?: string
}): NicknameGenerator => {
  const { seed } = options ?? {}
  const rand = new Random(seed)

  return {
    generateSVO: ({ subjects, verbs, objects }) => {
      const s = rand.choice(subjects)
      const v = rand.choice(verbs)
      const o = rand.choice(objects)
      return `${s}${v}${o}`
    }
  }
}
