import { useState } from "react";

interface Props {
  items: string[];
  heading: string;

  onSelelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelelectItem }: Props) {
  // State hook we can tell react that this component can have data that changes over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // using fragments to return more than one element
    // empty angle brackets tells react to wrap all its children in a fragment.
    // fragement is used to include more than one thing so you dont have to wrap what ever you do in a div for an example.
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* mapping each item to a list item by giving them a key */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // passing a referance of the function of the event handler
            onClick={() => {
              setSelectedIndex(index);
              onSelelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
