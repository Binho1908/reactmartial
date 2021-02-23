import styles from '../styles/components/Profile.module.css'
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Binho1908.png" alt="Fabio Augusto"/>
        <div>
            <strong>Fabio Augusto</strong>
            <p>
                <img src="icons/level.svg" alt="Seta Para cima cor verde(Level)"/>
                Level 1
            </p>
        </div>
        </div>
    )
}