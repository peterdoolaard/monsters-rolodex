import './card.styles.css';

const Card = ({ monster }) => {

  const { name, email, id } = monster;

  return (
    <li className="card-container">
      <img src={ `https://robohash.org/${ id }?set=set2` }
           alt={ `monster ${ name }` }/>
      <h2>{ name }</h2>
      <p>{ email }</p>
    </li>
  );
};

export default Card;
