import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    logoPlatform: "/assets/platforms/whatsapp.png",
    href: "https://wa.me/5565996743426",
    text: "Meu WhatsApp"
  },
  {
    logoPlatform: "/assets/platforms/workana.png",
    href: "https://www.workana.com/freelancer/2079ebb35df0fad6f7e80f4edeb6feee",
    text: "Meu perfil no Workana"
  },  
  {
    logoPlatform: "/assets/platforms/99freelas.png",
    href: "https://www.99freelas.com.br/user/luanderson-santos",
    text: "Meu perfil no 99Freelas"
  },
  {
    logoPlatform: "/assets/platforms/linkedin.png",
    href: "https://www.linkedin.com/in/lu-anderson/",
    text: "Meu perfil no Linkedin"
  },
  {
    logoPlatform: "/assets/platforms/instagram.png",
    href: "https://www.instagram.com/luanderson_dev/",
    text: "Meu perfil no Instagram"
  }
];

function Contact(){
  return (
    <>
      <header className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-primary text-center">
          Contato
        </h1>
        <p className="text-center">
          Se você quiser entrar em contato seja para discutir ideias inovadoras, 
          esclarecer dúvidas, ou simplesmente para um bate-papo descontraído e me conhecer
          melhor, estou aqui para ouvir você. 
        </p>
        <p className="text-center">
          Você pode me encontrar nas seguintes plataformas 👇
        </p>
      </header>
      <main className="w-11/12">
        { contacts.map((contact) => (
          <Link
            key={contact.href} 
            className="
              flex gap-2 items-center
              px-4 py-2 mb-1 rounded-lg
              bg-primary text-bg
              font-bold
            "
            href={contact.href}
            target="_blank"
          >
            <Image 
              src={contact.logoPlatform}
              width={25}
              height={25} 
              alt={contact.text}
            />
            <p className="w-full text-center">
              {contact.text}
            </p>
          </Link>
        ))}
      </main>
    </>
  );
}

export default Contact;