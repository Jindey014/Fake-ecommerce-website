import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts, fetchProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  //This fetch logic is removed from components and used in action creators

  //   const fetchProducts = async () => {
  //     const response = await axios
  //       .get('https://fakestoreapi.com/products')
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //     dispatch(setProducts(response.data))
  //   }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  console.log(products)
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductListing
