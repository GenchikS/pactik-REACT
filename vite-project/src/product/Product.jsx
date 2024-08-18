import { useState } from "react";

//  приклад 1
// export default function Product({ name, imgUrl, price }) {
//      return (
//     <div>
//           <h2>{name}</h2>
//           <img src={imgUrl} alt={name} width="320" />
//         <p>Price: {price} credits</p>
//     </div>
//   );
// }

//  приклад 1  імпортування ф-ції Product та передача ключів
// import Product from "./product/Product";
// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>
//       <Product name="Tacos With Lime"
//       imgUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product name="Fries and Burger"
//       imgUrl = "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.99}
//       />
//     </div>
//   );
// }

//  приклад 2
// const username = "Nick"
// // const messages = "Hello"
// const messages = 0

// const MailBox = () => {
//   return (
//     <div>
//       <p>Hello {username}</p>
//       {messages.length > 0 ? `You have ${messages.length} unread messages` : `No unread messages`}
//       </div>)
// }
// export default MailBox

//  приклад методу map
// export default function MailBox(){
//   return (
//     <div>
//       {[1, 2, 3].map(item => {
//         return <div>{item}</div>
//       })}
//       </div>
// )}

//  приклад розбирання масиву об'єктів
// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => {
//         return (
//             <li key={book.id}>{book.name}</li>
//         )
//         })}
//     </ul>
//   )
// }

// export default function App(){
//   return (
//     <div>
//       <p>Books of the week</p>
//       <BookList books = {favouriteBooks}/>
//     </div>
//   )
// }

//  приклад використання індекса масива, використовується крайні рідко
// const favouriteBooks = [
//   { name: "JS for beginners" },
//   { name: "React basics" },
//   { name: "React Router overview" }
// ];

// const BookList = ({ books }) => (
//   <ul>
// 	{books.map((book, index) => {
// 	  return <li key={index}>{book.name}</li>;
// 	})}
//   </ul>
// );

// приклад використання id key
// export default function BookList({ books }){
//   return (
//     <ul>
//       {books.map((book) => {
//         return <li key={book.id}>{book.name}</li>;
//       })}
//     </ul>
//   );
// };

//  приклад кліків дочерніх елементів окремо
// export default function ClickCounter({ value, onUpData }) {
  // const [clicks, setClicks] = useState(0);
  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

// console.log("value", value)
//   return <button onClick={ onUpData }>Current: { value }</button>;
// }
