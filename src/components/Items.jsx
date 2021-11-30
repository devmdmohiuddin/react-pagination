import React from "react"
import styles from './Items.module.css'

const Items = ({ currentItems }) => {
  return (
    <>
    <ul className={styles.itemsSection}>
      {currentItems &&
        currentItems.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <h1>{item.id}</h1>
            {/* <p>{item.title}</p> */}
          </li>
        ))}
    </ul>
    </>
  )
}

export default Items
