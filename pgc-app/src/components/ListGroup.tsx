// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
    let items = [
        'New york',
        "San fransisco",
        "Chicago",
        "New orleans"
    ]
// let selectedIndex = 0;
//hook
  const [selectedIndex, setSelectedIndex] = useState(-1);


    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="listGroup">               
                {items.map((item, index) =>
                    <li
                        className={selectedIndex === index ? 'listGroup active' : 'listGroup'}
                        key={item}
                        onClick={() => { setSelectedIndex(index)}}
                    >
                        {item}
                    </li>)}
            </ul>
        </>
    )
}

export default ListGroup;