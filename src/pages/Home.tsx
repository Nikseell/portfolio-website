import { type FC } from "react";
import Layout from "../components/common/Layout";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import SkillsMarquee from "../components/SkillsMarquee";
import Experience from "../components/sections/Experience";

const Home: FC = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Experience />
    </Layout>
  );
};

export default Home;
