import { marked } from 'marked'

export const parseMarkdown = (content: string) => ({ __html: marked.parse(content) })
