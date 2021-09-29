import React, { useEffect, useState } from 'react';
import NewsStyle from './NewsStyle';

const Home = () => {
    const apiKey = 'c0a7d495565c4f15be12113f50301dad';
    const [news, setNews] = useState([]);
    const [totalArticle, setTotalArticle] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setNews(data.articles)
                setTotalArticle(data.totalResults)
            });
    }, [])
    return (
        <div>
            <h1 className="border-b-4 font-serif mt-10 mx-auto pb-10 text-5xl text-center w-2/3">Welcome To <span className="font-extrabold text-red-600">BBC</span> News</h1>
            <h1 className="font-serif mt-10 mx-auto pb-10 text-5xl text-center border-b-4 w-2/4"><span className="font-extrabold text-red-600">News</span> Found : {totalArticle}</h1>
            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    news.map(item => <NewsStyle item={item} key={item.publishedAt}></NewsStyle>)
                }
            </div>
        </div>
    );
};

export default Home;