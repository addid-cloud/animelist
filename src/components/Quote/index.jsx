import { DiceThree } from '@phosphor-icons/react';
import { DiceOne } from '@phosphor-icons/react/dist/ssr';
import React, { useState, useEffect } from 'react';
const QuoteDisplay = ({ quotes }) => {
    const [randomQuote, setRandomQuote] = useState('');

    // Fungsi untuk memilih kutipan secara acak dari array kutipan
    const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
    };

    // Memilih kutipan secara acak saat komponen dimuat
    useEffect(() => {
    setRandomQuote(getRandomQuote());
    }, [quotes]);

    // Fungsi untuk menangani klik tombol
    const handleRollQuote = () => {
    setRandomQuote(getRandomQuote());
    };
return (
    <div className='bg-color-accent text-white p-2 flex flex-col'>
    <h2>Quotes Random</h2>
    <p className='text-center italic font-serif font-semibold text-xl rounded-sm my-2'>" {randomQuote} "</p>
    <button onClick={()=>{handleRollQuote()}} className='rounded-lg bg-purple-400 px-4 self-end flex flex-row items-center'>Roll <DiceThree/></button>
    </div>
);
};

// Contoh penggunaan komponen QuoteDisplay
const Quote = () => {
// Objek berisi beberapa kutipan
const quotesData = [
    "titik koma nona cantik udh ada yang punya?",
    "hidupmu tak seberat menahan beraq di sekolah",
    "tutor jadi hengker bang",
    "dihh wibu",
    "aku juga mauuu"
    // Tambahkan kutipan lainnya sesuai kebutuhan
];

return (
    <div>
    <QuoteDisplay quotes={quotesData} />
    </div>
);
};

export default Quote;
