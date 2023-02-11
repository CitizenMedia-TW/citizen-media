import React from "react";
import { Link } from "react-router-dom";

const MyStoriesPage = ({ currentUser }) => {
  return (
    <div>
      {!currentUser && <Link to="/login">Login First</Link>}
      {currentUser && (
        <div>
          MyStoriesPage
          <Link to="/stories/draft">Draft</Link>
        </div>
      )}
    </div>
  );
};

export default MyStoriesPage;
