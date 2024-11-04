export type WordSet = string[]

export interface NicknameGenerator {
  generateSVO: (params: {
    subjects: WordSet
    verbs: WordSet
    objects: WordSet
  }) => string
}
