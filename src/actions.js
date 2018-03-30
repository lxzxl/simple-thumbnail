export const openModal = card => ({
  type: 'OPEN_MODAL',
  payload: {
    card
  }
});
export const closeModal = () => ({
  type: 'CLOSE_MODAL',
  payload: {
    card: null
  }
});
