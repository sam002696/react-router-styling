import React, { useEffect, useState } from 'react';
import NewsStyle from './NewsStyle';

const Home = () => {
    const apiKey = 'c0a7d495565c4f15be12113f50301dad';
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => setNews(data.articles));
    }, [])
    return (
        <div>
            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    news.map(item => <NewsStyle item={item} key={item.publishedAt}></NewsStyle>)
                }
            </div>
        </div>
    );
};

export default Home;