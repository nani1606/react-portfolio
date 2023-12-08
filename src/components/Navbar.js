import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-purple-300 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Read me
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-red-300	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#resume" className="mr-5 hover:text-white">
            Resume
          </a>
          <a href="#certifications" className="mr-5 hover:text-white">
            Certifications
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

// import { ArrowRightIcon } from "@heroicons/react/solid";
// import { Link, NavLink } from "react-router-dom"; // Import Link and NavLink
// import React from "react";

// export default function Navbar() {
//   return (
//     <header className="bg-purple-300 md:sticky top-0 z-10">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0">
//           Read me
//         </Link>
//         <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-red-300	flex flex-wrap items-center text-base justify-center">
//           <NavLink to="/projects" className="mr-5 hover:text-white">
//             Past Work
//           </NavLink>
//           <NavLink to="/skills" className="mr-5 hover:text-white">
//             Skills
//           </NavLink>
//           <NavLink to="/resume" className="mr-5 hover:text-white">
//             Resume
//           </NavLink>
//           <NavLink to="/certifications" className="mr-5 hover:text-white">
//             Certifications
//           </NavLink>
//         </nav>
//         <Link
//           to="/contact"
//           className="inline-flex items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
//         >
//           Hire Me
//           <ArrowRightIcon className="w-4 h-4 ml-1" />
//         </Link>
//       </div>
//     </header>
//   );
// }
