import './card-list.style.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => (
  <ul className="card-list">
    { monsters.map(monster => {
        return (
          <Card monster={ monster }
                key={ monster.id }/>
        );
      }
    ) }
  </ul>
);

export default CardList;
