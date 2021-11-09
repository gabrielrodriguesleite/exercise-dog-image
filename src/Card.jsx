import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { dog } = this.props;
    let nome = dog;
    nome = nome.split('/')[nome.split('/').length - 2];
    return (
      <section>
        <h1>{ nome }</h1>
        <img alt={ nome } src={ dog } width="100px" />
      </section>
    );
  }
}

Card.propTypes = {
  dog: PropTypes.string.isRequired,
};

export default Card;
