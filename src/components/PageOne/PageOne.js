import styles from './PageOne.module.css'
import shirt from '../../assets/shirt.png'

import Card from '../Card'
import { useEffect } from 'react'

const PageOne = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.remove("fadeOut");
              } else {
                entry.target.classList.add("fadeOut");
              }
            })
          }, {
            root: document,
            rootMargin: "0px",
          })
          const fadeNodes = document.querySelectorAll(".fadeNode");
          fadeNodes.forEach(node => {
            observer.observe(node);
          })
    }, [])

    return (
        <div className={styles.container}>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Test"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
        </div>
    )
}

export default PageOne