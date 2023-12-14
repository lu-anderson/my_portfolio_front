import Image from "next/image";

const techs = [
  {
    name: "React",
    description: "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    imgPath: "/assets/react.png",
  },
  {
    name: "React",
    description: "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    imgPath: "/assets/react.png",
  }
];

function TechsPage() {
  return (
    <>
      <header className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl text-primary text-center">Tecnologias</h1>
        <p className="text-center">
          Veja as tecnologias que utilizo para desenvolver meus projetos. Tecnologias que
          facilitam o desenvolvimento e tornam o produto final mais rápido e eficiente.
        </p>
      </header>
      <main>
        <ul className="flex flex-col gap-5 items-center">
          {techs.map((tech, index) => (
            <li
              key={tech.name}
              className="flex flex-col gap-5 bg-bg2 p-2 rounded-lg"
            >
              <div className="flex gap-5 items-center justify-center">
                <Image
                  src={tech.imgPath}
                  alt={tech.name}
                  width={50}
                  height={50}
                />
                <h2 className="font-bold text-xl text-secondary text-center">
                  {tech.name}
                </h2>
              </div>
              <p className="text-center">{tech.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default TechsPage;
