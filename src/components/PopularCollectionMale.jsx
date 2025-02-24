import React from 'react';
import Perfume from './Perfume';

const PopularCollectionMale = async() => {
    // const res = await fetch("../../public/malePopular.json()")
    const data = [
        {
            "id": 1,
            "perfumeName": "Acqua Di Gio",
            "image": "https://i.ibb.co.com/8gyMgZJ4/ADG-only-6ml-Photoroom.jpg",
            "price": 150
        },
        {
            "id": 2,
            "perfumeName": "Dior Sauvage Elixir",
            "image": "https://i.ibb.co.com/ymT5rphh/Dior-Savuage-Elixir-Photoroom.jpg",
            "price": 200
        },
        {
            "id": 3,
            "perfumeName": "Imagination Luise Vitton",
            "image": "https://i.ibb.co.com/0NpZgKF/imagination-LV-Photoroom.jpg",
            "price": 250
        },
        {
            "id": 4,
            "perfumeName": "Bleu de Chanel",
            "image": "https://i.ibb.co.com/tw1V33vZ/BDC-Parfum-Photoroom.jpg",
            "price": 200
        },
        {
            "id": 5,
            "perfumeName": "Stronger With You",
            "image": "https://i.ibb.co.com/R4Mkt52Z/Stronger-With-You.jpg",
            "price": 150
        },
        {
            "id": 6,
            "perfumeName": "Ultra Male",
            "image": "https://i.ibb.co.com/q3KV8fcQ/Ultra-Male-15-ML-Photoroom.jpg",
            "price": 200
        },
        {
            "id": 7,
            "perfumeName": "Reflection Man Amaugh",
            "image": "https://i.ibb.co.com/xK2QwM4n/Reflection-Man-A-15ml-Photoroom.jpg",
            "price": 200
        },
        {
            "id": 8,
            "perfumeName": "Bad Boy",
            "image": "https://i.ibb.co.com/5xS0g4B1/Bad-Boy-6ml-Photoroom.jpg",
            "price": 150
        }
    ]
    return (
        <div className='mt-16'>
            <h1 className='text-3xl font-bold text-center mb-8'>Popular Collection - Male</h1>
            <div className='grid grid-cols-4 gap-3 mx-auto'> 
                {
                    data.map(perfumeInfo => <Perfume key={perfumeInfo.id} perfumeInfo={perfumeInfo}></Perfume>)
                }
            </div>
        </div>
    );
};

export default PopularCollectionMale;