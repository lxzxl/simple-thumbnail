import React, { PureComponent } from 'react';
import Card from './components/Card';
import Modal from './components/Modal';
import { getImages } from './api';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeCard: null
    };
  }
  componentDidMount() {
    getImages().then(data => {
      this.setState({ data });
    });
  }
  render() {
    const { data, activeCard } = this.state;
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
                <Card data={item} onClick={e => this.handleClick(item)} />
              </div>
            ))}
          </div>
        </div>
        <Modal isActive={!!activeCard} onClose={this.handleClose}>
          {activeCard && <Card data={activeCard} showContent={true} />}
        </Modal>
      </section>
    );
  }
  handleClick = card => {
    this.setState({ activeCard: card });
  };
  handleClose = () => {
    this.setState({ activeCard: null });
  };
}

export default App;
