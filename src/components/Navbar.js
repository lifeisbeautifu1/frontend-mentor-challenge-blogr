import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      // if (e.target.id === 'hamburger') return;
      // if (e.target !== mobileMenuRef) {
      //   setIsMenuOpen(false);
      // }
    };
    window.addEventListener('click', handleClick);
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav className="relative z-50 w-4/5 m-auto flex justify-between items-center py-10">
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-28 bg-white p-6 shadow flex flex-col text-veryDarkBlue/70 rounded w-full z-50"
        >
          <ul className="flex flex-col gap-4 font-[600] text-lg">
            <li
              className="flex flex-col faq"
              onClick={(e) => {
                e.currentTarget.classList.toggle('active');
              }}
            >
              <div className="flex justify-center items-center gap-2 cursor-pointer hover:text-veryDarkBlue">
                Product{' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </div>
              <ul className="answer flex flex-col bg-gray-100 overflow-hidden gap-3 rounded text-center text-gray-500 text-base">
                <li className="mt-4">
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Integrations
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="flex flex-col faq"
              onClick={(e) => {
                e.currentTarget.classList.toggle('active');
              }}
            >
              <div className="flex justify-center items-center gap-2 cursor-pointer hover:text-veryDarkBlue">
                Company{' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </div>
              <ul className="answer flex flex-col bg-gray-100 overflow-hidden gap-3 rounded text-center text-gray-500 text-base">
                <li className="mt-4">
                  <a href="/" className="hover:text-black hover:font-[600]">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Team
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Careers
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="flex flex-col faq"
              onClick={(e) => {
                e.currentTarget.classList.toggle('active');
              }}
            >
              <div className="flex justify-center items-center gap-2 cursor-pointer hover:text-veryDarkBlue">
                Connect{' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </div>
              <ul className="answer flex flex-col bg-gray-100 overflow-hidden gap-3 rounded text-center text-gray-500 text-base">
                <li className="mt-4">
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-black hover:font-[600]">
                    Newsletter
                  </a>
                </li>

                <li className="mb-4">
                  <a href="/" className="hover:text-black hover:font-[600]">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <hr className="my-4" />
          <button className="cursor-pointer mt-2 mb-4 transition duration-200 hover:font-[600]">
            Login
          </button>
          <button className="font-secondary cursor-pointer header-bg py-3 px-10 rounded-full text-white self-center font-[600] transition duration-200 hover:scale-95">
            Sign Up
          </button>
        </div>
      )}
      <div className="flex gap-10 items-center">
        <svg
          className="cursor-pointer"
          width="101"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30.803V1.486h10.653c1.982 0 3.695.31 5.14.93 1.446.619 2.56 1.5 3.345 2.642.785 1.142 1.177 2.484 1.177 4.026 0 1.404-.303 2.636-.909 3.695a6.48 6.48 0 01-2.56 2.498c1.487.578 2.643 1.494 3.469 2.746.826 1.253 1.239 2.732 1.239 4.439 0 1.707-.44 3.18-1.322 4.418-.88 1.239-2.12 2.202-3.716 2.89-1.596.688-3.482 1.033-5.657 1.033H0zM5.946 6.565v6.73h4.046c1.35 0 2.388-.282 3.118-.846.73-.564 1.094-1.397 1.094-2.498 0-1.101-.365-1.94-1.094-2.519-.73-.578-1.769-.867-3.118-.867H5.946zm0 19.159h4.624c1.542 0 2.732-.33 3.572-.991.84-.66 1.26-1.61 1.26-2.85 0-1.238-.42-2.188-1.26-2.848-.84-.66-2.03-.991-3.572-.991H5.946v7.68zm19.282 5.079V0h5.781v30.803h-5.78zm20.893.619c-1.624 0-3.124-.29-4.5-.867a10.94 10.94 0 01-3.593-2.416 10.96 10.96 0 01-2.374-3.654c-.564-1.404-.846-2.931-.846-4.583 0-1.652.289-3.173.867-4.563a11.354 11.354 0 012.415-3.654 10.96 10.96 0 013.634-2.436c1.39-.578 2.91-.867 4.562-.867 1.625 0 3.125.289 4.501.867a10.94 10.94 0 013.592 2.416 11.01 11.01 0 012.375 3.633c.564 1.39.846 2.911.846 4.563 0 1.651-.289 3.179-.867 4.583a11.297 11.297 0 01-2.416 3.675 10.96 10.96 0 01-3.633 2.436c-1.39.578-2.911.867-4.563.867zm.083-5.203c1.046 0 1.982-.275 2.808-.825.825-.551 1.48-1.301 1.96-2.25.483-.95.723-2.03.723-3.242 0-1.211-.24-2.292-.722-3.241-.482-.95-1.136-1.7-1.961-2.25-.826-.551-1.762-.826-2.808-.826-1.046 0-1.982.275-2.808.825-.826.55-1.48 1.301-1.961 2.25-.482.95-.723 2.03-.723 3.242 0 1.211.241 2.292.723 3.241.482.95 1.135 1.7 1.961 2.25.826.551 1.762.826 2.808.826zm24.155 3.964a9.13 9.13 0 01-3.86-.826 9.492 9.492 0 01-3.118-2.291c-.881-.977-1.57-2.12-2.065-3.427-.495-1.308-.743-2.719-.743-4.233 0-1.569.255-3.02.764-4.356a10.614 10.614 0 012.147-3.489 10.174 10.174 0 013.22-2.333c1.225-.564 2.554-.846 3.985-.846 1.404 0 2.67.282 3.799.846a7.402 7.402 0 012.807 2.457l.124-2.684h5.327v19.2c0 1.68-.269 3.207-.805 4.584-.537 1.376-1.301 2.56-2.292 3.55a10.231 10.231 0 01-3.53 2.292c-1.363.537-2.87.805-4.522.805-1.624 0-3.083-.254-4.376-.764a10.468 10.468 0 01-3.386-2.126 10.035 10.035 0 01-2.271-3.18L67.097 32a5.452 5.452 0 001.92 1.879c.784.454 1.672.681 2.663.681 1.074 0 2.003-.24 2.787-.723.785-.481 1.397-1.156 1.838-2.023.44-.867.66-1.879.66-3.035v-1.775a7.793 7.793 0 01-2.828 2.333c-1.143.564-2.402.846-3.778.846zm1.404-5.12c1.018 0 1.92-.254 2.704-.764a5.556 5.556 0 001.879-2.064c.468-.867.702-1.851.702-2.952 0-1.102-.234-2.086-.702-2.953a5.556 5.556 0 00-1.879-2.064c-.784-.51-1.686-.764-2.704-.764-1.019 0-1.92.255-2.705.764a5.556 5.556 0 00-1.879 2.064c-.468.867-.702 1.851-.702 2.953 0 1.1.234 2.085.702 2.952a5.556 5.556 0 001.88 2.064c.784.51 1.685.764 2.704.764zm15.607 5.74V9h5.327l.206 3.304c.55-1.157 1.294-2.044 2.23-2.664.936-.62 2.037-.929 3.303-.929.386 0 .77.035 1.156.103.386.07.73.159 1.033.269l-.62 5.698a4.361 4.361 0 00-.929-.227 7.495 7.495 0 00-.97-.062c-1.597 0-2.822.489-3.675 1.466-.853.977-1.28 2.36-1.28 4.15v10.694h-5.78z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </svg>
        <ul className=" justify-between items-center gap-4 font-[600] text-[1rem] hidden md:flex">
          <li className="flex items-center gap-2 cursor-pointer hover:underline group relative">
            Product{' '}
            <span className="group-hover:rotate-[180deg] transition duration-500">
              <svg
                className="h-full"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  opacity=".75"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </span>
            <ul className="hidden flex-col gap-2 p-5 w-[175px] text-left bg-white rounded shadow absolute top-6 group-hover:flex text-veryDarkBlue font-[300]">
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Overview
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Features
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Integrations
                </a>
              </li>
            </ul>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:underline group relative">
            Company{' '}
            <span className="group-hover:rotate-[180deg] transition duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  opacity=".75"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </span>
            <ul className="hidden flex-col gap-2 p-5 w-[175px] text-left bg-white rounded shadow absolute top-6 group-hover:flex text-veryDarkBlue font-[300]">
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Team
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Careers
                </a>
              </li>
            </ul>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:underline group relative">
            Connect{' '}
            <span className="group-hover:rotate-[180deg] transition duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  opacity=".75"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </span>
            <ul className="hidden flex-col gap-2 p-5 w-[175px] text-left bg-white rounded shadow absolute top-6 group-hover:flex text-veryDarkBlue font-[300]">
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-black hover:font-[600]">
                  Linkedin
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex gap-8 items-center font-secondary">
        <button className="cursor-pointer">Login</button>
        <button className="font-[500] bg-white text-lightRed py-3 px-8 hover:bg-veryLightRed hover:text-white transition duration-200 rounded-full">
          Sign Up
        </button>
      </div>
      <div
        className="flex md:hidden justify-center items-center cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <div id="hamburger">
            <svg
              className="pointer-events-none"
              width="32"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="pointer-events-none" fill="#FFF" fillRule="evenodd">
                <path
                  className="pointer-events-none"
                  d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
