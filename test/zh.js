import test from 'ava'
import { createGenerator } from "../dist/zh/index.js"
import { nouns, adjectives } from "../dist/zh/default.js"

test("adj+noun", t => {
  const generator = createGenerator({ seed: "adj+noun" })
  const gen = () => generator.genAdjNoun({
    adjective: adjectives.positive,
    noun: nouns.cuteAnimals,
  })
  t.assert(gen() === "害羞的小企鹅")
  t.assert(gen() === "幽默的小兔子")
  t.assert(gen() === "乐观的小狗狗")
})