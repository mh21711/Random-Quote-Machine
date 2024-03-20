import Page from "./Page";
import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('./Page'), { ssr: false })

function Home() {
  return (
    <NoSSR />
  )
}

export default Home;
