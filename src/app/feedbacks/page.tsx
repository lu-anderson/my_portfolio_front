import Image from "next/image";
import Link from "next/link";

const feedbacks = [
  {
    title: 'Programar uma "Roda da Vida" em formato de Estrela',
    feedback: 'Excelente profissional! Dedicado, rápido, compreensivo e super profissional. Contratarei novamente com certeza.',
    logoPlatform: '/assets/platforms/workana.png',
    author: 'Felipe Moreira',
    href: 'https://www.workana.com/freelancer/2079ebb35df0fad6f7e80f4edeb6feee'
  },
  {
    title: 'Script para validações de ações no Instagram',
    feedback: 'Ótimo programador e muito atencioso! Recomendo a todos do Workana, resolveu todos meus problemas.',
    logoPlatform: '/assets/platforms/workana.png',
    author: 'Gabriel da Silveira',
    href: 'https://www.workana.com/freelancer/2079ebb35df0fad6f7e80f4edeb6feee'
  }
];

type Props = {
  title: string;
  feedback: string;
  logoPlatform: string;
  href: string;
}

function Feedbacks() {
  return (
    <>
      <header className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl text-primary text-center">
          Depoimentos de clientes
        </h1>
        <p className="text-center">
          Veja o que meus clientes e pessoas que trabalharam comigo falam sobre mim.
        </p>
      </header>
      <main>
        <section className="flex flex-col gap-5 items-center">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-bg2 rounded-md p-3"
            >
              <h3 className="font-bold">
                {feedback.title}
              </h3>
              <span className="font-bold text-2xl text-secondary">,,</span>
              <p>
                {feedback.feedback}
                <span className="font-bold text-2xl text-secondary">,,</span>
              </p>
              <div className="mt-2">
                <Link
                  href={feedback.href}
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <Image
                    src={feedback.logoPlatform}
                    width={20}
                    height={20}
                    alt="Logo da plataforma"
                  />
                  {feedback.author + ' '}
                  <span
                    className="text-secondary"
                  >
                    no Workana
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Feedbacks;