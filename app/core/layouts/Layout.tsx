import { BlitzLayout, Head } from "blitz"
import { ReactNode } from "react"

const Layout: BlitzLayout<{ title?: string; children?: ReactNode }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "blitz-chakra"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}

export default Layout
