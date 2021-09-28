import { GetStaticProps, GetStaticPaths } from 'next'
import { entryDateSet, entries } from '../../lib/entry_files'
import Layout from '../../components/Layout'

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
    <Layout>
      <div className="entry-page">
        <div className="container">
          <div className="entry-title">
            {entry.title}
          </div>
          <div className="entry-body">
            {entry.content}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EntryPage
