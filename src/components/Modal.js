import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import 'scrollingelement';

injectGlobal`
  body.modal-open {
    position: fixed;
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
    if (nextProps.isActive) {
      this.afterOpen();
    } else {
      this.beforeClose();
    }
  }

  componentWillUnmount() {
    this.beforeClose();
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

  /**
   * Aimed to resolve the modal scrolling issue on mobile devices.
   */
  body = document.getElementsByTagName('body')[0];
  bodyCls = 'modal-open';
  scrollTop;
  afterOpen() {
    this.scrollTop = document.scrollingElement.scrollTop;
    this.body.classList.add(this.bodyCls);
    document.body.style.top = -this.scrollTop + 'px';
  }
  beforeClose() {
    this.body.classList.remove(this.bodyCls);
    // scrollTop lost after set position:fixed, restore it back.
    document.scrollingElement.scrollTop = this.scrollTop;
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
