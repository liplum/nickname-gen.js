export type WordSet = string[]
export type WordCandidates = WordSet | string

export interface NicknameGenerator {
  genAdjNoun: (params: {
    adjective: WordCandidates,
    noun: WordCandidates
  }) => string

  genSVtO: (params: {
    subject: WordCandidates
    transitiveVerb: WordCandidates
    object: WordCandidates
  }) => string
  
  genSVi: (params: {
    subject: WordCandidates
    intransitiveVerb: WordCandidates
  }) => string
}
