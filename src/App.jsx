import { useState } from "react";
import Card from "./componants/Card";
import CardDetail from "./componants/CardDetail";

function App() {
  const [count, setCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product

  let products = [
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9zTsUw9GLhneuaoFGKsx3WAzZc9qE1SK_w&s",
      productName: "Laptop ASUS",
      productPrice: "Rs.65000",
    },
    {
      productImage:
        "https://onepoint.pk/cdn/shop/products/0011329_lenovo-ideapad-3-173-laptop-10th-generation-core-i5-10210u-256gb-ssd-8gb-ram-173-full-hd-ips-display.jpg?v=1674127066",
      productName: "Laptop Lenovo",
      productPrice: "Rs.75000",
    },
    {
      productImage:
        "https://www.mega.pk/items_images/Laptop+price+in+pakistan%2C+HP+Laptop+%2C+HP+15+6+8GB+256GB_-_22853.webp",
      productName: "Laptop HP",
      productPrice: "Rs.55000",
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-k00_06UypJMkdjtnRQmna5EVNIgHjaPpg&s",
      productName: "Laptop Dell",
      productPrice: "Rs.50000",
    },
    {
      productImage:
        "https://gmae.pk/wp-content/uploads/2023/10/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117_Full-Bleed-Image.jpg.large_.jpg",
      productName: "MacBook",
      productPrice: "Rs.100000",
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product); // Set the selected product to open modal
  };

  const closeModal = () => {
    setSelectedProduct(null); // Close the modal
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <Card
                id={index}
                key={index}
                image={product.productImage}
                title={product.productName}
                price={product.productPrice}
                onClick={() => openModal(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <CardDetail
          image={selectedProduct.productImage}
          productName={selectedProduct.className}
          productPrice={selectedProduct.classproductPrice}
          onClick={() => closeModal(null)}
        />
      )}
    </>
  );
}

export default App;
