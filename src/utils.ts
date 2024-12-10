export const merge = (obj: Record<string, string[] | string> | string[]): string[] => {
  const all = new Set<string>()
  if (Array.isArray(obj)) {
    for (const word of obj) {
      all.add(word)
    }
  } else {
    for (const words of Object.values(obj)) {
      if (Array.isArray(words)) {
        for (const word of words) {
          all.add(word)
        }
      } else {
        all.add(words)
      }
    }
  }
  return Array.from(all)
}