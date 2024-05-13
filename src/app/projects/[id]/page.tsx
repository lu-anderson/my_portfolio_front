import RichText from "@/components/rich_text";
import SliderShow from "@/components/slidershow";
import { Project } from "@/types/types";

const ROUTE_AND_QUERY = (id: string) => `/api/projects/${id}?populate=*`;

async function getProject(id: string): Promise<Project> {
  const response = await fetch(process.env.NEXT_PUBLIC_CMS_URL + ROUTE_AND_QUERY(id));
  const data = await response.json();
  return data;
}

async function ProjectsIdPage({ params: { id } }: { params: { id: string } }) {
  const { data: { attributes: project } } = await getProject(id);
  const { images: { data: images }, technologies: { data: technologies } } = project;

  const imgsPaths = images.map(({ attributes: {url} }) => {
    return `${process.env.NEXT_PUBLIC_CMS_URL}${url}`;
  });

  return (
    <main className="flex flex-col gap-5 bg-bg text-text">
      <h1 className="text-2xl">Conheça o {project.name}</h1>
      <SliderShow imagesPath={imgsPaths} />
      <div>
        <h2 className="text-xl">Contexto do projeto</h2>
        <RichText content={project.description} />
      </div>
      <div>
        <h2 className="text-xl">Tecnologias usadas</h2>
        <ul>
          {technologies.map(({ attributes: { name } }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl">Desafios</h2>
        <p>
          {project.challenges}
        </p>
      </div>
    </main>
  );
}

export default ProjectsIdPage;