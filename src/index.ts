export type WordSet = string[]
export type WordCandiates = WordSet | string

export interface NicknameGenerator {
  generateAdjNoun: (params: {
    adjective: WordCandiates,
    noun: WordCandiates
  }) => string

  generateSVtO: (params: {
    subject: WordCandiates
    transitivieVerb: WordCandiates
    object: WordCandiates
  }) => string
  
  generateSVi: (params: {
    subject: WordCandiates
    intransitiveVerb: WordCandiates
  }) => string
}
