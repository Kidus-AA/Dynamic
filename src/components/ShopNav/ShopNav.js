import styles from './ShopNav.module.css'

import PageOne from '../PageOne'
import PageTwo from '../PageTwo'
import { useState, useEffect, useRef } from 'react'; 

const ShopNav = () => {
    const slideContainerNode = useRef();
    const fSlide = useRef();
    const sSlide = useRef();
    const displayPage = useRef(0);
    const [displayValue, setDisplayValue] = useState();

    useEffect(() => {
        slideContainerNode.current.addEventListener('animationend', () => {
            slideContainerNode.current.classList.remove(slideContainerNode.current.classList[1]);
        })
    }, [])

    useEffect(() => {
        fSlide.current.addEventListener('click', () => {
            fSlide.current.style.color = "black";
            sSlide.current.style.color = "grey";
            slideContainerNode.current.classList.remove(slideContainerNode.current.classList[1]);
            slideContainerNode.current.classList.add(styles.fade_in);

            displayPage.current = 0;
            display();
        })

        sSlide.current.addEventListener('click', () => {
            fSlide.current.style.color = "grey";
            sSlide.current.style.color = "black";
            slideContainerNode.current.classList.remove(slideContainerNode.current.classList[1]);
            slideContainerNode.current.classList.add(styles.fade_in);

            displayPage.current = 1;
            display();
        })
        
        display();
    }, [])

    function display() {
        if(displayPage.current === 0) {
            setDisplayValue(<PageOne/>)
        } else if(displayPage.current === 1) {
            setDisplayValue(<PageTwo/>)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <span ref={fSlide} id="fId">Best Sellers</span>
                <span ref={sSlide} id="sId">New Arrivals</span>
            </div>
            <div ref={slideContainerNode} className={styles.info_container}>
                {displayValue}
            </div>
        </div>
    )
}

export default ShopNav