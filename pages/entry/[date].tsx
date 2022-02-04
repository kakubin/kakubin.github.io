import { GetStaticPaths, GetStaticProps } from 'next'
import { entryFilenames, rmExtension, entries } from '../../lib/entryFile'
import { marked } from 'marked'

type Props = {
  entry: Entry
}

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

const Markup = (content: string) => ({ __html: marked.parse(content) })

export default EntryPage

type Params = {
  params: {
    date: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const date = params.date
  const entry = entries.find((entry) => entry.date === date)
  return { props: { entry } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = entryFilenames.map((filename) => {
    const date = rmExtension(filename)
    return { params: { date } }
  })

  return { paths, fallback: false }
}
