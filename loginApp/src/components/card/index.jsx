import './style.css'

export function Card({users}){
    return (<div className="card">
        <div className="container">
            <strong>Users</strong>
            {
                users.map((user) => <p key={user._id}>{user.nome} <small>{user.email}</small></p>)
            }
        </div>

    </div>)
}