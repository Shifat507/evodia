import React from 'react';
import Image from 'next/image';
import perfumeImage from '../assets/perfumeImg/perfume.jpeg';

const Introduce = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-base-100 shadow-xl rounded-2xl p-6">
                {/* Perfume Image */}
                <div className="w-full lg:w-1/2">
                    <Image 
                        src={perfumeImage} 
                        alt="Evodia Perfume"
                        className="rounded-2xl shadow-lg border border-gray-200"
                        priority
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold text-amber-950">Introducing Evodia</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Evodia is a <span className="text-amber-700 font-semibold">premium perfume brand</span> in Bangladesh, offering top-notch fragrances crafted with high-quality perfume oils imported from <span className="font-medium">France, Dubai,</span> and <span className="font-medium">Switzerland</span>.
                    </p>
                    <p className="text-gray-600 text-lg">
                        We bring <span className="text-amber-700 font-semibold">elegance and luxury</span> to every bottle, ensuring <span className="font-medium">long-lasting scents</span> that captivate. Experience the essence of sophistication with Evodia.
                    </p>
                    <button className="btn bg-amber-950 text-white hover:bg-amber-200 hover:text-black mt-4">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
