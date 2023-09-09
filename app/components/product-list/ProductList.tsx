import { useNavigate } from "@remix-run/react";
import { useState } from "react";
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
  const [nextUrl, setNextUrl] = useState("https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05");
   
  // Başlangıç URL'ini kullanarak ilk isteği atın
  
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * 2;
  const selectedImages = products?.slice(startIndex, startIndex + 2);

  const handleImageClick = (id: number) => {
    navigate(`/details/${id}`);
  };

  const fetchProducts = async (
    url: string,
    setHorizontalProducts: Function,
    setProducts: Function,
    setNextUrl: Function
  ) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
  
      setHorizontalProducts((prev:any) => [
        ...prev,
        ...data.result.horizontalProducts,
      ]);
      setProducts((prev:any) => [...prev, ...data.result.products]);
  
      if (data.nextUrl) {
        await fetchProducts(data.nextUrl, setHorizontalProducts, setProducts, setNextUrl);
      } else {
        setNextUrl(null);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:");
    }
  };
  fetchProducts(nextUrl, setHorizontalProducts, setProducts, setNextUrl);

  return (
    <div className="flex flex-col ">
      {/* Yatay ürün listesi */}
      <div className="flex overflow-x-scroll space-x-4 w-full" >
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
