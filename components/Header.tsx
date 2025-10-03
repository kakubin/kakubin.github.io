import type { NextPage } from 'next'
import Link from 'next/link'

const Header: NextPage = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link href="/">
          <div className="header-title">Untitled</div>
        </Link>
        <div className="site-nav">
          <div className="nav-items">
            <Link href="/about_me">
              <div>About Me</div>
            </Link>
            <Link href="https://github.com/kakubin" target="_blank"  rel="noreferrer">
              <div>
                GitHub
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
