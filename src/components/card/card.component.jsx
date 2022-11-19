import {Component} from 'react';
import './card.styles.css'

class Card extends Component {

  render() {
    const { name, email, id } = this.props.monster;
console.log(id)
    return (
    <li className="card-container">
      <img src={ `https://robohash.org/${ id }?set=set2` }
           alt={ `monster ${ name }` }/>
      <h2>{ name }</h2>
      <p>{ email }</p>
    </li>
    )
  }
}

export default Card
