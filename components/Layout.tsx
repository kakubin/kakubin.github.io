import Head from 'next/head'
import type { ReactNode } from 'react'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'kakubin' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/whiskey.svg" />
      </Head>
      <Header></Header>
      <div className="main">
        <div className="container">{children}</div>
      </div>
    </>
  )
}

export default Layout
