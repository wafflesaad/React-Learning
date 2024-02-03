import { useState } from "react";

interface listInfo{
  arr: any[],
  heading: string,
  onSelect: (item: string)=>void
}

function ListGroup(props: listInfo) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  // console.log(arr);

  let check = () => {
    return props.arr.length === 0 && <p>No item found</p>;
  };

  function display(a: any) {
    console.log(a);
  }

  return (
    <>
      <h1>{props.heading}</h1>
      {check()}
      <ul className="list-group">
        {props.arr.map((items, index) => (
          <li
            key={items}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(event) => {setSelectedIndex(index); props.onSelect(items);}}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
