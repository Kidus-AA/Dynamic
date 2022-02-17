import styles from './Button.module.css'

const Button = () => {
    return (
        <div className={styles.container}>
            <a className={styles.link} href="https://www.google.com/">
                <span className={styles.span}>SHOP NOW</span>
            </a>
        </div>
    )
}

export default Button
