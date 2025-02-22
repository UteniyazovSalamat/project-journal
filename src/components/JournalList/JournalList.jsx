import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import styles from './JournalList.module.css';
import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";

const JournalList = ({ items }) => {
    const {userId} = useContext(UserContext);

    return (
        <div className={styles['journal-list']}>
            {items.length === 0 ? (
                <p>Записей пока нет, добавьте прервую</p>
            ) : (
                items
                    .filter(el => el.userId === userId)
                    .sort((a, b) => b.date - a.date)
                    .map((el) => (
                        <CardButton key={el.id}>
                            <JournalItem title={el.title} post={el.post} date={el.date} />
                        </CardButton>
                    ))
            )}
        </div>
    );
};

export default JournalList;
