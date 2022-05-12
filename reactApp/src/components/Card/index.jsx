import './styles.css';

//Através do props dentro dos parêteses é possível acessar propriedades que foram passadas em outro elemento que invoca o <Card/> 
//Ex.: <Card name="Ígara" time="10:23:23"/>

//ou podemos desestruturar Card({name, time}) aí não precisa colocar {props.name} só o {name}

export function Card(props) {
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small> {props.time}</small>
        </div>
    )
}