import React from "react";
import paterBag from "../../../assets/home/03.jpg";
import vegetablebg from "../../../assets/home/01.jpg";
import cottonBag from '../../../assets/home/04.jpg'
import vegetable2 from '../../../assets/home/05.jpg'
import wooden from '../../../assets/home/06.jpg'

const SubHeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 px-6 py-12 relative">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Delivery at Your Doorstep
      </h1>

      {/* Hero Section */}
      <div className="w-full flex justify-center gap-5 mb-12">
        <img
          src={paterBag}
          alt="Fresh vegetables"
          className="h-64 w-1/3 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src={vegetablebg}
          alt="Eco products"
          className="h-64 w-1/3 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
        <div className="relative group h-40 overflow-hidden rounded-xl shadow-lg">
          <img
            src={cottonBag}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-sm">View Details</p>
          </div>
        </div>

        <div className="relative group h-40 overflow-hidden rounded-xl shadow-lg">
          <img
            src={vegetable2}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-sm">View Details</p>
          </div>
        </div>

        <div className="relative group h-40 overflow-hidden rounded-xl shadow-lg">
          <img
            src={wooden}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-sm">View Details</p>
          </div>
        </div>





      </div>
    </div>
  );
};

export default SubHeroSection;
