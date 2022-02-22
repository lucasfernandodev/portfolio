import projects from "../../styles/Templates/projects.module.css";
import Layout from "src/components/UI/Organisms/Layout";
import Paragraph from "src/components/UI/Atoms/Paragraph";
import CardPreview from "src/components/UI/Molecules/CardPreview/cardPreview";
import CardFeatured from "src/components/UI/Molecules/CardFeatured/cardFeatured";
import List from 'src/infra/Store/websites/list';
import Title from "../UI/Atoms/Title";

interface cardType {
  link: string;
  image: string;
  title: string;
  techs?: Array<string>;
}


const ProjectsTemplate = () => {

  return (
    <Layout>
      <div className={projects.projects}>
        <div className={projects.text}>
          <Title>O que eu faço?</Title>
          <div className={projects.content}>
            <Paragraph>
              Como desenvolvedor front-end trabalho codando o design,
              transformando o em sites e aplicações, com foco em trazer a melhor experiência para o usuário.
            </Paragraph>
            <Paragraph>
              Sempre desenvolvo sites
              fiéis ao design focando em integrar qualidade e velocidade com a experiência do usuário.
            </Paragraph>
          </div>
        </div>

        <div className={projects.static}>

          <CardFeatured
            icon="rocket"
            title="Velocidade"
            content="Procuro sempre desenvolver um site otimizado utilizando as principais práticas do mercado."
          />

          <CardFeatured
            icon="quality"
            title="Qualidade"
            content="Para garantir a qualidade da aplicação, desenvolvo sempre com foco no código limpo e semântico."
          />

          <CardFeatured
            icon="frontendMentor"
            title="Experiência"
            content="A experiência do usuário é sempre importante se um site deseja se manter e crescer, por isso busco desenvolver sites funcionais, fiéis ao design,
            que tenham acessibilidade e responsividade."
          />

        </div>
      </div>


      <div className={projects.projects__cards}>{
        List.map((item: cardType, index) => {
          return <CardPreview key={index} techs={item.techs} image={item.image} link={item.link} title={item.title} />
        })
      }</div>

    </Layout>
  );
};

export default ProjectsTemplate;