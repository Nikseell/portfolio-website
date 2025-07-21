import { type FC } from "react";
import Layout from "../components/common/Layout";

const About: FC = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">About Page</h1>
      </div>
    </Layout>
  );
};

export default About;
