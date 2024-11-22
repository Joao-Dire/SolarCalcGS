// app/layout.tsx (ou onde seu cabeçalho está sendo configurado)

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#4F7942] py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-semibold text-white">
          EcoCalc
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-lg text-white hover:text-[#6BBF59]">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/calculator"
                className="text-lg text-white hover:text-[#6BBF59]"
              >
                Calculadora
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg text-white hover:text-[#6BBF59]"
              >
                Sobre Nós
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
