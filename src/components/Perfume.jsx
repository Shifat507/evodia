import Image from 'next/image';
import React from 'react';

const Perfume = ({ perfumeInfo }) => {
    const { image, perfumeName, price } = perfumeInfo;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-64 shadow-xl mx-auto">
                <figure>
                    <Image 
                        src={image} 
                        alt={perfumeName} 
                        width={400} // Set an appropriate width
                        height={10} // Set an appropriate height
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{perfumeName}</h2>
                    <span>{price}</span>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfume;
