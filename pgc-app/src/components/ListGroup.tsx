function ListGroup() {
    const items = [
        'New york',
        "San fransisco",
        "Chicago",
        "New orleans"
    ]

    if (items.length === 4)
        return <><h1>List</h1><p>"empty list"</p></>;


    return (
        <>
            <h1>List</h1>
            <ul className="listGroup">
                {items.map(item => <li key={item}>{item}</li>)}

                {/* <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>  */}
            </ul>
        </>
    )
}

export default ListGroup;