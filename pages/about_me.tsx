import type { GetStaticProps } from 'next'
import { parseMarkdown } from '../lib/markdown'
import fs from 'node:fs'
import matter from 'gray-matter'

type AboutMeProps = {
  aboutMe: Record<string, string>
}

const AboutMe = ({ aboutMe }: AboutMeProps) => {
  // biome-ignore-start lint/security/noDangerouslySetInnerHtml: no choice
  return (
    <div className="aboutMe-page">
      <div className="markdown-body">
        <div dangerouslySetInnerHTML={parseMarkdown(aboutMe.content)} />
      </div>
    </div>
  )
  // biome-ignore-end lint/security/noDangerouslySetInnerHtml: no choice
}

export default AboutMe

export const getStaticProps: GetStaticProps<AboutMeProps> = async () => {
  const fileContents = matter(
    fs.readFileSync('./markdowns/about_me.md', 'utf-8'),
  )
  return { props: { aboutMe: { content: fileContents.content } } }
}
