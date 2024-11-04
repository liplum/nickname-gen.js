import { NicknameGenerator, WordCandiates } from "..";
import { Random } from 'random'

export const createGenerator = (options?: {
  seed?: string
}): NicknameGenerator => {
  const { seed } = options ?? {}
  const rand = new Random(seed)

  const getWord = (word: WordCandiates)=>{
    if(typeof word === "string"){
      return word
    }
    return rand.choice(word)
  }

  return {
    generateAdjNoun: ({ adjective, noun, }) => {
      const adj = getWord(adjective)
      const n = getWord(noun)
      return `${adj}${n}`
    },
    generateSVtO: ({ subject, transitivieVerb, object }) => {
      const s = getWord(subject)
      const v = getWord(transitivieVerb)
      const o = getWord(object)
      return `${s}${v}${o}`
    },
    generateSVi: ({ subject, intransitiveVerb }) => {
      const s = getWord(subject)
      const v = getWord(intransitiveVerb)
      return `${s}${v}`
    }
  }
}
