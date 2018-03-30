import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Card extends PureComponent {
  render() {
    return <div className="">card</div>;
  }
}

Card.propTypes = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string
});

export default Card;
