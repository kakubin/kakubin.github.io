const EntryCard = (props: EntryMetaData) => {
  return (
    <a href={`/entry/${props.date}`}>
      <div className="entry-card">
        <div className="entry-date">
          <div className="date-text">{props.date}</div>
        </div>
        <div className="entry-title">
          <div className="entry-text">{props.title}</div>
        </div>
      </div>
    </a>
  )
}

export default EntryCard
