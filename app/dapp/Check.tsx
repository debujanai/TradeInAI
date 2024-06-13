import Head from 'next/head'
import './check.css'

const Check = () => {
  return (
    <div className="container">
      <Head>
        <title>Responsive Page Split</title>
        <meta name="description" content="A page split into two vertical sections with different colors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="split">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Check
