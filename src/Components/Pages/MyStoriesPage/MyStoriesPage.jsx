import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileService from "../../../services/profile.service";

const MyStoriesPage = ({ currentUser }) => {
  let [myStories, setMyStories] = useState([]);
  useEffect(() => {
    if (currentUser) {
      ProfileService.myStories()
        .then((data) => {
          setMyStories(data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [currentUser]);

  return (
    <div>
      {!currentUser && <Link to="/login">Login First</Link>}
      {currentUser && (
        <div>
          <Link to="/stories/draft">Draft</Link>
          <div>
            Titles of stories:
            {myStories.map((item, index) => {
              return (
                <li key={index} style={{ listStyle: "none" }}>
                  <p>{item.title}</p>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyStoriesPage;
