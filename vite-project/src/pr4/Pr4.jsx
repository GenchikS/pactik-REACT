import { useEffect, useState } from "react";
import axios from "axios";
import { fetchArticlesWithTopic } from "./pr4_http";
import { SearchForm } from "./SearchForm";


const Articles = ({ items }) => {
    return (
      <ul>
        {items.map(({ objectID, url, title }) => (
          <li key={objectID}>
            <a href={url} target="_blank" rel="noreferrer noopener">
              {title}
            </a>
          </li>
        ))}
      </ul>
    );
}
        
        

export default function Pr4() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

	const handleSearch = async (topic) => {
    try {
      setArticles([]);  //  очистка попереднього масиву
      setError(false);  //  скидання помилки, якщо вона була в попередньому пошуку
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
         
    return (
      <div>
        <h1>Latest articles</h1>
        <SearchForm onSearch={handleSearch} />
        {loading && <p>Loading data, please wait...</p>}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}
        {articles.length > 0 && <Articles items={articles} />}
      </div>
    );
};


