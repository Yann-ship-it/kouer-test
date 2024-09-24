"use client";

import { useState, useEffect } from "react";
import Image from 'next/legacy/image'

// Sample products data
const products = [
  {
    id: 1,
    name: "Cannelle en Poudre 20g",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg", // Replace with actual path
    price: "6.2€",
    quantity: "20g",
    pricePerKg: "310.00€/kg",
  },
  {
    id: 2,
    name: "Crème Glacée Pastille",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "41.65€",
    quantity: "5l",
    pricePerKg: "41.65€/l",
  },
  {
    id: 3,
    name: "Sorbet Abricot 2.5L",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "21.61€",
    quantity: "2.5l",
    pricePerKg: "21.61€/l",
  },
  // Add more products to reach at least 7 products
  {
    id: 4,
    name: "Boudin de porc",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "4.5€",
    quantity: "300g",
    pricePerKg: "15.00€/kg",
  },
  {
    id: 5,
    name: "Mueslis Multigraines",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "6.4€",
    quantity: "190g",
    pricePerKg: "33.68€/kg",
  },
  {
    id: 6,
    name: "Perle de Vanille de Madagascar",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "22.65€",
    quantity: "20g",
    pricePerKg: "1132.50€/kg",
  },
  {
    id: 7,
    name: "Sorbet Litchi 1L",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "12.65€",
    quantity: "1l",
    pricePerKg: "12.65€/l",
  },
  {
    id: 8,
    name: "Sorbet Litchi 1L",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "12.65€",
    quantity: "1l",
    pricePerKg: "12.65€/l",
  },
  {
    id: 9,
    name: "Sorbet Litchi 1L",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "12.65€",
    quantity: "1l",
    pricePerKg: "12.65€/l",
  },
  {
    id: 10,
    name: "Sorbet Litchi 1L",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "12.65€",
    quantity: "1l",
    pricePerKg: "12.65€/l",
  },
  {
    id: 11,
    name: "Sorbet Litchi 1L",
    image: "https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/glace.jpg",
    price: "12.65€",
    quantity: "1l",
    pricePerKg: "12.65€/l",
  },
];


const ProductSlider = () => {
  const [startIndex, setStartIndex] = useState(0); // Commencer à l'index 0
  const [visibleItemsCount, setVisibleItemsCount] = useState(7); // Nombre d'items à afficher

  useEffect(() => {
    const updateVisibleItemsCount = () => {
      const width = window.innerWidth;

      if (width < 361) {
        setVisibleItemsCount(2); // xs
      } else if (width < 601) {
        setVisibleItemsCount(2); // sm
      } else if (width < 901) {
        setVisibleItemsCount(3); // md
      } else if (width < 1101) {
        setVisibleItemsCount(5); // lg
      } else if (width < 1441) {
        setVisibleItemsCount(6); // xl
      } else {
        setVisibleItemsCount(7); // Plus de 1441 pixels
      }
    };

    updateVisibleItemsCount(); // Vérifier la taille à l'initialisation

    window.addEventListener('resize', updateVisibleItemsCount); // Écouter les changements de taille

    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener('resize', updateVisibleItemsCount);
    };
  }, []); // Le tableau vide signifie que l'effet s'exécute une fois à l'initialisation

  // Function to go to the next slide (move 1 slide forward)
  const nextSlide = () => {
    if (startIndex + visibleItemsCount < products.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to go to the previous slide (move 1 slide backward)
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="mx-auto overflow-hidden">
      <div className="flex flex-col w-[95%] m-auto items-center">

        <div className="flex justify-between items-center w-full">
        <h2>Notre sélection</h2>
          <div className="flex gap-5">
          <button
            className={`hover:opacity-[0.8] ${
              startIndex === 0 ? "opacity-50" : ""
            }`}
            onClick={prevSlide}
            disabled={startIndex === 0}
          >
                  <Image
                    src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/right.png"
                    width={35}
                    height={35}
                    alt="Picture of the author"
                    />

          </button>

          <button
            className={`hover:opacity-[0.8] ${
              startIndex + visibleItemsCount >= products.length ? "opacity-50" : ""
            }`}
            onClick={nextSlide}
            disabled={startIndex + visibleItemsCount >= products.length}
          >
            <Image
                    src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/left.png"
                    width={35}
                    height={35}
                    alt="Picture of the author"
                    />
          </button>
          </div>
        </div>

        {/* Products Container */}
        <div className="flex w-5/6 space-x-4 gap-5">
          {products
            .slice(startIndex, startIndex + visibleItemsCount)
            .map((product) => (
              <div
                key={product.id}
                className="w-1/7 flex-shrink-0 p-4 bg-white border rounded-lg shadow-lg text-center "
              >  

                  <div className="w-[21px] h-[14px] ">
                    <div className="relative left-[10px] top-[10px] w-[50px] h-[50px]">
                  <Image
                    src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/drapeau.png"
                    layout="fill"
                    alt="Picture of the author"
                    />
                  </div>
                </div>

                <div className="w-[21px] h-[14px]">
                    <div className="relative left-[10px] top-[10px] w-[50px] h-[50px]">
                  <Image
                    src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/like.png"
                    layout="fill"
                    alt="Picture of the author"
                    />
                  </div>
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-full object-cover mb-2"
                />
                
                <div className="flex flex-col justify-between">

                
                    <h2 className="text-lg font-bold h-[10px]">{product.name}</h2>
                    <div className="flex justify-between items-end">
                      <div className="">
                        <p className="text-gray-700">{product.price}  {product.quantity}</p>
                        <p className="text-sm text-gray-500">{product.pricePerKg}</p>
                      </div>
                      
                      <div>
                        <Image
                          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/shop.webp?t=2024-09-23T18%3A40%3A32.679Z"
                          width={50}
                          height={50}
                          alt="Picture of the author"
                          />
                      </div>
                      </div>
                </div>
                
              </div>
            ))}
        </div>

       
      </div>
    </div>
  );
};

export default ProductSlider;