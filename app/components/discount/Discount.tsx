import ProductList from "../product-list/ProductList";
const Discount = () => {

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="mb-4">Son Yakalanan İndirimler</h1>
        <button>
          <h1 className="mb-4">Tüm Kampanyalar {"--->"}</h1>
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <ProductList />
      </div>
    </div>
  );
};

export default Discount;
