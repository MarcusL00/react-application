import ListGroup from "./Components/ListGroup";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Copenhagen",
    "Paris",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
