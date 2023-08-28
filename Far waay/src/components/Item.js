export default function Item({ item, setItems }) {
  function handleDeleteItem(event) {
    setItems((items) => items.filter((titem) => titem !== item));
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          setItems((items) =>
            items.map((titem) =>
              titem.id === item.id ? { ...titem, packed: !titem.packed } : titem
            )
          );
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}
