import fs from 'node:fs'
import matter from 'gray-matter'
import { formatDate } from './formatDate'

const entryFilenames = fs.readdirSync('./markdowns/entry/')

const entryFilepath = (entryFilename: string) =>
  `./markdowns/entry/${entryFilename}`

export const readMarkdown = (filepath: string): Entry => {
  const fileContents = matter(fs.readFileSync(filepath, 'utf-8'))

  return {
    title: fileContents.data.title,
    date: formatDate(fileContents.data.date),
    content: fileContents.content,
  }
}

const sortByDate = (entries: Entry[]) => {
  return entries.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  )
}

export const entries = () => {
  const _entries = entryFilenames.map((filename) =>
    readMarkdown(entryFilepath(filename)),
  )
  return sortByDate(_entries)
}
