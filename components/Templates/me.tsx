import me from "../../styles/Templates/me.module.css";
import Layout from "@/components/UI/Organisms/Layout";
import Paragraph from "@/Atoms/Paragraph";
import Image from 'next/image';
import ResizeScreen from '@/Utils/resizeScreen';
import { useEffect, useState } from "react";
import Title from "../UI/Atoms/Title";

const MeTemplate = () => {


  const [ScreenSize, setScreenSize] = useState(null);
  useEffect(() => {
    setScreenSize(ResizeScreen() !== null ? ResizeScreen() : null)
  }, [])

  return (
    <Layout>
      <section className={me.section}>
        <div className={me.me__text}>
          <Title>Sobre mim</Title>
          {
            ScreenSize === 'small' ? (
              <div className={me.me__image}>
                <div className={me.me_img}>
                  <Image src="/imagens/lucas.jpeg" width={340} height={350} alt="Lucas Fernando" layout="responsive" />
                </div>
              </div>
            ) : ''
          }

          <Paragraph>
            Olá, meu nome é Lucas Fernando, tenho 21 anos, e sou desenvolvedor front-end.
            Apaixonado por programação e novas tecnologias.
          </Paragraph>

          <Paragraph>
            Tecnologias que estou usando
          </Paragraph>

          {/* Carrocel de imagens de tecnologias */}
          <div className={me.tech}>
            <div className={me.card_tech}>
              <Image src="/imagens/html5.svg" alt="html5" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech}>
              <Image src="/imagens/js.svg" alt="js" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech}>
              <Image src="/imagens/css3.svg" alt="css3" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech}>
              <Image src="/imagens/nextjs.svg" alt="Nextjs" width={100} height={40} layout="responsive" />
            </div>
          </div>

        </div>

        {
          ScreenSize !== 'small' ? (
            <div className={me.me__image}>
              <div className={me.me_img}>
                <Image src="/imagens/lucas.jpeg" width={340} height={350} alt="Lucas Fernando" layout="responsive" />
              </div>
            </div>
          ) : ''
        }

      </section>
    </Layout>
  );
};

export default MeTemplate;
