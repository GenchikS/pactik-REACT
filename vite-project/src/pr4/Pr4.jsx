import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import axios from "axios";
import { fetchArticlesWithTopic } from "./pr4_http";
import { SearchForm } from "./SearchForm";


// const Articles = ({ items }) => {
//     return (
//       <ul>
//         {items.map(({ objectID, url, title }) => (
//           <li key={objectID}>
//             <a href={url} target="_blank" rel="noreferrer noopener">
//               {title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     );
// }
        
//  приклад відеоплеєру, сам код нище
// const Player = ({ source }) => {
//   const playerRef = useRef();

//   const play = () => playerRef.current.play();

//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };        

export default function Pr4() {
  //   const [articles, setArticles] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);
  // const handleSearch = async (topic) => {
  //   try {
  //     setArticles([]);  //  очистка попереднього масиву
  //     setError(false);  //  скидання помилки, якщо вона була в попередньому пошуку
  //     setLoading(true);
  //     const data = await fetchArticlesWithTopic(topic);
  //     setArticles(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
    // return (
    //   <div>
    //     <h1>Latest articles</h1>
    //     <SearchForm onSearch={handleSearch} />
    //     {loading && <p>Loading data, please wait...</p>}
    //     {error && (
    //       <p>Whoops, something went wrong! Please try reloading this page!</p>
    //     )}
    //     {articles.length > 0 && <Articles items={articles} />}
    //   </div>
    // );
  //  приклад стану та map
  //  const [planets, setPlanets] = useState(["Earth","Mars","Jupiter","Venus",]);
  //  const [query, setQuery] = useState("");
  //  const filteredPlanets = planets.filter((planet) => planet.includes(query));
  //  return (
  //    <ul>
  //      {filteredPlanets.map((planet) => (
  //        <li key={planet.id}>{planet}</li>
  //      ))}
  //    </ul>
  //  );
  // продовження приклад стану, кліку та map
  // const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  // const [query, setQuery] = useState("");
  // const [clicks, setClicks] = useState(0);
  // const filteredPlanets = planets.filter((planet) => planet.includes(query));
  // return (
  //   <>
  //     <button onClick={() => setClicks(clicks + 1)}>
  //       Number of clicks: {clicks}
  //     </button>
  //     <ul>
  //       {filteredPlanets.map((planet) => (
  //         <li key={planet}>{planet}</li>
  //       ))}
  //     </ul>
  //   </>
  // );
  // продовження приклад стану, кліку та map з мемозацією, щоб кожного разу не повертати масив який не змінився
  // const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  // const [query, setQuery] = useState("");
  // const [clicks, setClicks] = useState(0);
  // const filteredPlanets = useMemo(
  //   () => planets.filter((planet) => planet.includes(query)),
  //   [planets, query]
  // );
  // return (
  //   <>
  //     <button onClick={() => setClicks(clicks + 1)}>
  //       Number of clicks: {clicks}
  //     </button>
  //     <ul>
  //       {filteredPlanets.map((planet) => (
  //         <li key={planet}>{planet}</li>
  //       ))}
  //     </ul>
  //   </>
  // );
  //  приклад хука useRef
  // const [value, setValue] = useState(0);
  // const btnRef = useRef();
  // // Буде undefined на першому рендері
  // // і посиланням на DOM-елемент всі наступні
  // console.log("App (undefined): ", btnRef.current);
  // useEffect(() => {
  //   // Ефект виконується після монтування,
  //   // тому завжди буде посиланням на DOM-елемент
  //   console.log("useEffect: ", btnRef.current);
  // });
  // const handleClick = () => {
  //   // Кліки будуть після монтування,
  //   // тому завжди буде посиланням на DOM-елемент
  //   console.log("handleClick: ", btnRef.current);
  // };
  // return (
  //   <>
  //     <button onClick={() => setValue(value + 1)}>
  //       Update value to trigger re-render
  //     </button>
  //     <button ref={btnRef} onClick={handleClick}>
  //       Button with ref
  //     </button>
  //   </>
  // );
  // const valueRef = useRef(0);
  // useEffect(() => {
  //   // Виконається лише один раз під час монтування.
  //   // Наступні оновлення значення рефа не викличуть оновлення компонента
  //   console.log(valueRef.current);
  // });
  // const handleClick = () => {
  //   valueRef.current += 1;
  // };
  // return <button onClick={handleClick}>Click to update ref value</button>;

  //  приклад відеоплеєру, початковий код вище
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
};


