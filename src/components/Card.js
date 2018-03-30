import React from 'react';
import PropTypes from 'prop-types';

const CardContent = ({ author, email, updateAt }) => {
  return (
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{author}</p>
          <p className="subtitle is-6">{email}</p>
        </div>
      </div>
      <div className="content">
        <p>Last Update Time: {updateAt}</p>
      </div>
    </div>
  );
};
CardContent.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  updatedAt: PropTypes.string,
  desc: PropTypes.string
};

const Card = ({ data, showContent, onClick }) => (
  <div className="card" onClick={e => onClick && onClick(e)}>
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={data.image} alt="Placeholder" />
      </figure>
    </div>
    {showContent && <CardContent {...data} />}
  </div>
);

Card.propTypes = {
  data: PropTypes.shape(CardContent.propTypes).isRequired,
  onClick: PropTypes.func
};

export default Card;
