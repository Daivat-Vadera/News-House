import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinier from "./Spinier";
import PropTypes from "prop-types";
import axios from "axios";
// require("dotenv").config();

function NewsContainer(props) {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  console.log(` ${process.env.REACT_APP_X_API_KEY} `);
  const updateNews = async () => {
    props.setProgress(10);
    var url = {
      method: "GET",
      url: `https://api.newscatcherapi.com//v2/latest_headlines?lang=en&countries=${props.country}&topic=${props.category}&not_sources=webindia123.com,thetimeshub.in&when=24h&page_size=21&page=${currentPage}`,
      headers: {
        "x-api-key": ` ${process.env.REACT_APP_X_API_KEY} `,
      },
    };

    setLoading(true);
    let data;
    await axios(url).then(function (response) {
      data = response.data;
    });
    props.setProgress(30);

    props.setProgress(70);
    setArticles(data.articles);
    setTotalPages(data.total_pages);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} -  News House`;
    updateNews();
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <div>
      <>
        <h1 className="text-center my-3" style={{ margin: "35px 0px" }}>
          News House - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinier />}
        <div className="container my-5">
          <div className="row">
            {articles.map(function (element) {
              return (
                <div className="col-md-4" key={element._id}>
                  <NewsItem
                    key={element._id}
                    title={element.title ? element.title : ""}
                    description={element.excerpt ? element.excerpt : ""}
                    imageUrl={element.media}
                    newsUrl={element.link}
                    author={element.author}
                    date={element.published_date}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-center">
            <p>
              {currentPage} out of {totalPages} page
            </p>
          </div>
          <div className="container d-flex justify-content-between">
            {currentPage > 1 ? (
              <button
                className="btn btn-dark"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>
            ) : (
              <button className="btn btn-dark" disabled>
                Prev
              </button>
            )}
            {currentPage + 1 <= totalPages ? (
              <button
                className="btn btn-dark"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            ) : (
              <button className="btn btn-dark" disabled>
                Next
              </button>
            )}
          </div>
        </div>
      </>
    </div>
  );
}
NewsContainer.defaultProps = {
  country: "in",
  category: "general",
};

NewsContainer.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
export default NewsContainer;
