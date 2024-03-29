import { NextPage } from "next"
import Link from 'next/link'

const Header: NextPage = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link href="/">
          <a className="header-title">
            Untitled
          </a>
        </Link>
        <div className="site-nav">
          <div className="nav-items">
            <Link href="/about_me">
              <a>About Me</a>
            </Link>
            <Link href="https://github.com/kakubin">
              <a target="_blank" rel="noreferrer">GitHub</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
