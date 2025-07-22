import { type FC } from "react";
import Layout from "../components/common/Layout";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import SkillsMarquee from "../components/SkillsMarquee";

const Home: FC = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
};

export default Home;
