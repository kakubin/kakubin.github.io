import EntryCard from '../components/EntryCard'
import { entries as fetchEntries } from '../lib/entrySource'

type Props = {
  entries: EntryMetaData[]
}

export const getStaticProps = async () => {
  const entries = fetchEntries()

  return {
    props: { entries },
  }
}

const Index = (props: Props) => {
  const entryCards = props.entries.map((entry) => (
    <EntryCard key={entry.title} title={entry.title} date={entry.date} />
  ))

  return (
    <div className="index-page">
      <div className="entry-cards">{entryCards}</div>
    </div>
  )
}

export default Index
