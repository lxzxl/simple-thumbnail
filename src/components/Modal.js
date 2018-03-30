import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  html.modal-open {
    overflow: hidden;
  }
`;

class Modal extends PureComponent {
  static propTypes = {
    isActive: PropTypes.bool,
    className: PropTypes.string,
    showClose: PropTypes.bool,
    onClose: PropTypes.func
  };

  componentWillReceiveProps(nextProps) {
    document
      .getElementsByTagName('html')[0]
      .classList.toggle('modal-open', nextProps.isActive);
  }
  renderPortal() {
    const { className, isActive = false, showClose = true } = this.props;
    return (
      <div className={`modal ${className} ${isActive ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={this.close} />
        <div className="modal-content">{this.props.children}</div>
        {showClose && (
          <button className="modal-close is-large" onClick={this.close} />
        )}
      </div>
    );
  }

  render() {
    return createPortal(
      this.renderPortal(),
      document.getElementById('modal-root')
    );
  }

  close = () => {
    this.props.onClose && this.props.onClose();
  };
}

export default styled(Modal)`
  .modal-content {
    max-width: 480px;
  }
`;
