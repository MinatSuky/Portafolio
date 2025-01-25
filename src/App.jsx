import * as React from 'react';
import './App.css'
import TypingAnimation from './compo/text';

import img from "../src/IMG/foto.png"
import img2 from "../src/IMG/foto2.png"



function App() {
  return (
    <>
      <header>
        <nav className='flex justify-around mt-5'>
          <h1 className='font-bold custom-shadow text-4xl cursor-default'>Portafolio</h1>
          <ul className='flex gap-10 font-bold text-lg cursor-default'>
            <li className='opacity-80 hover:opacity-100 duration-200 cursor-pointer LiniaBaja'>Home</li>
            <li className='opacity-80 hover:opacity-100 duration-200 cursor-pointer LiniaBaja'>About</li>
            <li className='opacity-80 hover:opacity-100 duration-200 cursor-pointer LiniaBaja'>Service</li>
            <li className='opacity-80 hover:opacity-100 duration-200 cursor-pointer LiniaBaja'>Portafolio</li>
            <li className='opacity-80 hover:opacity-100 duration-200 cursor-pointer LiniaBaja'>Contacto</li>
          </ul>
        </nav>
      </header>
      <body>
        {/* SECCION #1 */}
        <div className='flex'>
          <div className='w-[50%] h-[90vh] flex flex-col justify-center items-center mx-10'>
            <div>
              <p className='font-bold text-3xl w-[400px]'><span className='text-[#19d0f0] font-bold text-3xl'>Hello</span>, i am</p>
              <TypingAnimation/>        
              <div className="flex gap-4 mt-5">
                <p className='p-1 border-2 border-[#19d0f0] w-fit rounded-full hover:bg-[#19d0f0] duration-200 cursor-pointer'><svg className='p-1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg></p>
                <p className='p-1 border-2 border-[#19d0f0] w-fit rounded-full hover:bg-[#19d0f0] duration-200 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"/></svg></p>
                <p className='p-1 border-2 border-[#19d0f0] w-fit rounded-full hover:bg-[#19d0f0] duration-200 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></p>
                <p className='p-1 border-2 border-[#19d0f0] w-fit rounded-full hover:bg-[#19d0f0] duration-200 cursor-pointer'><svg className='p-1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></p>
              </div>
              <button class="btn mt-5"><i class="animation"></i>Download CV<i class="animation"></i>
              </button>
            </div>

          </div>

          <div className='w-[50%] flex justify-start items-center'>
            <img className='rounded-full border-[7px] border-[#19d0f0]' src={img} alt="" />
          </div>
        </div>
      </body>
    </>
  )
}

export default App
