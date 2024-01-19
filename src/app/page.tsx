"use client"

import HomeSection from './components/layout/HomeSection.js'
import  store  from '@/redux/store';
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className='w-[960px] h-[800px] mx-auto p-3 rounded-lg bg-blue-500'>
      <Provider store={store}>
        <header className="p-2 text-center font-semibold">
          Bitcoin Echange
        </header>
        <HomeSection/>
        <footer className='border-t p-8 text-white'>
          &copy; 2023 all rights reserved
        </footer>
      </Provider>
    </main>
  )
}
