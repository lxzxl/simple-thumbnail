export default function activeCard(
  state = { activeCard: null },
  { type, payload }
) {
  switch (type) {
    case 'OPEN_MODAL':
      return payload;
    case 'CLOSE_MODAL':
      return payload;
    default:
      return state;
  }
}
