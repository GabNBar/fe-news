import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopics } from "../../utils/api";

function Nav() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!topics) {
    return <p>Loading</p>;
  }

  return (
    <nav>
      <div>
        {topics.map((topic) => (
          <span key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>
              {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
            </Link>
            <span> </span>
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
