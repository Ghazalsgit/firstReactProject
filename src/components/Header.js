import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import TheCart from "./TheCart";

const Header = () => {
  const { cart, visiableCart, setVisiableCart, films, removeFavorite } = useContext(AppContext);

  function toggle() {
    setVisiableCart((prevState) => !prevState);
  }

  const likedAmount = films.filter((film) => {
    return film.favorited
  })

  return (
    <div className="header">
      <h1 className="title">Studio Ghibli Movies</h1>
      <section className="cart">
        <h3 onClick={toggle} className="cart-num">
          {likedAmount.length} liked {likedAmount.length === 1 ? "movie" : "movies"}
        </h3>
        {visiableCart ? <TheCart /> : null}
      </section>
    </div>
  );
};
export default Header;
