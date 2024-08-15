import { useState } from 'react'
import './App.css'
// import Product from './product/Product';
// import BookList from "./product/Product"
import favouriteBooks from "./product/favouriteBooks.json"
import ClickCounter from "./product/Product"

// {/* приклад кнопки та onClic */}
// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>; // обов'язково анонімна ф-ція (), щоб рендерелося при натисканні на кнопку
// };




export default function App() {
  
  //  приклад з кнопкою та збирачем кліків
  // const [clicks, setClicks] = useState(0);
  // const handleClick = () => {
  //   setClicks(clicks + 1);

  // приклад модального вікна
  // const [clicks, setClicks] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);
  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };
  

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
        {/* <BookList books={favouriteBooks} /> */}
      </>
      <>
        {/* приклад кнопки та onClic, ф-ція вище */}
        {/* <CustomButton message="Playing music!">Play some music</CustomButton> */}
        {/* <CustomButton message="Uploading your data!">Upload data</CustomButton> */}
      </>
      {/* приклад з кнопкою та збирачем кліків ф-ція вище*/}
      {/* <button onClick={handleClick}>Current: {clicks}</button>; */}
      {/* приклад модального вікна */}
      {/* <button onClick={handleClick}>Current: {clicks}</button> */}
      {/* <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button> */}
      {/* <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>} */}

      <ClickCounter />
      <ClickCounter />
    </div>
  );
}






