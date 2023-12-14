import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  imgPath: string;
  href: string;
}

function Project({ title, imgPath, href }: Props) {
  return (
    <Link href={href} className="group cursor-pointer flex flex-col items-center relative">
      <Image 
        className="rounded-lg group-hover:blur-sm group-hover:opacity-30"
        src={imgPath}
        width={300}
        height={300}
        alt={title}
      />
      <div className="hidden group-hover:block text-text font-bold absolute top-1/3">
        Saiba mais sobre o projeto
      </div>         
      <h3 className="text-center text-text">
        {title}
      </h3>
    </Link>
  );
}

export default Project;