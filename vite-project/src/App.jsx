import { useState, useEffect } from 'react'
import './App.css'
// import Product from './product/Product';
// import BookList from "./product/Product"
// import favouriteBooks from "./product/favouriteBooks.json"
// import ClickCounter from "./product/Product"

//1. приклад побудови кнопки
// const upClick = () => {
//   console.log("Hello click")
// }

// 2. приклад побудови кнопки та передача аргументу
  // const upClick = (event) => {
  //   console.log("Hello click", event);
  // };

// 5. Изоляція стану (щоб не було повторення коду) винесено компонент
// необхідно деструктурувати пропс value та upClick, т.я. пропс це об'єкт
// const ClickUpDate = ({ value, onToClick }) => {
//   return <button onClick={onToClick}>Click Me {value}</button>;
// };
// 7. приклад побудови акардеона через ізольований компонент
//  якщо використовуються children, то додати як пропс { children }
// function Toggler({ children }){
  // const [isOpen, setIsOpen] = useState(false);

  // const modal = () => {
  //   setIsOpen(!isOpen)
  // }

  // return (
    // <div>
      {/* <button onClick={modal}>Open/Closed</button> */}
      {/* {isOpen && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          sapiente minus, ex alias at nisi magni. Magni id corrupti, minus
          aliquam nesciunt cumque ea a, voluptate odio quam optio asperiores?
        </p>
      )} */}
      {/* {isOpen && children} */}
    {/* </div> */}
  // );
// }





 

 // приклад монтування модального вікна з помилкою
// const Modal = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>Modal</div>;
// };

// приклад монтування модального вікна та очищення витоку пам'яті
// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
		
//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);
// }

