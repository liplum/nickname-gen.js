import { NicknameGenerator, WordCandidates } from "../index.js";
import { Random } from 'random'

export const createGenerator = (options?: {
  seed?: string
}): NicknameGenerator => {
  const { seed } = options ?? {}
  const rand = new Random(seed)

  const getWord = (word: WordCandidates)=>{
    if(typeof word === "string"){
      return word
    }
    return rand.choice(word)
  }

  return {
    genAdjNoun: ({ adjective, noun, }) => {
      const adj = getWord(adjective)
      const n = getWord(noun)
      return `${adj}${n}`
    },
    genSVtO: ({ subject, transitiveVerb, object }) => {
      const s = getWord(subject)
      const v = getWord(transitiveVerb)
      const o = getWord(object)
      return `${s}${v}${o}`
    },
    genSVi: ({ subject, intransitiveVerb }) => {
      const s = getWord(subject)
      const v = getWord(intransitiveVerb)
      return `${s}${v}`
    }
  }
}
