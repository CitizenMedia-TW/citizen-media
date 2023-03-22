// https://www.npmjs.com/package/@neojp/tailwindcss-line-clamp-utilities

import React from 'react'
import './Footer.css'

import Logo from '../../../Assets/Logo.png'
import Facebook_1 from '../../../Assets/Facebook_1.png'
import Facebook_2 from '../../../Assets/Facebook_2.png'

const Footer = () => {
    return (
    <div className='w-full h-64 inline-flex items-center bg-footer text-white'>
        <img className='w-1/5 ml-16' src={Logo} alt="logo" />
        
        <div className='
            h-36 w-3/10 ml-3 pl-4
            border-l-2 border-solid border-white
            font-serif font-normal break-words 
        '>
            <p className='mt-4 font-bold leading-7 text-2xl'>ABOUT US</p>
            <p className='mt-4 mb-4 font-normal leading-6 text-xl flex items-end text-justify line-clamp-3'>
                Lorem ipsum dOlor Sit amet consectetur.
                Morbi morbi at nisl sodales sit vitae orci
                felis. Commodo malesuada id est urna et .
            </p>
        </div>

        <div className='-mt-6 ml-28 leading-6 text-lg'>
            <p className='pb-2 font-bold border-b-2 border-solid border-white'>ABOUT</p>
            <div className='mt-4'>
                <a href="https://www.google.com/">BLOG</a>
            </div>
            <div className='mt-4'>
                <a href="https://www.google.com/">STATUS</a>
            </div>
            <div className='mt-4'>
                <a href="https://www.google.com/">CAREER</a>
            </div>
        </div>

        <div className='-mt-6 ml-28 leading-6 text-lg'>
            <p className='pb-2 font-bold border-b-2 border-solid border-white'>SUPPORT</p>
            <div className='mt-4'>
                <a href="https://www.google.com/">HELP</a>
            </div>
            <div className='mt-4'>
                <a href="https://www.google.com/">PRIVACY</a>
            </div>
            <div className='mt-4'>
                <font className='invisible'>nothing</font>
            </div>
        </div>
        
        
        <div className='ml-10 mt-32 scale-75 inline-flex items-center'>
            <a href='https://www.google.com/'><img className='' src={Facebook_1} alt='facebook' /></a>
            <a href='https://www.google.com/'><img className='' src={Facebook_1} alt='facebook' /></a>
            <a href='https://www.google.com/'><img className='' src={Facebook_1} alt='facebook' /></a>
            <a href='https://www.google.com/'><img className='' src={Facebook_1} alt='facebook' /></a>
            
        </div>
    </div>
    )
}

export default Footer