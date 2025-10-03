import Link from 'next/link'

const EntryCard = (props: EntryMetaData) => {
  return (
    <Link href={`/entry/${props.date}`}>
      <div className="entry-card">
        <div className="entry-date">
          <div className="date-text">{props.date}</div>
        </div>
        <div className="entry-title">
          <div className="entry-text">{props.title}</div>
        </div>
      </div>
    </Link>
  )
}

export default EntryCard
