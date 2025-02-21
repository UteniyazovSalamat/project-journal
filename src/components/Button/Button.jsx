import styles from './Button.module.css';

const Button = ({ text, onClick }) => {
    return (
        <button className={`${styles.btn} ${styles.accent}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
