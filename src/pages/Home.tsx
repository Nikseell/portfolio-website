import { type FC } from "react";
import Layout from "../components/common/Layout";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Footer from "../components/common/Footer";
import Expertise from "../components/sections/Expertise";
import TextMarquee from "../components/TextMarquee";
import SkillsMarquee from "../components/SkillsMarquee";

const Home: FC = () => {
  return (
    <Layout>
      <Hero />
      <Expertise />
      <Projects />
      <Experience />
      <TextMarquee />
      <Footer />
    </Layout>
  );
};

export default Home;
