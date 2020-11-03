import React from 'react';
import dummyImage from '../dims.jpg';

const NewsCard = ({ news }) => {
    const { title, description, url, urlToImage, publishedAt, source: { name } } = news;
    return (
        <div className="col-lg-8 col-md-10 mx-md-auto">
            <div className="card mb-5">
                <img src={urlToImage ? urlToImage : dummyImage}
                    className="card-img-top"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">{new Date(publishedAt).toDateString()}</p>
                        <a className="btn btn-light" href={url} target="_blank">{name}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;