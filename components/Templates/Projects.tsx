import projects from "../../styles/Templates/projects.module.css";

import Layout from "../UI/Organisms/Layout";
import Icon from "@/Utils/Icon";
import Link from "@/Utils/Link";
import Paragraph from "@/components/UI/Atoms/Paragraph";

const ProjectsTemplate = () => {
  return (
      <Layout>
        <div className={projects.projects}>
          <div className={projects.text}>
            <h2>Projetos</h2>

            <Paragraph>
              Para acompanhar os projetos e tecnologias aos quais estou
              interagindo e desenvolvendo, visite meu
              <Link href="/"> github</Link>, <Link href="/">codepen</Link> e
              <Link href="/"> frontend mentor</Link>.
            </Paragraph>

            <Paragraph>
              Acesse também meu <Link href="/">linkedIn</Link>, estou sempre
              adicionando novidades sobre o que estou estudando ou
              desenvolvendo.
            </Paragraph>
          </div>

          <div className={projects.static}>
            <div className={projects.card}>
              <div className={projects["card-header"]}>
                <h3>Github</h3>
                <Icon icon="github" />
              </div>
              <div className={projects["card-body"]}>
                Veja os projetos que estou trabalhando no momento
              </div>
              <div className={projects["card-footer"]}>
                <Link href="/">ir agora</Link>
              </div>
            </div>

            <div className={projects.card}>
              <div className={projects["card-header"]}>
                <h3>CodePen</h3>
                <Icon icon="codepen" />
              </div>
              <div className={projects["card-body"]}>
                Veja no codePen o que estou criando com css no momento!
              </div>
              <div className={projects["card-footer"]}>
                <Link href="/">ir agora</Link>
              </div>
            </div>

            <div className={projects.card}>
              <div className={projects["card-header"]}>
                <h3>Frontend Mentor</h3>
                <Icon icon="frontendMentor" />
              </div>
              <div className={projects["card-body"]}>
                To sempre codando novos desafios do frontendMentor.
              </div>
              <div className={projects["card-footer"]}>
                <Link href="/">ir agora</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default ProjectsTemplate;
