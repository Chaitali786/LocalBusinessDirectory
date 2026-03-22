import BusinessCard from "../BusinessCard/index";

import styles from "./maincardcontainer.module.css";
const MainCardContainer = ({ businessList }) => {
  return (
    <div>
      <div className={styles.container}>
        {businessList.map((item) => (
          <BusinessCard key={item.id} business={item} />
        ))}
      </div>
    </div>
  );
};

export default MainCardContainer;
