import React from 'react';
import NewsCard from './NewsCard';

const newsList = ({ news }) => {
    return (
        <div className="news-list my-5">
            <div className="container">
                <div className="row">

                    {
                        news.length > 0 ? (news.map((news, index) => <NewsCard key={index} news={news} />)) :
                            (
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default newsList;