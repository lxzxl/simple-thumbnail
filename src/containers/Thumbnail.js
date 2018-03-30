import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { openModal, closeModal } from '../actions';
import Axios from 'axios';

class Thumbnail extends PureComponent {
  static propTypes = {
    activeCard: PropTypes.shape(Card.propTypes.data),
    handleClick: PropTypes.func,
    handleClose: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    Axios.get('http://localhost:3001/api/images').then(({ data }) => {
      this.setState({ data });
    });
  }
  render() {
    const { activeCard, handleClick, handleClose } = this.props;
    const { data } = this.state;
    return (
      <section className="section">
        <h1 className="is-size-4">Thumbnail Demo</h1>
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {data.map(item => (
              <div
                key={item.id}
                className="column is-6-tablet is-4-desktop is-3-widescreen is-2-fullhd"
              >
                <Card data={item} onClick={e => handleClick(item)} />
              </div>
            ))}
          </div>
        </div>
        <Modal isActive={!!activeCard} onClose={handleClose}>
          {activeCard && <Card data={activeCard} showContent={true} />}
        </Modal>
      </section>
    );
  }
}

const mapStateToProps = ({ card }) => ({
  activeCard: card
});
const mapDispatchToProps = dispatch => ({
  handleClick: card => dispatch(openModal(card)),
  handleClose: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
