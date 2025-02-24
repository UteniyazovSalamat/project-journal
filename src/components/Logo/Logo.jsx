import styles from "./Logo.module.css";

export const Logo = ({image}) => {
    console.log('Logo');

    return <img className={styles.logo} src={image} alt="logo" />;
};

export default Logo;