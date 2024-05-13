import Project from '@/components/project';
import { Projects } from '@/types/types';

const ROUTE_AND_QUERY = '/api/projects?populate=thumbnail';

async function getProjects(): Promise<Projects> {
  const response = await fetch(process.env.NEXT_PUBLIC_CMS_URL + ROUTE_AND_QUERY);
  const data = await response.json();
  return data;
}

async function Projects() {
  const { data: projects } = await getProjects();
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
            {projects.map(({ attributes, id }) => {
              const {
                thumbnail: { data: { attributes: { formats: { thumbnail } } } }
              } = attributes;
              return <Project
                key={id}
                title={attributes.name}
                imgPath={`${process.env.NEXT_PUBLIC_CMS_URL}${thumbnail.url}`}
                href={`/projects/${id}`}
              />;

            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;