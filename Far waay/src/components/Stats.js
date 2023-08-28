export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        start listing your adventure packs to go🚙
      </footer>
    );

  const numberOfItems = items.length;
  let numberOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberOfPacked / numberOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to fly✈️"
          : ` 💼 You have ${items.length} items on your list, and you already packed  ${numberOfPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
