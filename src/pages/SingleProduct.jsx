import React from 'react'
import { useParams } from 'react-router-dom'
import SingleProductInformation from '../components/SingleProductInformation'
import SingleProductDetails from '../components/SingleProductDetails'

export default function SingleProduct() {

  let {productId} = useParams()

  return (
    <div className=' bg-black'>
      <SingleProductInformation />
      <SingleProductDetails />
    </div>
  )
}
