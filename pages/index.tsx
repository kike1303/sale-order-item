import { Inter } from 'next/font/google'
import ListProduct from '@/components/list-product/ListProduct'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header showBack={false}/>
    <ListProduct />
    </>
    
  )
}
