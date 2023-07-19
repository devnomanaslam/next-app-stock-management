"use client"
import AddProduct from '@/components/AddProduct';
import Header from '@/components/Header'
import Products from '@/components/Products';
import { useState, useEffect } from 'react';

export default function Home() {
  // const [products, setProducts] = useState([]);
  // const [isloading, setIsloading] = useState(false);
  // const [slug, setSlug] = useState('');
  // const [quantity, setQuantity] = useState(0);
  // const [price, setPrice] = useState(0);
  // // const [tableData, setTableData] = useState();

  // const handleSlugChange = (e) => {
  //   setSlug(e.target.value);
  // };

  // const handleQuantityChange = (e) => {
  //   setQuantity(e.target.value);
  // };

  // const handlePriceChange = (e) => {
  //   setPrice(e.target.value);
  // };


  // //add product
  // const addProduct = async (e) => {
  //   e.preventDefault();
  //   setIsloading(true)
  //   try {
  //     const response = await fetch('/api/product', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ slug, quantity, price })
  //     });
  //     if (response.ok) {
  //       console.log("product added successfully");
  //       setIsloading(false);
  //       setSlug('');
  //       setQuantity('');
  //       setPrice('');

  //     } else {
  //       console.log("Error")
  //       setIsloading(false)
  //     }
  //   } catch (error) {
  //     console.log("Error: ", error)
  //   }
  // }
  const [tab, setTab] = useState('all')

  const checkTabs = (tabName) => {
    setTab(tabName)
  }

  return (
    <>
      <Header checkTabs={checkTabs} />
      <div className='my-24'>
        {
          tab === 'all' ? <Products /> : <AddProduct />
        }
      </div>
    </>
  )
}