// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })
'use client'
import { ChakraProvider } from '@chakra-ui/react'
import Features from './Features'
import Header from './Header'
import Pricing from './Pricing'




export default function Home() {
  return (
   <>
   <ChakraProvider>
    <Header/>
    <Pricing/>
    <Features/>
   </ChakraProvider>

   </>
  )
}
