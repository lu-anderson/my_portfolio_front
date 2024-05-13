'use client';
import { useState } from "react";
import Link from "next/link";

function Menu(){
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav 
        className={ 
          `
          ${showMenu ? 'w-full h-screen' : 'w-0 h-0'} 
          flex
          flex-col gap-4
          items-center justify-center
          bg-bg2 
          fixed bottom-0 right-0 
          transition-all
          duration-[200ms]
          overflow-hidden
          `
        }
      >
        <Link 
          href="/" 
          onClick={() => setShowMenu(!showMenu)}
          className="font-bold text-2xl hover:text-primary"
        >
          Home
        </Link>
        <Link 
          href="/contact" 
          onClick={() => setShowMenu(!showMenu)}
          className="font-bold text-2xl hover:text-primary"
        >
          Contato
        </Link>
        <Link 
          href="/projects" 
          onClick={() => setShowMenu(!showMenu)}
          className="font-bold text-2xl hover:text-primary"
        >
          Projetos
        </Link>
        <Link 
          href="/feedbacks" 
          onClick={() => setShowMenu(!showMenu)}
          className="font-bold text-2xl hover:text-primary"
        >
          Depoimentos
        </Link>
        <Link 
          href="/about" 
          onClick={() => setShowMenu(!showMenu)}
          className="font-bold text-2xl hover:text-primary"
        >
          Sobre mim
        </Link>
      </nav>
      <div className="fixed bottom-10 right-8">      
        <button 
          className="w-10 h-12 relative"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span 
            className={
              `
              block absolute
              h-1             
            bg-primary 
              transition-all duration-[200ms] ease-in-out 
              ${showMenu ? 'top-3 w-0 left-1/2' : 'top-0 left-0 w-full'}
              `
            }
          >              
          </span>
          <span 
            className={
              `
              block absolute
              h-1 w-full
              top-3 left-0
            bg-primary 
              transition-all duration-[200ms] ease-in-out 
              ${showMenu ? 'rotate-45' : ''}
              `
            }
          >            
          </span>
          <span 
            className={
              `
              block absolute
              h-1 w-full
              top-3 left-0
            bg-primary 
              transition-all duration-[200ms] ease-in-out 
              ${showMenu ? '-rotate-45' : ''}
              `
            }
          >            
          </span>
          <span 
            className={
              `
              block absolute
              h-1
            bg-primary 
              transition-all duration-[200ms] ease-in-out
              ${showMenu ? 'top-3 w-0 left-1/2' : 'top-6 left-0 w-full'}
              `
            }
          >            
          </span>
        </button>
      </div>
    </>
  );
}

export default Menu;