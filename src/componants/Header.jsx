import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to={"/"} className="flex title-font font-medium items-center text-purple-500 mb-4 md:mb-0">
            <img
              src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-xl">E-Commerce</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"signin"} className="mr-5 text-purple-500 hover:text-purple-800 hover:cursor-pointer">Sign In</Link>
            <a className="mr-5 text-purple-500 hover:text-purple-800 hover:cursor-pointer">Second Link</a>
            <a className="mr-5 text-purple-500 hover:text-purple-800 hover:cursor-pointer">Third Link</a>
            <a className="mr-5 text-purple-500 hover:text-purple-800 hover:cursor-pointer">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
