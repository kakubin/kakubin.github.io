declare interface EntryMetaData {
  title: string
  date: string
}

declare interface Entry extends EntryMetaData {
  content: string
}
