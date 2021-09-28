import { NextPage } from "next"
import Image from 'next/image'
import Link from 'next/link'

const Header: NextPage = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link href="/">
          <a className="header-title">
            <Image src="/whiskey.svg" alt="Vercel Logo" width={72} height={16} />
            Kakubin's Blog
          </a>
        </Link>
        <div className="site-nav">
          <ul>
            <Link href="/about_me">
              <a>About Me</a>
            </Link>
            <Link href="/biograph">
              <a>Biograph</a>
            </Link>
            <Link href="https://github.com/kakubin">
              <a target="_blank" rel="noreferrer">GitHub</a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
