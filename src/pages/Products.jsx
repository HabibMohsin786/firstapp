import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../componants/Card";
import CategoryChips from "../componants/CategoryChips";
import Loader from "../componants/Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [choisenCategory, setChoisenCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(false);

  useEffect(() => {
    const url =
      choisenCategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${choisenCategory}`;
    axios
      .get(url)
      .then((res) => {
        let sortedProducts = res.data.products;

        // Sorting the products by price
        if (sortOrder) {sortedProducts.sort((a, b) => {
          return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        });}
        setProducts(sortedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [choisenCategory, sortOrder]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log(choisenCategory);

  return (
    <>
      <div className="container mx-auto">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div>
              <h1 className="text-purple-500 font-bold">All Categories</h1>

              <div className="flex flex-wrap -m-4 my-4 gap-2">
                <CategoryChips
                 onClick={() => setChoisenCategory("All")}
                  isChosen={choisenCategory === "All"}
                  category={{
                    slug: "All",
                    name: "All",
                  }}
                />
                {categories.map((chip) => (
                  <CategoryChips
                    onClick={() => setChoisenCategory(chip.slug)}
                    key={chip.slug}
                    category={chip}
                    isChosen={chip.slug === choisenCategory}
                  />
                ))}
              </div>
              <div className="flex justify-start mb-4">
                <label className="mr-3 text-purple-500 font-bold">Sort by Price</label>
                <select
                  value={sortOrder||""}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className=" bg-purple-200 border-2 border-purple-500 shadow-md focus:border-purple-500 focus:border-2 hover:bg-purple-700  hover:text-white font-bold py-2 px-4 rounded"
                >
                  <option value="">Remove Sorting</option>
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>
              </div>
            </div>
            <div>
              <section className="text-gray-600 body-font">
                <h1 className="text-purple-500 font-bold">Products</h1>
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    {products.map((items) => (
                      <Card key={items.id} item={items} />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Products;
