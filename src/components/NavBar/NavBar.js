import styles from './NavBar.module.css'
import logo from '../../assets/testLogo.png'
import search from '../../assets/search.svg'
import heart from '../../assets/heart.svg'
import cart from '../../assets/cart.svg'
import menu from '../../assets/menu.svg'

import { useEffect, useState, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const menuButton = useRef();

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if(menuButton.current.contains(e.target)){
                document.querySelector(`.${styles.blur}`).style.display = "block";
                document.querySelector(`.${styles.hidden_menu}`).style.display = "block";
                document.querySelector(`.${styles.additional_content}`).style.display = "inline-block";
                document.querySelector(`.${styles.link_container}`).style.display = "flex";
                document.querySelector(`.${styles.user_interaction_container}`).style.display = "block";
                setVisibleMenu(true);
            } else 
            
            if(document.querySelector(`.${styles.blur}`).contains(e.target)) {
                document.querySelector(`.${styles.blur}`).style.display = "none";
                document.querySelector(`.${styles.hidden_menu}`).style.display = "none";
                document.querySelector(`.${styles.additional_content}`).style.display = "none";
                document.querySelector(`.${styles.link_container}`).style.display = "none";
                document.querySelector(`.${styles.user_interaction_container}`).style.display = "none";
                setVisibleMenu(false);
            }
        })
    }, [])

    useEffect(() => {
        const mediaMatch = window.matchMedia("(max-width: 40rem)");
        mediaMatch.addListener((e) => {
            if(e.matches) {
                if(visibleMenu) {
                    document.querySelector(`.${styles.additional_content}`).style.display = "inline-block";
                    document.querySelector(`.${styles.link_container}`).style.display = "flex";
                    document.querySelector(`.${styles.user_interaction_container}`).style.display = "block";
                } else {
                    document.querySelector(`.${styles.additional_content}`).style.display = "none";
                    document.querySelector(`.${styles.link_container}`).style.display = "none";
                    document.querySelector(`.${styles.user_interaction_container}`).style.display = "none";
                }
            } else {
                document.querySelector(`.${styles.additional_content}`).style.display = "flex";
                document.querySelector(`.${styles.link_container}`).style.display = "flex";
                document.querySelector(`.${styles.user_interaction_container}`).style.display = "block";
            }
        });
    }, [visibleMenu])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.hidden_menu}></div>
                <div className={styles.blur}></div>
                <div className={styles.additional_content_container}>
                    <div className={styles.additional_content}>
                        <a href="https://www.google.com/">SIGN IN</a>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <img src={logo} alt="Logo" width="120px" height="45px" className={styles.image_container}></img>
                    <div className={`${styles.link_container} ${styles.list}`}>
                        <Link to="/home">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className={`${styles.user_interaction_container} ${styles.list}`}>
                        <a href="https://www.google.com/">
                            <img src={search} alt="Search" width="16px" height="16px"></img>
                        </a>
                        <a href="https://www.google.com/">
                            <img src={heart} alt="Liked" width="16px" height="16px"></img>
                        </a>
                        <a href="https://www.google.com/">
                            <img src={cart} alt="Cart" width="16px" height="16px"></img>
                        </a>
                    </div>
                    <div ref={menuButton} className={styles.button_menu}>
                        <img src={menu} alt="Menu" width="20px" height="20px"></img>
                    </div>
                </nav>
            </div>
            <Outlet/>
        </>
    )
}

export default NavBar