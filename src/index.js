import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItem(props) {
  return (
    <div className="card_item">
      <h2>{props.nome}</h2>
      <img src={props.imagem} alt="Imagem do Personagem" width="300" />
    </div>
  );
}

function ListItems() {
  return (
    <div className="lista_item">
      <CardItem
        nome="Harry Potter"
        imagem="https://www.thestar.com/content/dam/thestar/entertainment/2010/11/18/happy_as_harry_daniel_radcliffe_talks_about_bras_girlfriends_and_fame/daniel_radcliffe_as_harrypotter.jpeg"
      />
      <CardItem
        nome="Hermione Granger"
        imagem="https://cultura.culturamix.com/blog/wp-content/gallery/hermione-granger-1/Hermione-Granger-4.jpg"
      />
      <CardItem
        nome="Ron Weasley"
        imagem="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79dc962d-ed92-487d-98b3-3b80aff0a39a/d8h2z1w-409dec52-2bd6-4f48-8e56-a0f1d4c52911.jpg/v1/fill/w_600,h_843,q_75,strp/ron_weasley_and_his_daemon_by_lj_todd_d8h2z1w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NDMiLCJwYXRoIjoiXC9mXC83OWRjOTYyZC1lZDkyLTQ4N2QtOThiMy0zYjgwYWZmMGEzOWFcL2Q4aDJ6MXctNDA5ZGVjNTItMmJkNi00ZjQ4LThlNTYtYTBmMWQ0YzUyOTExLmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FnsjhYVXEQjbIDU2_0tsIaj0bbVmRqEUxdMJBc3I07U"
      />
      <CardItem
        nome="Luna Lovegood"
        imagem="http://images4.fanpop.com/image/photos/17100000/Luna-Lovegood-harry-potter-and-the-deathly-hallows-movies-17181750-1919-2560.jpg"
      />
      <CardItem
        nome="Neville Longbottom"
        imagem="https://i.pinimg.com/originals/8b/4b/2e/8b4b2e3a1583a372a948b57ba29a79b4.jpg"
      />
      <CardItem
        nome="Gina Weasley"
        imagem="https://hojeacordeiamelia.files.wordpress.com/2013/08/ginny.jpg"
      />
      <CardItem
        nome="Fred Weasley"
        imagem="https://www.giantbomb.com/a/uploads/scale_small/46/462814/3187899-5431433650-latest"
      />
      <CardItem
        nome="George Weasley"
        imagem="https://www.giantbomb.com/a/uploads/scale_small/46/462814/3187904-5530051006-latest"
      />

      <CardItem
        nome="Cedrico Diggory"
        imagem="http://pm1.narvii.com/6312/0ca7083524a0c1a85bc1a899facdc363feebb665_00.jpg"
      />
      <CardItem
        nome="Draco Malfoy"
        imagem="https://todoharrypotter.es/image/todoharrypotter.es/draco-malfoy-compra-productos-de-harry-potter-1537359170.jpg/500/650"
      />

      <CardItem
        nome="Albus Dumbledore"
        imagem="https://lh3.googleusercontent.com/proxy/hle5pGhD6BS6DhO6rLzHfTaicpb5Lsi1heUCsu-QiV1lsRshtmLpJqAjWO-w5jKYE0WE90-mNSeT5HeqAZU2LHZbtAw6ozBCAOHsSCgF2-OUqGpNnXQ"
      />
      <CardItem
        nome="Minerva Mcgonagall"
        imagem="https://lh3.googleusercontent.com/proxy/zOACpnm8CU2LmLK3B8_e8N72zmvT-Zd5NHOGtUs_85XC4ItRhT5_hrFKZpPSvvH_V1_jwcYEPf21ZU3wEkGU0BimzsqZeDTiEF7cAbsRGSUjT3PtRS5sLrxYWMDB3gMsfUqI-UDEUji1hOvZ_iP1LXe9jYjfniw3dxvjOoKlO8DcB9NSTNDw3IKeBoO2fQ
        "
      />
    </div>
  );
}
function App() {
  return <ListItems />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
