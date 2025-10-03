import type { GetStaticPaths, GetStaticProps } from 'next'
import { entries } from '../../lib/entrySource'
import { parseMarkdown } from '../../lib/markdown'

type EntryProps = {
  entry: Entry
}

const EntryPage = ({ entry }: EntryProps) => {
  // biome-ignore-start lint/security/noDangerouslySetInnerHtml: no choice
  return (
    <div className="entry-page">
      <div className="markdown-body">
        <div dangerouslySetInnerHTML={parseMarkdown(entry.content)} />
      </div>
    </div>
  )
  // biome-ignore-end lint/security/noDangerouslySetInnerHtml: no choice
}

export default EntryPage

export const getStaticProps: GetStaticProps<EntryProps> = async ({
  params,
}) => {
  const date = params?.date
  const entry = entries().find((entry) => entry.date === date) as Entry
  return { props: { entry } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = entries().map(({ date }) => {
    return { params: { date } }
  })

  return { paths, fallback: false }
}
