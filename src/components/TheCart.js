import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Films from "./Films";

function TheCart() {
  const { visiableCart, cart, setCart, films, setFilms, removeFavorite } = useContext(AppContext);





const tiz = films.filter((film) => {
  return film.favorited
})

console.log("favorited test", tiz.title)


  return (
    <div className="hallo">
      {visiableCart ? (
        <>
          {tiz.map((film, index) => (
            <li key={index}>
              {film.title}
              <button onClick={() => removeFavorite(film.id)}>
                Remove
              </button>
            </li>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default TheCart;
