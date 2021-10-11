import { GetStaticProps, GetStaticPaths } from 'next'
import { entryDateSet, entries } from '../../lib/entry_files'
import marked from 'marked'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = entryDateSet
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: { params: { date: string } }) => {
  const date = params.date
  const entry = entries.find((entry) => entry.date === date)
  return { props: { entry } }
}

const EntryPage = ({ entry }: { entry: Entry }) => {
  return (
    <div className="entry-page">
      <div className="container">
        <div className="entry-title">
          {entry.title}
        </div>
        <div className="entry-body">
          {marked(entry.content)}
        </div>
      </div>
    </div>
  )
}

export default EntryPage
