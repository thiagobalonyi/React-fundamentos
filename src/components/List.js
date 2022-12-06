import Item from "./Item"

function List() {

    return(
        <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca='Ferrari' anoLancamento={1985} />
            <Item marca='Porsche' anoLancamento={1984} />
            <Item marca='Fusca' anoLancamento={1960} />
            <Item marca='' anoLancamento={0} />
        </ul>
        </>
    )
}

export default List