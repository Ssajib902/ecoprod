import React from "react";
import './autoScrolling.css'; // Import the CSS file
import tshirt from '../../../assets/pngs/tshirt.png'
import bambooBasket from '../../../assets/pngs/basket.png'
import vegetables from '../../../assets/pngs/vegetable.png'
import wooden from '../../../assets/pngs/furniture.png'
import fish from '../../../assets/pngs/fish.png'


const Advertise = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee mt-10 mb-10">
        {/* Product 1 */}
        <div className="flex-shrink-0 mx-4">
          <img
            src={tshirt}
            alt="Product 1"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <p className="text-center mt-2 text-yellow-500">Fashionable T-Shirts</p>
        </div>

        {/* Product 2 */}
        <div className="flex-shrink-0 mx-4">
          <img
            src={bambooBasket}
            alt="Product 2"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <p className="text-center mt-2 text-amber-700">Bamboo Basket</p>
        </div>

        {/* Product 3 */}
        <div className="flex-shrink-0 mx-4">
          <img
            src={vegetables}
            alt="Product 3"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <p className="text-center mt-2 text-green-600">Fresh Vegetables</p>
        </div>

        {/* Product 4 */}
        <div className="flex-shrink-0 mx-4">
          <img
            src={wooden}
            alt="Product 4"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <p className="text-center mt-2 text-amber-700">Wooden Furnitures</p>
        </div>

        {/* Product 5 */}
        <div className="flex-shrink-0 mx-4">
          <img
            src={fish}
            alt="Product 5"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <p className="text-center mt-2 text-cyan-500">Fish</p>
        </div>
        <div className="flex-shrink-0 mx-4">
          <img
            src={tshirt}
            alt="Product 1"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <p className="text-center mt-2 text-yellow-500">Fashionable T-Shirts</p>
        </div>

        


      </div>
    </div>
  );
};

export default Advertise;