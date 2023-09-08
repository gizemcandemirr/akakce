import { useNavigate } from "@remix-run/react";
import { useState, useEffect, useCallback, useRef } from "react";

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
  const [loading, setLoading] = useState(false);

  const handleImageClick = (id: number) => {
    navigate(`/details/${id}`);
  };
  const fetchProducts = async (url: string) => {
    console.log("burası");
    setLoading(true);
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
        setProducts((prev) => [
            ...prev,
            ...data.result.products,
          ]);
        setNextUrl(data.nextUrl);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  };

  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextUrl) {
          fetchProducts(nextUrl);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, nextUrl]
  );

  useEffect(() => {
    if (nextUrl) {
      fetchProducts(nextUrl);
    }
  }, []);
  return (
    <div className="flex flex-col ">
      {/* Yatay ürün listesi */}
      <div className="flex overflow-x-auto w-full ">
        {horizontalProducts?.map((product, index) => (
          <div
            key={product.code}
            ref={
              index === horizontalProducts.length - 1 ? lastProductRef : null
            }
            className="scroll-ml-6 snap-start w-[250px]"
          >
            <img
              src={product?.imageUrl}
              width="250"
              height="100"
              alt="Product"
              onClick={() => handleImageClick(product.code)}
            />
          </div>
        ))}
      </div>

      {/* 2'li dikey ürün listesi */}
      <div className="grid grid-cols-2 gap-4">
        {products?.map((product) => (
          <div key={product.code}>
            <img
              src={product?.imageUrl}
              width="150"
              height="120"
              alt="Product"
              onClick={() => handleImageClick(product.code)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
