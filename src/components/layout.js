import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-2xl">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="text-2xl" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="container my-3 p-10 shadow-sm" data-is-root-path={isRootPath}>
      <header className="p-10 border-2 border-blue-600">{header}</header>
      <main className="p-10 border-2 border-blue-600">{children}</main>
      <footer className="p-10 border-2 border-blue-600">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
