import React, { useState } from 'react';

const ImageToggleComponent = () => {
    const [activeButton, setActiveButton] = useState('All');

    // Image visibility mapping for buttons
    const buttonImageMap = {
        All: [1, 2, 3, 4, 5, 6],
        Program: [1, 3, 5],
        Development: [2, 4, 6],
        Design: [1, 2, 4, 6],
        Application: [3, 5]
    };

    // All images
    const images = [
        'https://via.placeholder.com/150/0000FF', // Image 1
        'https://via.placeholder.com/150/FF0000', // Image 2
        'https://via.placeholder.com/150/00FF00', // Image 3
        'https://via.placeholder.com/150/FFFF00', // Image 4
        'https://via.placeholder.com/150/FF00FF', // Image 5
        'https://via.placeholder.com/150/00FFFF'  // Image 6
    ];

    // Function to handle button click
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="p-4">
            {/* Buttons */}
            <div className="flex space-x-2 mb-4">
                {["All", "Program", "Development", "Design", "Application"].map((name) => (
                    <button
                        key={name}
                        onClick={() => handleButtonClick(name)}
                        className={`px-4 py-2 rounded ${
                            activeButton === name ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                    >
                        {name}
                    </button>
                ))}
            </div>

            {/* Images */}
            <div className="grid grid-cols-3 gap-4">
                {images.map((src, index) => {
                    // Show images based on the active button
                    const imageNumber = index + 1;
                    return (
                        (activeButton && buttonImageMap[activeButton]?.includes(imageNumber)) ? (
                            <img
                                key={index}
                                src={src}
                                alt={`Image ${imageNumber}`}
                                className="w-full h-auto border rounded"
                            />
                        ) : null
                    );
                })}
            </div>
        </div>
    );
};

export default ImageToggleComponent;