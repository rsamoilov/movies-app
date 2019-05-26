import React, { useState } from "reactn";
import Octicon, { Star } from '@githubprimer/octicons-react';

export default function FavoriteButton() {
  const [state, setState] = useState({});

  function handleClick() {
    setState({ isLoading: true });
  }

  if (state.isLoading) {
    return (
      <div className="spinner-border" role="status" style={{width: "27px", height: "27px"}}>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div onClick={handleClick}>
      <Octicon height="24px"><Star /></Octicon>
    </div>
  );
}
