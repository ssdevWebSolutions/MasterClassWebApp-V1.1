import { FaTrash, FaHeart, FaPlus, FaMinus } from "react-icons/fa";

export default function ShoppingCart() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="pb-6 border-b border-gray-300">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
    <div className="text-sm text-gray-600">Home / Cart</div>
    <h1 className="text-lg sm:text-xl font-semibold">Your Shopping Cart</h1>
    <button className="text-red-600 hover:text-red-800 font-semibold text-sm sm:text-base">
      Continue Shopping
    </button>
  </div>
</header>

      {/* Cart Table */}

      <div className="w-full mt-6">
      {/* Desktop Table Header */}
      <div className="hidden sm:grid grid-cols-5 text-sm text-gray-600 border-b border-gray-300 px-4 py-3 font-medium">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div></div>
      </div>

      {/* Items */}
      <div className="divide-y divide-gray-200">
        {[1].map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:grid sm:grid-cols-5 items-start sm:items-center px-4 py-4 gap-4"
          >
            {/* MOBILE: Card view */}
            <div className="flex sm:hidden w-full gap-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 rounded-md object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                <span className="font-semibold text-base">Cricket Ball</span>
                <span className="text-sm text-gray-600 mb-1">₹250.00</span>

                <div className="flex items-center gap-2 mb-2">
                  <button className="bg-gray-100 p-1 rounded"><FaMinus size={12} /></button>
                  <span>1</span>
                  <button className="bg-gray-100 p-1 rounded"><FaPlus size={12} /></button>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold">Total: ₹250.00</span>
                  <div className="flex gap-3 text-lg">
                    <button className="text-red-600"><FaTrash /></button>
                    <button className="text-gray-600"><FaHeart /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP: Table view */}
            <div className="hidden sm:flex items-center gap-3">
              <img
                src="https://via.placeholder.com/50"
                className="w-14 h-14 rounded-md"
                alt="Item"
              />
              <span className="font-medium">Cricket Ball</span>
            </div>
            <div className="hidden sm:block">₹250.00</div>
            <div className="hidden sm:flex items-center gap-2">
              <button className="bg-gray-100 p-1 rounded"><FaMinus /></button>
              <span>1</span>
              <button className="bg-gray-100 p-1 rounded"><FaPlus /></button>
            </div>
            <div className="hidden sm:block">₹250.00</div>
            <div className="hidden sm:flex gap-3">
              <button className="text-red-600"><FaTrash /></button>
              <button className="text-gray-600"><FaHeart /></button>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* Recommendations */}
      <div className="mt-12">
  <h2 className="text-lg font-semibold mb-4">You may also like</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(3)].map((_, i) => {
      const productNames = ['Cricket Helmet', 'Cricket Ball Set', 'Cricket Shoes'];
      const productImages = [
        'https://dkpcricketonline.com/cdn/shop/products/Black-726x1000.jpg?v=1527192363',
        'data:image/jpeg;base64,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',
        'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/31938120/2024/12/11/fcaed0aa-240f-4f3c-b237-1b150e6af5b61733938985372baccabucciUnisexKidsCricketShoes1.jpg'
      ];

      return (
        <div key={i} className="bg-white rounded-xl shadow p-4">
          <div className="text-sm text-red-600 font-medium mb-1">Cricket</div>
          <h3 className="font-semibold mb-2">{productNames[i]}</h3>
          <img
            src={productImages[i]}
            alt={productNames[i]}
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      );
    })}
  </div>
</div>


      {/* Order Summary */}
      <div className="mt-12 max-w-sm ml-auto">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="bg-white p-6 rounded-xl shadow text-sm">
          <div className="flex justify-between py-1">
            <span>Subtotal</span>
            <span>₹250.00</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Shipping</span>
            <span>₹40.00</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Tax</span>
            <span>₹18.00</span>
          </div>
          <div className="flex justify-between font-semibold py-2 border-t border-gray-200 mt-2">
            <span>Total</span>
            <span>₹308.00</span>
          </div>
          <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
