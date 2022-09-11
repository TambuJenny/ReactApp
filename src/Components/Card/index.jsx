import './style.css'

export function Card (props)
{
    return (
        <div className="card">

        <strong>{props.Name}</strong>
        <small>{props.Time}</small>

        </div>
    )
}
