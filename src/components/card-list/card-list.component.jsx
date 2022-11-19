import { Component } from 'react';
import './card-list.style.css'
import Card from '../card/card.component';

class CardList extends Component {

  render() {
    const { monsters } = this.props;

    return (
      <ul className="card-list">
        { monsters.map(monster => {
            return (
              <Card monster={monster} key={monster.id}/>
            );
          }
        ) }
      </ul>
    );
  }
}

export default CardList;
