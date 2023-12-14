import SliderShow from "@/components/slidershow";

const imgsPaths = [
  "/assets/img-project-1.png",
  "/assets/img-project-2.png",
  "/assets/img-project-2.png",
];

function ProjectsIdPage() {
  return (
    <main className="flex flex-col gap-5 bg-bg text-text">
      <h1 className="text-2xl">Conheça o Agiliza Prof</h1>
      <SliderShow imagesPath={imgsPaths} />      
      <div>
        <h2 className="text-xl">Contexto do projeto</h2>
        <p>
          O Agiliza prof foi um projeto construído para facilitar o lancamento de 
          avaliação e presença de alunos em escolas da rede pública do estado do
          Mato Grosso. Basicamente desenvolvi uma automação para entrar no sistema 
          estadual e lançar as avaliações e presenças dos alunos, pois o lançamento da 
          forma tradicional exigia muitas horas dos professores usando o sistema público
          que por sua vez é lento e pouco intuitivo. Para isso usei a biblioteca puppeteer
          para automatizar o processo
        </p>
      </div>
      {/* Um mini dialogo de como foi pegar o projeto */}
      <div>
        <h2 className="text-xl">Técnologias usadas</h2>
        <ul>
          <li>
            <h5>Typescript</h5>
            <p>Para tipar o código e facilitar a manutenção</p>
          </li>
          <li>
            <h5>NextJS</h5>
            <p>Um framework moderno para criar aplicações rapidas e seguras</p>
          </li>
          <li>
            <h5>NodeJS</h5>
            <p>Para rodar o código</p>
          </li>
          <li>
            <h5>Google Firebase</h5>
            <p>Para armazenar os dados dos usuários</p>
          </li>
          <li>
            <h5>Puppeteer</h5>
            <p>Para automatizar o processo de lançamento das avaliações e presenças</p>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl">Desafios??**</h2>
        <p>
          O maior desafio foi entender como o sistema funcionava e como eu poderia
          automatizar o processo de lançamento das avaliações e presenças dos alunos. O 
          sistema é lento e pouco intuitivo, por isso tive que usar a biblioteca 
          puppeteer 
        </p>
      </div>      
    </main>
  );
}

export default ProjectsIdPage;