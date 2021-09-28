import { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: NextPage = ({ children, title = 'kakubin' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/whiskey.svg" />
      </Head>
      <Header>
      </Header>
      <div className='main'>
        {children}
      </div>
    </>
  )
}

export default Layout
