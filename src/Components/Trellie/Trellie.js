import Activity from "../Activity/Activity";
import Input from "../Input/Input";
import "./Trellie.css"

const Trellie = ({ id, trellie }) => {    
    let listItemsToBeRendered = trellie.activities.map(object => {
        return (<Activity key={object.id} activity={object} />);
    });

    return (
        <section className="trellie">
            <header className="trellie__header">
                <h2 className="trellie__heading">{trellie.title || "Placeholder"}</h2>
                <div className="trellie__headerWrapper">
                    <div className="trellie__number">{trellie.activities.lenght || "?"}</div>
                    <button className="trellie__edit">...</button>
                </div>
            </header>
            <ul className="trellie__activities">
                {listItemsToBeRendered}
            </ul>
            <Input id={id}/>
        </section>
    )
}

export default Trellie;