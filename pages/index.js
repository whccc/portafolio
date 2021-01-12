import { Header } from "../components/Header";
import { Description } from "../components/Description";
import { Skills } from "../components/Skills";
import { Layout } from "../components/Layout";
import { Projects } from "../components/Projects";
import { Certificados } from "../components/Certificates";
const Inicio = () => {
  return (
    <div>
      <Layout>
        <Header />
        <div className="Container">
          <Description />
          <Skills />
          <Projects />
          <Certificados />
        </div>
      </Layout>
      <style jsx>{`
        .Container {
          max-width: 1000px;
          margin: auto;
          box-shadow: 0px 0px 6px 4px #ddd;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Inicio;
