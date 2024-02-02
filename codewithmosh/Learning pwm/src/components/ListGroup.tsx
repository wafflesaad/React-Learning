import { useState } from "react";

function ListGroup() {
  let arr: any[] = [21, 34, 51, 53, "sdas"];
     let [selectedIndex, setSelectedIndex] = useState(-1);


  // console.log(arr);

  let check = () => {
    return arr.length === 0 && <p>No item found</p>;
  };

  function display(a: any) {
    console.log(a);
  }

  return (
    <>
      <h1>List</h1>
      {check()}
      <ul className="list-group">
        {arr.map((items, index) => (
          <li
            key={items}
            className= {selectedIndex === index? "list-group-item active": "list-group-item"}
            onClick={(event) => setSelectedIndex(index)}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
