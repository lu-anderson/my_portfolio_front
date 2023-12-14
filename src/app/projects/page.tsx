import Project from '@/components/project';

function Projects(){
  return (
    <>
      <header>
        <h1 
          className="font-bold text-2xl text-primary text-center"
        >
          Trabalhos Recentes
        </h1>
        <p className='text-center'>
          Veja os últimos projetos nos quais trabalhei. Se tiver interesse em saber mais 
          sobre algum deles, clique para ver fotos e as tecnologias utilizadas.
        </p>
      </header>
      <main>
        <section className="flex flex-col gap-5 items-center">        
          <div className="flex flex-col gap-5">
            <Project
              title="Um site para reproduzir vídeos de conteúdo adulto"
              imgPath="/assets/img-project-1.png"
              href="/projects/1"
            />
            <Project
              title="Um site para reproduzir vídeos de conteúdo adulto"
              imgPath="/assets/img-project-2.png"
              href="/projects/2"
            />     
          </div>
        </section>
      </main>      
    </>
  );
}

export default Projects;