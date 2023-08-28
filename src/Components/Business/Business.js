import React from "react";
import styles from "./Business.css";

function Business({ business }) {

    return (
        <div className={styles.Business}>
            <div className={styles.imageContainer}>
                <img src={business.imageSrc} alt={business.name} />
            </div>
            <h2>{business.name}</h2>
            <div className={styles.businessInformation}>
                <div className={styles.businessAddress}>
                    <p>{business.address}</p>
                    <p>{`${business.city}, ${business.state}, ${business.zipCode}`}</p>
                </div>
                <div className={styles.businessReviews}>
                    <h3>{business.category}</h3>
                    <h3 className={styles.rating}>{business.rating}</h3>
                    <p>{business.reviewCount}</p>
                </div>
            </div>        
        </div>
    );
}

export default Business;