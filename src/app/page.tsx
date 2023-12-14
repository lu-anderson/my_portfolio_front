import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header className="flex flex-col gap-5">
        <div className="text-center">
          <h2>
            <span className="text-primary">{"Olá, boas vindas! "}</span>
            Me chamo
          </h2>
          <h1 className="text-2xl">Luanderson Santos</h1>
          <h2>
            {"e sou "}
            <span className="text-primary ">Desenvolvedor.</span>
          </h2>
        </div>
        <Image
          className="rounded-full"
          src="/assets/img-profile.jpg"
          width={192}
          height={192}
          alt="Foto de perfil"
        />
      </header>
      <main className="w-11/12">
        <section className="flex flex-col items-center gap-5">
          <p className="text-center">
            O que eu faço? Desenvolvo soluções para os mais variados problemas 
            relacionados à Tecnologia da Informação (TI). Crio sites, aplicativos para 
            Android e iOS, programas para Windows, bots e automações. Em resumo, se você 
            tem um problema, eu desenvolvo uma solução.
          </p>
          <div className="flex flex-col items-center gap-3 w-full">
            <Link 
              href="contact"
              className="rounded-lg bg-primary p-2 font-bold text-center text-bg w-full">
              Entre em contato comigo
            </Link>
            <p>ou</p>
            <Link 
              href="/projects"
              className="rounded-lg bg-secondary p-2 font-bold text-center text-bg w-full">
              Veja meus últimos projetos
            </Link>
            <Link
              href="/feedbacks"
              className="rounded-lg bg-text p-2 font-bold text-center text-bg w-full">
              Veja depoimentos de clientes
            </Link >
            <Link 
              href="/techs"
              className="rounded-lg bg-secondary p-2 font-bold text-center text-bg w-full"
            >
              Veja as tecnologias que uso
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
