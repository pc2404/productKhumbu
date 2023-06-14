"use client";
import React, { useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary';
import { fetchCardItems } from '../Fetchers/product';
import ReactGA from 'react-ga';

import CardItem from '../components/CardItem';

const ErrorBoundaryComponent = () => {
  const [cardItems, setCardItems]=useState([]);
  const { showBoundary }=useErrorBoundary();

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
    const fetchItems=async()=>{
      try {
        const items=await fetchCardItems();
        setCardItems(items)
      } catch (err) {
        showBoundary(err);
      }
    }
    fetchItems();
  },[])
  return (
    <div className=' bg-cyan-200'>
      <div className=' flex flex-col justify-center items-center gap-2'>
        {cardItems.map((item)=>{
          return <CardItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default ErrorBoundaryComponent