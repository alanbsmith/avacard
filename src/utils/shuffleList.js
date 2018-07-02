
export default function shuffleList(list) {
  return list.sort(() => ( 0.5 - Math.random()));
}
