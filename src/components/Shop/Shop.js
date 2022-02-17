import styles from './Shop.module.css'
import downArrow from '../../assets/down_arrow.svg'

import { useRef } from 'react'
import Search from '../Search'
import ShopContent from '../ShopContent'
const Shop = () => {
    const dropDownNode1 = useRef();
    const dropDownNode2 = useRef();
    const currNode = useRef();
    const dropDownContentNode1 = useRef();
    const dropDownContentNode2 = useRef();

    function dropDown(node) {
        if(node.current.classList[0].includes("down")) {
            node.current.classList.remove(node.current.classList[0]);
            node.current.classList.add(styles.sideArrow);
        } else if(node.current.classList[0].includes("side")) {
            node.current.classList.remove(node.current.classList[0]);
            node.current.classList.add(styles.downArrow);
        }

        if(currNode.current === 1) {
            if(dropDownContentNode1.current.classList[0] !== undefined) {
                dropDownContentNode1.current.classList.remove(dropDownContentNode1.current.classList[0]);
            } else {
                dropDownContentNode1.current.classList.add(styles.hide_list);
            }
        } else if(currNode.current === 2) {
            if(dropDownContentNode2.current.classList[0] !== undefined) {
                dropDownContentNode2.current.classList.remove(dropDownContentNode2.current.classList[0]);
            } else {
                dropDownContentNode2.current.classList.add(styles.hide_list);
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.search_param}>
                <Search/>
                <div className={styles.catagory_list}>
                    <div className={styles.catagory_dropper}>
                        <h1>CATAGORIES</h1>
                        <img className={styles.downArrow} ref={dropDownNode1} onClick={() => {currNode.current = 1; dropDown(dropDownNode1)}} src={downArrow} alt="Search" width="16px" height="16px"></img>
                    </div>
                    <ul ref={dropDownContentNode1}>
                        <li>Bags</li>
                        <li>Clothing</li>
                        <li>Shoes</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div className={styles.catagory_list}>
                    <div className={styles.catagory_dropper}>
                        <h1>FILTER PRICE</h1>
                        <img className={styles.downArrow} ref={dropDownNode2} onClick={() => {currNode.current = 2; dropDown(dropDownNode2)}} src={downArrow} alt="Search" width="16px" height="16px"></img>
                    </div>
                    <ul ref={dropDownContentNode2}>
                        <li>$0.00 - $50.00</li>
                        <li>$50.00 - $100.00</li>
                        <li>$100.00 &gt;</li>
                    </ul>
                </div>
            </div>
            <div className={styles.search_res}>
                <ShopContent searchField={"K"}/>
            </div>
        </div>
    )
}

export default Shop