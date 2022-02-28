import { GetStaticProps } from 'next'
import { parseMarkdown } from '../lib/markdown'
import fs from 'fs'
import matter from 'gray-matter'

type AboutMeProps = {
  aboutMe: Record<string, string>
}

const AboutMe = ({ aboutMe }: AboutMeProps) => {
  return (
    <div className="aboutMe-page">
      <div className="markdown-body">
        <div dangerouslySetInnerHTML={parseMarkdown(aboutMe.content)} />
      </div>
    </div>
  )
}

export default AboutMe

export const getStaticProps: GetStaticProps<AboutMeProps> = async () => {
  const fileContents = matter(fs.readFileSync('./markdowns/about_me.md', 'utf-8'))
  return { props: { aboutMe: { content: fileContents.content } } }
}
