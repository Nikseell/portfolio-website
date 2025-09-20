import { type FC } from 'react'
import Layout from '../components/common/Layout'
import Hero from '../components/sections/Hero'
import Work from '../components/sections/Work'
import Experience from '../components/sections/Experience'
import Footer from '../components/common/Footer'
import Expertise from '../components/sections/Expertise'

const Home: FC = () => {
  return (
    <Layout>
      <Hero />
      <Work />
      <Expertise />
      <Experience />
      <Footer />
    </Layout>
  )
}

export default Home
