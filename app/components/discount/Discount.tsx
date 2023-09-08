import { useNavigate } from "@remix-run/react";

const Discount = () => {
  const navigate = useNavigate();

  const handleImageClick = (id: number) => {
    navigate(`/details/${id}`);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="mb-4">Son Yakalanan İndirimler</h1>
        <button>
          <h1 className="mb-4">Tüm Kampanyalar {"--->"}</h1>
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <img
          src="/images/1.png"
          width="250"
          height="120"
          alt="Apple"
          onClick={() => handleImageClick(1)}
        />
        <img
          src="/images/1.png"
          width="250"
          height="120"
          alt="Apple"
          onClick={() => handleImageClick(2)}
        />
        <img
          src="/images/1.png"
          width="250"
          height="120"
          alt="Apple"
          onClick={() => handleImageClick(3)}
        />
      </div>
    </div>
  );
};

export default Discount;
