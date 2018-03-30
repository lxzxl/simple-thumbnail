import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Thumbnail extends PureComponent {
  render() {
    return (
      <section className="thumbnail">
        {this.props.cardList.map(item => <Card {...item} />)}
      </section>
    );
  }
}

Thumbnail.propTypes = {
  cardList: PropTypes.arrayOf(Card.propTypes)
};

export default Thumbnail;
