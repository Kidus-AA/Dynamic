import styles from './ShopContent.module.css'
import shirt from '../../assets/shirt.png'

import Card from '../Card'
import { useEffect } from 'react'
// default values should be fetched from the database when this component loads
// takes in values passed in as props and sends requests to the database
// fetches the results and puts them in an array and creates cards from those 
// when the next page is clicked it fetches other variables
const ShopContent = (props) => {
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
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
            <Card image={shirt} name={"Shirt"} price={"$49.99"}/>
        </div>
    )
}

export default ShopContent