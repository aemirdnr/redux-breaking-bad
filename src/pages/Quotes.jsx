import { fetchQuotes } from "../redux/quotesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Quotes() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.quotes.items);
  const status = useSelector((state) => state.quotes.status);
  const error = useSelector((state) => state.quotes.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuotes());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <h1 className="text-center mt-4">Loading...</h1>;
  } else if (status === "failed") {
    console.log("Error found: " + error);
  }

  return (
    <div className="container">
      <div className="d-flex flex-column gap-2 mt-2 my-2">
        {items.map((item, index) => (
          <div key={index} className="bb__quote">
            <h3>
              <q>{item.quote}</q>
              <strong> - {item.author}</strong>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
