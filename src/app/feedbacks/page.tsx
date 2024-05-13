import { Feedbacks } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const ROUTE_AND_QUERY = '/api/feedbacks?populate=logoPlatform';

async function getFeedbacks(): Promise<Feedbacks> {
  const response = await fetch(process.env.NEXT_PUBLIC_CMS_URL + ROUTE_AND_QUERY);
  const data = await response.json();
  return data;
}

async function Feedbacks() {
  const { data: feedbacks } = await getFeedbacks();

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
          {feedbacks.map((feedback, index) => {
            const {
              attributes: { title, feedback: description, author, href, logoPlatform }
            } = feedback;

            const { data: { attributes: { formats: { thumbnail } } } } = logoPlatform;

            return (
              <div
                key={index}
                className="bg-bg2 rounded-md p-3"
              >
                <h3 className="font-bold">
                  {title}
                </h3>
                <span className="font-bold text-2xl text-secondary">,,</span>
                <p>
                  {description}
                  <span className="font-bold text-2xl text-secondary">,,</span>
                </p>
                <div className="mt-2">
                  <Link
                    href={href}
                    className="flex gap-2 items-center"
                    target="_blank"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_CMS_URL}${thumbnail.url}`}
                      width={20}
                      height={20}
                      alt="Logo da plataforma"
                    />
                    {author + ' '}
                    <span
                      className="text-secondary"
                    >
                      no Workana
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Feedbacks;