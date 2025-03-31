"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container p-8 px-6 py-6 text-center">
      <h2 className="mt-8 mb-8 text-3xl font-bold text-primary text-center">
        Surmandal Gallery – A Visual Journey Through Classical Music
      </h2>
      <p className="text-primary text-lg pb-16 pt-4" style={{ fontFamily: "Merriweather" }}>
        Explore the rich heritage of Indian classical music through our gallery. View stunning moments from Surmandal’s concerts, featuring legendary artists and mesmerizing performances. <strong>Mohan Ji's legacy is so huge that we are still curating a lot of pictures from Surmandal’s treasure trove—more pictures will be added to the gallery soon!</strong> Click on any image to experience the full grandeur in high resolution.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={200}
              objectFit="fill"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        >
          <div className="relative max-w-4xl mx-auto p-4">
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default GalleryPage;
