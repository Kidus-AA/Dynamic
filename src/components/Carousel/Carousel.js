import styles from './Carousel.module.css'
import fPage from '../../assets/fPage.png'
import sPage from '../../assets/sPage.png'
import rightArrow from '../../assets/right_arrow.svg'

import { useRef, useEffect } from 'react'
import Button from '../Button'

const Carousel = () => {
    const carouselPage = useRef(0);
    const carouselNode = useRef();
    const infoContainerNode = useRef();
    const h3Node = useRef();
    const h1Node = useRef();
    const h5Node = useRef();

    useEffect(() => {
        infoContainerNode.current.addEventListener('animationend', () => {
            infoContainerNode.current.classList.remove(infoContainerNode.current.classList[1]);
        })

        carouselNode.current.addEventListener('animationend', () => {
            carouselNode.current.classList.remove(carouselNode.current.classList[1]);
        })
    }, [])

    const carouselPageInfo = [
        {
            title: "SUMMER COLLECTION",
            collection: "Fall-Winter Collection",
            description: "Molestias ex facilis repudiandae, officia alias pariatur quibusdam inventore reprehenderit odit cumque ducimus!",
            image: `no-repeat url(${fPage}) top 10px left 550px/600px`
        }, 
        {
            title: "WINTER COLLECTION",
            collection: "Winter-Spring Collection",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quisquam reiciendis repellendus, minus eaque blanditiis perferendis vitae?",
            image: `no-repeat url(${sPage}) top 100px left 650px/600px`
        }
    ]

    function rightSwipe() {
        if(carouselPage.current === carouselPageInfo.length - 1) {
            carouselPage.current = 0;
        } else {
            carouselPage.current = carouselPage.current + 1;
        }
        infoContainerNode.current.classList.add(styles.fade_in_sideway_information_rl);      
        carouselNode.current.classList.add(styles.fade_in); 
        informationLoader();
    }

    function leftSwipe() {
        if(carouselPage.current === 0) {
            carouselPage.current = carouselPageInfo.length - 1;
        } else {
            carouselPage.current = carouselPage.current - 1;
        }
        infoContainerNode.current.classList.add(styles.fade_in_sideway_information_lr);
        carouselNode.current.classList.add(styles.fade_in); 
        informationLoader();
    }

    function informationLoader() {
        let page = carouselPageInfo[carouselPage.current];
        h3Node.current.innerHTML = page.title;
        h1Node.current.innerHTML = page.collection;
        h5Node.current.innerHTML = page.description;
        carouselNode.current.style.background = page.image;
    }

    return (
        <div className={styles.container}>
            <div ref={carouselNode} className={`${styles.carousel_container} ${styles.fade_in_carousel}`} style={{background: carouselPageInfo[carouselPage.current].image}}>
                <div ref={infoContainerNode} className={`${styles.info_container} ${styles.fade_in_information}`}>
                    <h3 ref={h3Node} className={styles.h3}>{carouselPageInfo[carouselPage.current].title}</h3>
                    <h1 ref={h1Node} className={styles.h1}>{carouselPageInfo[carouselPage.current].collection}</h1>
                    <h5 ref={h5Node} className={styles.h5}>{carouselPageInfo[carouselPage.current].description}</h5>
                    <Button className={styles.fade_in_delayed}/>
                </div>
                <div className={`${styles.rightArrow} ${styles.arrows}`} onClick={rightSwipe}>
                    <img src={rightArrow} alt="Right Arrow"></img>
                </div>
                <div className={`${styles.leftArrow} ${styles.arrows}`} onClick={leftSwipe}>
                    <img src={rightArrow} alt="Left Arrow"></img>
                </div>
            </div>
        </div>
    )
}

export default Carousel