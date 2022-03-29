import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Films = () => {
  let navigate = useNavigate();
  const { films, setShoppingCartNumber, setCart, cart, setFilms,} =
    useContext(AppContext);

    

  function addToCart(filmId) {
    const likedOrNot = films.map((film) => {
      if(film.id === filmId){
        return {...film, favorited: !film.favorited}
      }
      else{
        return film
      }
    })
      setFilms(likedOrNot)
      
  }

  



  useEffect(() => {
    console.log(cart);
    console.log(films)
  }, [cart]);



  const filmsData = films.map((film) => {
    return (
      <div key={film.id} className="film-container">
        <h3>{film.title}</h3>
        <img
          className="pic"
          src={film.image}
          alt="movie-pic"
          onClick={() => navigate(`/Movie/${film.id}`)}
        />
        <button onClick={() => addToCart(film.id, film)}>
          {film.favorited ? "Unlike" : "Like"}
        </button>
        
      </div>
    );
  });

  return <div className="film-container">{filmsData}</div>;
};
export default Films;
