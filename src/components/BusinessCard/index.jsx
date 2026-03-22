import styles from "./businesscard.module.css";

const BusinessCard = ({ business }) => {
  return (
    <>
      <div className={styles.businesscard}>
        <div className={styles.header}>
          <img
            src={
              business.image ||
              "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600"
            }
            alt={business.name}
            className={styles.businessImg}
          />
          <h3 className={styles.name}>
            {business.name}{" "}
            <span className={styles.category}>{business.category}</span>
          </h3>
        </div>

        <div className={styles.details}>
          <p className={styles.owner}>By {business.owner}</p>
          <p className={styles.area}> {business.area}</p>
        </div>

        <p className={styles.description}>{business.description}</p>
      </div>
    </>
  );
};
export default BusinessCard;
