import { useEffect, useState } from "react";
import Card from "../componants/Card";
import Header from "../componants/Header";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Link
          to={"/products"}
          className="text-white bg-indigo-500 border-0 py-6 px-6  focus:outline-none hover:bg-indigo-600 rounded"
        >
          Ready to Start Shoping
        </Link>
      </div>
    </>
  );
}

export default Home;
