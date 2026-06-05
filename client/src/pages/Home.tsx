import { motion } from 'framer-motion';
import { Github, Mail, ExternalLink, Code2, Smartphone, Database, Server, Wrench, Menu, X, Gamepad2, Dumbbell, Network, Music2, Zap, Radio } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'home', label: 'START' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'STACK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXP' },
  { id: 'contact', label: 'CONTACT' },
];

const skillGroups = [
  { category: 'Frontend', icon: Code2, items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Framer Motion'] },
  { category: 'Mobile', icon: Smartphone, items: ['React Native', 'Expo', 'Flutter', 'Dart', 'Kotlin'] },
  { category: 'Backend', icon: Server, items: ['PHP', 'Java', 'C#', 'Python', 'Node.js', 'APIs REST'] },
  { category: 'Database', icon: Database, items: ['MySQL', 'Supabase', 'PostgreSQL'] },
  { category: 'Redes / TI', icon: Network, items: ['Cabeamento', 'Crimpagem', 'Switches', 'Pontos de rede', 'Suporte técnico'] },
  { category: 'Ferramentas', icon: Wrench, items: ['Git', 'GitHub', 'VS Code', 'TypeScript'] },
];

const projects = [
  {
    title: 'Volume X',
    kicker: 'MAIN APP',
    icon: Dumbbell,
    image: '/volume-x-home.png',
    description: 'Aplicativo fitness mobile para alunos e instrutores, com treinos, progresso, cálculos, vídeos, perfil e base para integração com Supabase.',
    features: ['Login e cadastro', 'Painel do aluno', 'Controle de treinos', 'Progresso físico', 'Interface mobile'],
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Mobile'],
    link: 'https://github.com/GrimmBtz',
  },
  {
    title: 'Chronos Games',
    kicker: 'WEB PLATFORM',
    icon: Gamepad2,
    image: '/chronos-screenshot.png',
    description: 'Plataforma gamer com suporte, chat visual, formulário de atendimento e identidade própria para uma experiência web responsiva.',
    features: ['Suporte online', 'Chat visual', 'Interface gamer', 'Layout responsivo'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Web'],
    link: 'https://github.com/GrimmBtz',
  },
  {
    title: 'Kurama 2D',
    kicker: 'C# GAME',
    icon: Zap,
    image: '/graffiti-abstract.svg',
    description: 'Jogo 2D em C# criado para praticar lógica, movimentação, colisões, organização de cenas e estrutura de gameplay.',
    features: ['Lógica de jogo', 'Movimentação', 'Sprites', 'OOP'],
    tags: ['C#', 'Game Dev', '2D', 'OOP'],
    link: 'https://github.com/GrimmBtz',
  },
];

const experienceItems = [
  { title: 'Estágio de TI', place: 'Hospital Odilon Behrens', text: 'Suporte técnico, redes, crimpagem, switches, cabos, pontos de rede e atendimento interno em ambiente hospitalar.' },
  { title: 'Formação técnica', place: 'Senac', text: 'Base em tecnologia, redes, segurança, desenvolvimento, projetos integradores e atividades práticas.' },
  { title: 'Jogos e Mobile', place: 'Cursos e projetos', text: 'Curso de jogos, programação mobile, apps em React Native/Expo e Flutter, além de jogo em C#.' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="noise-layer" />
      <div className="ink-splatter one" />
      <div className="ink-splatter two" />

      <nav className="fixed left-0 right-0 top-0 z-50 bg-black/75 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <button onClick={() => scrollTo('home')} className="tag-logo" aria-label="Voltar ao início">
            <b>CAIO</b>
            <span>GRIMM</span>
          </button>

          <div className="hidden items-center gap-3 lg:flex">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ rotate: index % 2 === 0 ? -2 : 2 }}
                whileHover={{ x: -8, scale: 1.08, rotate: index % 2 === 0 ? -7 : 7 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => scrollTo(item.id)}
                className="persona-cut-button"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <button className="mobile-trigger lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} className="mobile-menu lg:hidden">
            {navItems.map((item, index) => (
              <button key={item.id} onClick={() => { scrollTo(item.id); setMobileMenuOpen(false); }} className="persona-cut-button" style={{ transform: `rotate(${index % 2 ? 2 : -2}deg)` }}>
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      <section id="home" className="persona-hero relative min-h-screen pt-24">
        <div className="red-room" />
        <div className="halftone-moon" />
        <div className="white-rip top" />
        <div className="white-rip bottom" />
        <div className="rage-mark">X</div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-8 px-4 lg:grid-cols-[.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -120, rotate: -3 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: .65, ease: 'easeOut' }}>
            <span className="paper-label">PORTFÓLIO DEV</span>
            <h1 className="hero-name" aria-label="Caio Lucas">
              <span>CAIO</span>
              <span>LUCAS</span>
            </h1>
            <div className="grimm-tag">// GRIMM</div>
            <p className="hero-subtitle">
              Desenvolvedor em formação. Mobile, web, redes, jogos, música e arte urbana no mesmo painel.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://github.com/GrimmBtz" target="_blank" rel="noreferrer" className="impact-link red"><Github size={22} /> GitHub</a>
              <a href="mailto:grimmsmurf7@gmail.com" className="impact-link white"><Mail size={22} /> Contato</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 120, rotate: 8 }} animate={{ opacity: 1, x: 0, rotate: -2 }} transition={{ duration: .8, ease: 'easeOut' }} className="hero-board">
            <div className="board-lines" />
            <div className="board-text big">GRIMM</div>
            <div className="board-text small">CODE // ART // MOBILE</div>
            <div className="menu-stack" aria-hidden="true">
              {['PROJECTS', 'TECH STACK', 'ABOUT', 'EXPERIENCE', 'CONTACT'].map((item, index) => (
                <motion.button
                  key={item}
                  animate={{ x: [0, index % 2 ? 8 : -8, 0] }}
                  transition={{ duration: 2.2 + index * .18, repeat: Infinity, ease: 'easeInOut' }}
                  onClick={() => scrollTo(navItems[index + 1]?.id || 'home')}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section-zone">
        <SectionTitle eyebrow="GALLERY" title="PROJETOS" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article key={project.title} initial={{ opacity: 0, y: 60, rotate: index % 2 ? 2 : -2 }} whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 1 : -1 }} viewport={{ once: true }} whileHover={{ y: -16, rotate: index % 2 ? -2 : 2 }} className="manga-card">
                <div className="manga-card-image"><img src={project.image} alt={`Prévia do projeto ${project.title}`} /></div>
                <div className="manga-card-body">
                  <div className="flex items-center justify-between gap-3">
                    <span className="paper-label mini">{project.kicker}</span>
                    <Icon className="text-[#ff003c]" />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="feature-list">
                    {project.features.map((feature) => <span key={feature}>{feature}</span>)}
                  </div>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">Ver no GitHub <ExternalLink size={16} /></a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="section-zone black-zone">
        <SectionTitle eyebrow="ARSENAL" title="TECH STACK" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[340px_1fr]">
          <div className="skill-menu-list">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.button key={group.category} whileHover={{ x: 14, rotate: index % 2 ? -3 : 3 }} onClick={() => setActiveSkill(index)} className={activeSkill === index ? 'active' : ''}>
                  <Icon size={24} /> {group.category}
                </motion.button>
              );
            })}
          </div>
          <motion.div key={activeSkill} initial={{ opacity: 0, x: 70, rotate: -2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} className="skill-stage">
            <h3>{skillGroups[activeSkill].category}</h3>
            <p>Tecnologias que aprendi em cursos, atividades, estágio e projetos reais.</p>
            <div className="skill-cloud">
              {skillGroups[activeSkill].items.map((skill, index) => <span key={skill} style={{ transform: `rotate(${index % 2 ? 2 : -2}deg)` }}>{skill}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-zone about-zone">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[.8fr_1.2fr]">
          <SectionTitle eyebrow="WHOAMI" title="SOBRE" align="left" />
          <div className="bio-panel">
            <p>Meu nome é Caio Lucas, mas também utilizo Grimm como identidade criativa nos meus projetos. Sou desenvolvedor em formação, proativo, curioso e movido por tecnologia, música, jogos, design e arte urbana.</p>
            <p>Gosto de criar interfaces com personalidade, explorar novas tecnologias e transformar ideias em projetos reais. Já desenvolvi aplicações mobile, sistemas com banco de dados, jogos em C#, plataformas web e projetos acadêmicos envolvendo segurança, redes e desenvolvimento.</p>
            <p>Minha trajetória também passa por infraestrutura de TI. Fiz estágio no Hospital Odilon Behrens, atuando com suporte técnico, redes, crimpagem de cabos, switches, cabos, pontos de rede e resolução de problemas em ambiente corporativo.</p>
            <p>Estudei no Senac, com aprendizado em curso técnico, desenvolvimento de jogos e atualmente programação mobile. Estou sempre buscando evoluir, construir projetos mais completos e usar criatividade com técnica para entregar experiências digitais marcantes.</p>
            <div className="bio-badges">
              {['Criatividade', 'Redes + Desenvolvimento', 'Aprendizado constante'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-zone black-zone">
        <SectionTitle eyebrow="SIDE QUESTS" title="EXPERIÊNCIA" />
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3">
          {experienceItems.map((item, index) => (
            <motion.article key={item.title} whileHover={{ rotate: index % 2 ? 2 : -2, y: -10 }} className="quest-card">
              <span className="paper-label mini">{item.place}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-zone contact-zone">
        <SectionTitle eyebrow="CONNECT" title="CONTATO" />
        <div className="mx-auto max-w-3xl px-4">
          <div className="contact-panel">
            <Radio className="mx-auto mb-4 text-[#ff003c]" size={48} />
            <p>Disponível para conversar sobre projetos, oportunidades e colaboração.</p>
            <small><Music2 size={18} /> código com ritmo, visual com assinatura</small>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:grimmsmurf7@gmail.com" className="impact-link red"><Mail size={22} /> grimmsmurf7@gmail.com</a>
              <a href="https://github.com/GrimmBtz" target="_blank" rel="noreferrer" className="impact-link white"><Github size={22} /> GrimmBtz</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-tag">© 2026 Caio Lucas “Grimm”. React + Tailwind + Framer Motion.</footer>
    </main>
  );
}

function SectionTitle({ eyebrow, title, align = 'center' }: { eyebrow: string; title: string; align?: 'center' | 'left' }) {
  return (
    <div className={`section-title-wrap ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="paper-label">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
