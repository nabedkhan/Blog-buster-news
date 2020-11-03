import React from 'react';
import newsCategory from '../newsCatagory/category';

const Header = ({ handleKeyPress, category, handleClick }) => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <h1 className="mt-5 mb-3 font-weight-bold">Block Buster News</h1>
                        <input
                            type="search"
                            placeholder="Search Any News"
                            className="form-control mb-3"
                            onKeyPress={handleKeyPress}
                        />
                        <div>
                            {newsCategory &&
                                Object.keys(newsCategory).map((item) =>
                                    category === newsCategory[item] ? (
                                        <button
                                            className="btn btn-warning mr-2 mb-2"
                                            onClick={() => handleClick(newsCategory[item])}
                                        >
                                            {`#${newsCategory[item]}`}
                                        </button>
                                    ) : (<button
                                        className="btn btn-light mr-2 mb-2"
                                        onClick={() => handleClick(newsCategory[item])}
                                    >
                                        {`#${newsCategory[item]}`}
                                    </button>)
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;