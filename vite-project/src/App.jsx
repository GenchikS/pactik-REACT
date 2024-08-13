// import { useState } from 'react'
import './App.css'
import Product from './product/Product';
import BookList from "./product/Product"
import favouriteBooks from "./product/favouriteBooks.json"

export default function App() {
  return (
    <div>
      {/* <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      /> */}
      {/* приклад ренденгу масиву .map */}
      {/* {[1, 2, 3].map((item) => {
        return <p>{item}</p>;
      })} */}
      <>
        <h1>Books of the week</h1>
        <BookList books={favouriteBooks} />
      </>
    </div>
  );
}


