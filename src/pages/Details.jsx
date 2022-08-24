import axios from "axios";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Details() {
  const [char, setChar] = useState(null);
  const { char_id } = useParams();

  useEffect(() => {
    console.log("Hey");
    axios(`https://www.breakingbadapi.com/api/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]));
  }, [char_id]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        {char ? (
          <div className="bb__card-detail flex-column flex-md-row">
            <img src={char.img} alt={char.name} />
            <div className="d-flex flex-column text-nowrap text-center p-3 gap-3 mx-5 justify-content-around h-100">
              <h3>{char.name}</h3>
              <h5>Birthday: {char.birthday}</h5>
              <h5>Nickname: {char.nickname}</h5>
              <Link to="/characters">
                <button className="btn btn-outline-dark">Turn back</button>
              </Link>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Details;
