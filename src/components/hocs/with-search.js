import React from 'react';
import { withRouter } from "react-router-dom";
import LocationSearch from "utils/location-search";

export default function withSearch(WrappedComponent) {
  return withRouter((props) => {
    const locationSearch = new LocationSearch(props.location.search);

    const setQuery = (searchQuery) => {
      locationSearch.setQuery(searchQuery)
      props.history.push({ search: locationSearch.toString() });
    };
    const getQuery = () => locationSearch.getQuery();
    const getSearch = () => locationSearch.toString();

    return <WrappedComponent
             {...props}
             setQuery={setQuery}
             getQuery={getQuery}
             getSearch={getSearch}
           />;
  });
}
