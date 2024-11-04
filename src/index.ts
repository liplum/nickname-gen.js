export type WordSet = string[]
export type WordCandiates = WordSet | string

export interface NicknameGenerator {
  genAdjNoun: (params: {
    adjective: WordCandiates,
    noun: WordCandiates
  }) => string

  genSVtO: (params: {
    subject: WordCandiates
    transitivieVerb: WordCandiates
    object: WordCandiates
  }) => string
  
  genSVi: (params: {
    subject: WordCandiates
    intransitiveVerb: WordCandiates
  }) => string
}
