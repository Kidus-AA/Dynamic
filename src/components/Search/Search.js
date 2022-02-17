import styles from './Search.module.css'
import search from '../../assets/search.svg'

const Search =() => {
    return (
        <>
            <div className={styles.container}>
                <input className={styles.searchBar} type="text" placeholder="Search"></input>
                <img className={styles.icon} src={search} alt="Search" width="16px" height="16px"></img>
            </div>
        </>
    )
}

export default Search