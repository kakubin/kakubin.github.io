import fs from 'fs'
import matter from 'gray-matter'
import { formatDate } from './formatDate'

export const entryFilenames = fs.readdirSync('./markdowns/entry/') as string[]
export const rmExtension = (filename: string): string =>
  filename.replace(/\.md$/, '')

const entryFilepath = (entryFilename: string): string =>
  `./markdowns/entry/${entryFilename}`

export const readMarkdown = (filepath: string) => {
  const fileContents = matter(fs.readFileSync(filepath, 'utf-8'))

  return {
    title: fileContents.data.title,
    date: formatDate(fileContents.data.date),
    content: fileContents.content,
  } as Entry
}

const sortByDate = (entries: Entry[], desc = true): Entry[] => {
  const sortedEntries = entries.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  )

  return desc ? sortedEntries : sortedEntries.reverse()
}

export const entries = () => {
  const _entries = entryFilenames.map((filename) =>
    readMarkdown(entryFilepath(filename)),
  )
  return sortByDate(_entries)
}
