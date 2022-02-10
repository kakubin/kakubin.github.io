import { GetStaticPaths, GetStaticProps } from 'next'
import { entryFilenames, rmExtension, entries } from '../../lib/entryFile'
import { parseMarkdown } from '../../lib/markdown'

type EntryProps = {
  entry: Entry
}

const EntryPage = ({ entry }: EntryProps) => {
  return (
    <div className="entry-page">
      <div className="markdown-body">
        <div dangerouslySetInnerHTML={parseMarkdown(entry.content)} />
      </div>
    </div>
  )
}

export default EntryPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const date = params!.date
  const entry = entries.find((entry) => entry.date === date) as Entry
  return { props: { entry } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = entryFilenames.map((filename) => {
    const date = rmExtension(filename)
    return { params: { date } }
  })

  return { paths, fallback: false }
}
