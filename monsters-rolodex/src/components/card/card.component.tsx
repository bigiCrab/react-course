import { Monster } from "../../App";
import "./card.styles.css";

type CardProp = {
  monster: Monster;
};

const Card = ({ monster }: CardProp) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
