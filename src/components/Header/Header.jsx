import styles from './Header.module.css';
import SelectUser from "../../SelectUser/SelectUser.jsx";

const Header = () => {

    return (
        <>
            <img className={styles.logo} src="/logo.svg" alt="logo" />
            <SelectUser />
        </>
    );
}

export default Header;
