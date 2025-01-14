import Head from 'next/head';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experiences } from '../components/Experiences';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col gap-16">
        <Head>
          <title>Vitor Rafael - Desenvolvedor Front-end</title>
          <meta name="description" content="Esse é o meu portfólio, onde há uma rápida descrição sobre mim e meus projetos." />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </div>
      <footer className="py-4 flex justify-center items-center">
        <p className="text-sm text-zinc-400">
          Feito com 💙 por {''}
          <a className="font-bold text-primary-500" rel="noreferrer" target={'_blank'} href="https://github.com/vitor2806">
            mim
          </a>
        </p>
      </footer>
    </>
  );
}
