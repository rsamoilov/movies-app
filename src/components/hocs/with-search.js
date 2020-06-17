import React from 'react';
import { withRouter } from "react-router-dom";

export default function withSearch(WrappedComponent) {
  return withRouter((props) => {
    let searchQuery = props.location.search.replace("?query=", "");

    try {
      searchQuery = decodeURI(searchQuery);
    } catch (URIError) { }

    const setQuery = (newSearchQuery) => {
      searchQuery = newSearchQuery;
      props.history.push({ search: searchQuery.length ? `query=${newSearchQuery}` : "" });
    };
    const getQuery  = () => searchQuery;
    const getSearch = () => searchQuery.length ? `query=${searchQuery}` : "";

    return <WrappedComponent
             {...props}
             setQuery={setQuery}
             getQuery={getQuery}
             getSearch={getSearch}
           />;
  });
}
