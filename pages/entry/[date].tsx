import { GetStaticPaths } from 'next'
import { entryDateSet, entries } from '../../lib/entry_files'
import { marked } from 'marked'

type Props = {
  entry: Entry
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = entryDateSet
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: { params: { date: string } }) => {
  const date = params.date
  const entry = entries.find((entry) => entry.date === date)
  return { props: { entry } }
}

const Markup = (content: string) => ({ __html: marked.parse(content) })

const EntryPage = ({ entry }: Props) => {
  return (
    <div className="entry-page">
      <div className="container">
        <div className="entry-body">
          <div dangerouslySetInnerHTML={Markup(entry.content)} />
        </div>
      </div>
    </div>
  )
}

export default EntryPage
