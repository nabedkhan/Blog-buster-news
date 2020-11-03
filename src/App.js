import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  const [allNews, setAllNews] = useState([]);
  const [search, setSearch] = useState('technology');
  const [category, setCategory] = useState('technology');
  const [perPageNews] = useState(5);
  const [news, setNews] = useState({
    start: 0,
    end: perPageNews
  });

  console.log(allNews);

  const handlePageChange = (startValue, endValue) => {
    setNews({ start: startValue, end: endValue })
  }

  const sliceNews = allNews.slice(news.start, news.end);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      setSearch(event.target.value);
    }
  }
  const handleClick = (value) => {
    setCategory(value);
    setSearch(value);
  }

  const apiKey = '7fb9fc463e5b40ecb75a5923352fdc47';
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(result => setAllNews(result.articles))
  }, [search]);


  return (
    <div className="App">
      <Header category={category}
        handleKeyPress={handleKeyPress}
        handleClick={handleClick}
      />
      <Pagination
        handlePageChange={handlePageChange}
        allNews={allNews}
        perPageNews={perPageNews}
      />
      <NewsList news={sliceNews} />
      <Footer />
    </div>
  );
}

export default App;
