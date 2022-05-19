import './styles.css'

export function NavBar(){
    return (
    <section className="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="logo" className='logo'/>
        <span className='profile'>
            <p className='name'>Ígara Yasmin</p>
            <img src="https://github.com/igaraybc.png" alt="foto de perfil"></img>
        </span>
    </section>
    )
}