import styles from './Button.module.css';

const Button = ({ children, onClick }) => {
    return (
        <button className={`${styles.btn} ${styles.accent}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
