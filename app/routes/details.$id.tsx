import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Product } from "types";
import Layout from "~/components/layout";

export default function Detail() {
  let { id } = useParams();
  const [data, setData] = useState<Product | null | undefined>();
  const priceFormat = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(data?.price);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => setData(response.result));
  }, [data]);

  return (
    <Layout>
      <div className="flex flex-row justify-between p-8 space-x-8 bg-white rounded-lg">
        <div className="flex-none w-2/5 p-12 ">
          <img
            src={data?.imageUrl}
            alt={data?.badge}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold  text-akBlue">
            {data?.productName}
          </h1>
          <h1 className="badge-special">
            {data?.badge}
          </h1>
          <div>
            <p className="text-xs mt-3">Seçenekler:</p>
            <div className="space-y-2 space-x-4">
              {data?.storageOptions.map((option:any) => (
                <button
                  key={option}
                  className={`px-4 py-2 border ${
                    selectedOption === option
                      ? "border-gray-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full h-0.5 bg-gray-200 mt-6 mb-6"></div>
          <span className="">
            4 satıcı içinde kargo dahil en ucuz fiyat seçeneği
          </span>
          <div className="flex justify-between items-center w-3/5 mt-6">
            <div className="space-x-2 flex items-center">
              <span className="font-bold text-xl">{priceFormat}</span>
              <span>TL</span>
              <div className="text-akGreen">
                <span className="text-akGreen">Ücretsiz Teslimat</span>
              </div>
            </div>
            <button className="bg-akBlue py-2 px-6 text-sm text-white rounded-full font-bold">
              Satıcıya Git
            </button>
          </div>

          <h1 className="text-gray-400 text-sm mt-4">
            Son güncelleme: {data?.lastUpdate}
          </h1>
        </div>
      </div>
    </Layout>
  );
}
