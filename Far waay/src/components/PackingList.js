import { useState } from "react";
import Item from "./Item";
export default function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("date");

  let sortedItems;
  if (sortBy === "date") {
    sortedItems = items;
  } else if (sortBy === "packed") {
    sortedItems = items;
    let packedItems = sortedItems.filter((item) => item.packed);
    let unPackedItems = sortedItems.filter((item) => !item.packed);
    sortedItems = [...packedItems, ...unPackedItems];
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} setItems={setItems} />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value={"packed"}>sort by packed</option>
          <option value={"date"}>sort by date modified</option>
          <option value={"alphabet"}>sort by alphabet</option>
        </select>
        <button onClick={(event) => setItems((items) => [])}>Clear List</button>
      </div>
    </div>
  );
}
