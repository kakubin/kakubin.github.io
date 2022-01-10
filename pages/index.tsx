import EntryCard from '../components/EntryCard'
import { entries } from '../lib/entry_files'

type Props = {
  entries: EntryMetaData[]
}

export const getStaticProps = async () => {
  return {
    props: { entries },
  }
}

const Index = (props: Props) => {
  const entryCards = props.entries.map(
    (entry) =>
      <EntryCard
        key={entry.title}
        title={entry.title}
        date={entry.date}
      />
  )

  return (
    <div className="index-page">
      <div className="container">
        <div className="entry-cards">
          {entryCards}
        </div>
      </div>
    </div>
  )
}

export default Index
