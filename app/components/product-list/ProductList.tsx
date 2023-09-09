import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Pagination } from "../pagination/Pagination";

type Product = {
  id: string;
  imageUrl: string;
  code: number;
};

const ProductList = () => {
  const [horizontalProducts, setHorizontalProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const [nextUrl, setNextUrl] = useState<string | null>(
    "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05"
  );
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * 2;
  const selectedImages = products?.slice(startIndex, startIndex + 2);

  const handleImageClick = (id: number) => {
    navigate(`/details/${id}`);
  };
  const fetchProducts = async (url: string) => {
    console.log("burası");
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setHorizontalProducts((prev) => [
          ...prev,
          ...data.result.horizontalProducts,
        ]);
        setProducts((prev) => [...prev, ...data.result.products]);
        setNextUrl(data.nextUrl);
      })
      .catch((error) => {
        console.log(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  };

  useEffect(() => {
    if (nextUrl) {
      fetchProducts(nextUrl);
    }
  }, []);

  return (
    <div className="flex flex-col ">
      {/* Yatay ürün listesi */}
      <div className="flex overflow-x-scroll space-x-4 w-full">
        {horizontalProducts?.map((product, index) => (
          <img
            key={index}
            src={product?.imageUrl}
            width="250"
            height="100"
            alt="Product"
            onClick={() => handleImageClick(product.code)}
          />
        ))}
      </div>

      {/* 2'li dikey ürün listesi */}
      <div className="container mx-auto p-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          {selectedImages.map((image) => (
            <img
              key={image.id}
              src={image.imageUrl}
              alt="Product"
              className="w-64 h-fit object-cover"
              onClick={() => handleImageClick(image.code)}
            />
          ))}
        </div>

        <Pagination
          total={products.length}
          current={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ProductList;
