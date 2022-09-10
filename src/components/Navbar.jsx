import styles from "./Navbar.module.css" 

function Navbar(){
    return(
        <div className={styles.Navbar}>
            <a href="">Home</a>
            <a href="">Login</a>
        </div>
    )
}

export {Navbar}