export default function App() {
  //  приклад з кнопкою та збирачем кліків всередині App
  // const [clicks, setClicks] = useState(0);

  // const handleClick = () => {
  //   setClicks(clicks + 1)
  // }

  // 3. приклад побудови кнопки та зміни змінної в реакті(useState) стан завжди має бути в App, або батька
  // const [click, setClicks] = useState(0);

  // const upDateClick = () => {
  //   setClicks(click + 1);
  //   console.log("click", click);
  // };
  // 4. приклад оновлення одного стану, коли кліки звертаються до цього стану
  // const [click, setClicks] = useState(0);

  // const upDateClick = () => {
  //   setClicks(click + 1);
  //   console.log("click", click);
  // };

  // const resetClick = () => {
  //   setClicks(0);
  // }
  // 5. Изоляція стану (щоб не було повторення коду) + додаток вгорі
  // стан має бути в першого батька, звідки прокидується пропсом до інших(нижніх) компоненів
  // const [click, setClicks] = useState(0);

  //  const upClick = () => {
  //     setClicks(click + 1);
  //   };

  // 6. Приклад модального вікна, бару відкрити/закрити та додатково ф-ція лічильника
  // const [click, setClicks] = useState(0);
  // const [isOpen, setIsOpen] = useState(false)

  // const modal = () => {
  //   // при визові modal робимо інверсію isOpen, так і чередуються кліки
  //   setIsOpen(!isOpen);
  //   setClicks(click + 1);
  // }

  // 8. приклад оновлення стану з об'єктом
  // const [array, setArrey] = useState({
  //   a: 1,
  //   b: 1,
  //   c: 1,
  // });

  // const upDateArrey = () => {
  //   setArrey({
  //     ...array,
  //     b: array.b + 2
  //   });
  // }
  // приклад модального вікна
  // const [clicks, setClicks] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);
  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // приклад кліків зі спільним батьком
  // const [clicks, setClicks] = useState(0);
  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  // приклад оновлення об'єктів
  // const [values, setValues] = useState({
  //   x: 0,
  //   y: 0
  // });

  // const updateX = () => {
  //   setValues({
  //     ...values,
  //     x: values.x + 1
  //   })
  // };
  // const updateY = () => {
  //   setValues({
  //     ...values,
  //     y: values.y + 1
  //   })
  // };

  // приклад useEffect
  // const [clicks, setClicks] = useState(0);

  // useEffect(() => {
  // document.title = `You clicked ${clicks} times`;
  // console.log("You can see me only once!");
  // }, []);

  // приклад монтування та виведення кожні 2 сек
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(`Interval - ${Date.now()}`);
  //   }, 2000);
  // }, []);

  // приклад монтування модального вікна з помилкою
  // const [isOpen, setIsOpen] = useState(false);

  // приклад з встановленням залежності
  // const [clicks, setClicks] = useState(0);
  
  // useEffect(() => {
  //   console.log("Clicks updated: ", clicks);
  // }, [clicks]);

  // приклад використання залежнеості
  // const [clicks, setClicks] = useState(0);

  // приклад використання залежнеості та декількох ефектів
  // const [first, setFirst] = useState(0);
  // const [second, setSecond] = useState(0);

  // useEffect(() => {
  //   console.log("First updated: ", first);
  // }, [first]);

  // useEffect(() => {
  //   console.log("Second updated: ", second);
  // }, [second]);

  // useEffect(() => {
  //   console.log("First or second updated: ", first + second);
  // }, [first, second]);

  return (
    <div>
      {/* <h1>Books of the week</h1> */}
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
      <>{/* <BookList books={favouriteBooks} /> */}</>
      {/* 1. приклад побудови кнопки + додаток вгорі*/}
      <>{/* <button onClick={upClick}>Click Me</button> */}</>
      {/* 2. приклад побудови кнопки та передача аргументу + додаток вгорі*/}
      <>{/* <button onClick={() => upClick(10)}>Click Me</button> */}</>
      {/* 3. приклад побудови кнопки та зміни змінної в реакті(useState) */}
      {/* <button onClick={upDateClick}>Click Me React: {click}</button> */}
      {/* 4. приклад оновлення одного стану, коли кліки звертаються до цього стану */}
      {/* <button onClick={upDateClick}>Click 1 Me React: {click}</button>
      <button onClick={upDateClick}>Click 2 Me React: {click}</button>
      <button onClick={upDateClick}>Click 3 Me React: {click}</button>
      <button onClick={resetClick}>Reset</button> */}
      {/* 5. Изоляція стану (щоб не було повторення коду) + додаток вгорі*/}
      {/* передача константи стану та ф-ції upClick пропсом в компонент ClickUpDate */}
      {/* <ClickUpDate value={click} onToClick={upClick} />
      <ClickUpDate value={click} onToClick={upClick} />
      <ClickUpDate value={click} onToClick={upClick} /> */}
      {/* 6. Приклад модального вікна, бару відкрити/закрити та додатково ф-ція лічильника*/}
      {/* <button onClick={modal}>Open/Closed {click}</button> */}
      {/* якщо isOpen === true, то відобразимо все що в дужках */}
      {/* {isOpen && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt aut
          modi enim, sit esse earum vel nihil illo deserunt cumque? Vitae, cum
          corporis dolores quia sunt iure amet provident perspiciatis?
        </p>
      )} */}
      {/* 7. приклад побудови акардеона через ізольований компонент + компенент вгорі */}
      {/* <Toggler />
      <Toggler />
      <Toggler /> */}

      {/* 7.1 приклад використання children для компоненту. Передаються як пропс між тегами */}
      {/* <Toggler>
        <p>
          Hello world
        </p>
      </Toggler>
      <Toggler>
        <p>
          Hello react
        </p>
      </Toggler>
      <Toggler>
        <p>
          Hello end
        </p>
      </Toggler> */}
      {/* 8. приклад оновлення стану з об'єктом */}
      {/* <button onClick={upDateArrey}>Update Arrey { array.b + array.c}</button> */}

      {/* приклад кліків дочерніх елементів окремо */}
      {/* якщо передати пропсами value та ф-цію, то можна змінити кліки окремо, але зі спільним батьком */}
      {/* <ClickCounter value={clicks} onUpData={handleClick} /> */}
      {/* <ClickCounter value={clicks} onUpData={handleClick} /> */}
      {/* приклад кліків зі спільним батьком
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={handleClick}>Current: {clicks}</button> */}
      {/* приклад оновлення об'єктів */}
      {/* <p>
        x: {values.x} y: {values.y}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button> */}
      {/* приклад useEffect */}
      {/* <button onClick={() => setClicks(clicks + 1)}> */}
      {/* You clicked {clicks} times */}
      {/* </button> */}
      {/* {console.log("clicks", clicks)} */}
      {/* приклад монтування та виведення кожні 2 сек */}
      {/* <div>App</div> */}
      {/* приклад монтування модального вікна з помилкою та без помилки*/}
      {/* <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
        {isOpen && <Modal />}
        {isOpen && <p>Now you can see me!</p>}
      </div> */}
      {/* приклад з встановленням залежності*/}
      {/* <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button> */}
      {/* приклад з встановленням залежності та декількох ефектів */}
      {/* <>
          <button onClick={() => setFirst(first + 1)}>First: {first}</button>
          <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
        </> */}
    </div>
  );
}






