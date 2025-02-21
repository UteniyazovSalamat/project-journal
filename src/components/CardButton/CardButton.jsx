import styles from './CardButton.module.css';

const CardButton = ({ children, className }) => {
    const cl = `${styles['card-btn']}${className ? ' ' + className : ''}`;

    return <button className={cl}>{children}</button>;
};

export default CardButton;
