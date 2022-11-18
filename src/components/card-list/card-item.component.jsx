import {Component} from 'react';

class CardItem extends Component {

  render() {
    const { name, email, id } = this.props.monster;

    return (
    <li key={ id } className="card-container">
      <img src={ `https://robohash.org/${ id }?set=set2` }
           alt={ `monster ${ name }` }/>
      <h2>{ name }</h2>
      <p>{ email }</p>
    </li>
    )
  }
}

export default CardItem
