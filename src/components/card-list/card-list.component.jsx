import { Component } from 'react';
import './card-list.style.css'
import './card.styles.css'
import CardItem from './card-item.component';

class CardList extends Component {

  render() {
    const { monsters } = this.props;

    return (
      <ul className="card-list">
        { monsters.map(monster => {
            return (
              <CardItem monster={monster} />
            );
          }
        ) }
      </ul>
    );
  }
}

export default CardList;
