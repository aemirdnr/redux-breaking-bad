import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../redux/charactersSlice";

function Characters() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    dispatch(fetchCharacters());
    if (error) console.log("Error found: " + error);
  }, [dispatch]);

  if (isLoading) {
    return <h1 className="text-center mt-4">Loading...</h1>;
  }

  return (
    <div className="container">
      <div className="row justify-content-between text-center">
        {items.map((item, index) => (
          <div key={index} className="col-4 p-3">
            <div className="bb__card">
              <label className="mt-3">{item.name}</label>
              <img src={item.img} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
