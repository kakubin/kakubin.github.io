import fs from 'fs'
import matter from 'gray-matter'
import { formatDate } from './format_date'

export const entryFilenames = fs.readdirSync('./markdowns/entry/')
export const entryDateSet = entryFilenames.map((file) => ({ params: { date: file.slice(0, -3) } }))

const entryFilepath = entryFilenames.map((fileName: string) => {
  return `./markdowns/entry/${fileName}`
})

export const readMarkdown = (filepath: string) => {
  const fileContents = matter(fs.readFileSync(filepath, 'utf-8'))

  return {
    title: fileContents.data.title,
    date: formatDate(fileContents.data.date),
    content: fileContents.content
  } as Entry
}

export const entries = entryFilepath.map(readMarkdown).reverse()
