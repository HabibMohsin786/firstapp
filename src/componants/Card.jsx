import { Link } from "react-router-dom";

function Card({ item, onClick }) {
  return (
    <Link
      to={`/products/${item.id}`}
      className="lg:w-1/4 md:w-1/2 p-4 w-full shadow hover:bg-purple-200 hover:cursor-pointer"
    >
      <div key={item.id} id={item.id} onClick={onClick}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="Image"
            className="object-cover object-center w-full h-full block"
            src={item.thumbnail}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-purple-700 title-font text-lg font-medium">
            {item.title}
          </h2>
          <p className="text-purple-700 title-font text-xs font-medium">
            {item.brand}
          </p>
          <h4 className="text-purple-500 title-font text-lg font-medium">
            {item.category}
          </h4>
          <p className="mt-1">${item.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
