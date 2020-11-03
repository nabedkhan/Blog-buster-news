import React, { useEffect, useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
const Pagination = ({ allNews, handlePageChange, perPageNews }) => {

    const [pageCount, setPageCount] = useState(1);
    const totalPageLength = allNews.length / perPageNews;

    useEffect(() => {
        const currentPageNews = pageCount * perPageNews;
        const startingCount = currentPageNews - perPageNews;
        handlePageChange(startingCount, currentPageNews);
    }, [pageCount])

    const handlePrevious = () => {
        if (pageCount > 1) {
            setPageCount(pageCount - 1);
        }
    }

    const handleNext = () => {
        if (totalPageLength > pageCount) {
            setPageCount(pageCount + 1)
        }
    }

    return (
        <div className="pagination mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-md-auto">
                        <hr />
                        <div className="full-area d-flex justify-content-end">
                            <div className="previous">
                                <button
                                    className="btn btn-warning px-2 mr-2"
                                    onClick={handlePrevious}
                                    disabled={pageCount === 1}
                                >
                                    <GrFormPrevious size={'1.5rem'} />
                                </button>
                            </div>
                            <div className="next">
                                <button
                                    className="btn btn-warning px-2"
                                    onClick={handleNext}
                                    disabled={pageCount === totalPageLength}
                                >
                                    <GrFormNext size={'1.5rem'} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;