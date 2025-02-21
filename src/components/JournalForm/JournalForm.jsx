import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';
import Input from '../Input/Input';

const JournalForm = ({ onSubmit }) => {
    const [formState, dispachForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const postRef = useRef();

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.post:
                postRef.current.focus();
                break;
        }
    };

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.post || !isValid.title) {
            focusError(isValid);
            setTimeout(() => {
                dispachForm({ type: 'RESET_VALIDITY' });
            }, 2000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
            dispachForm({ type: 'CLEAR' });
        }
    }, [isFormReadyToSubmit, onSubmit, values]);

    const addJournalItem = (e) => {
        e.preventDefault();
        dispachForm({ type: 'SUBMIT' });
    };

    const onChange = (e) => {
        dispachForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
    };

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div>
                <Input ref={titleRef} value={values.title} isValid={isValid.title} onChange={onChange} type="text" name="title" appearence="title" />
            </div>

            <div className={styles['form-row']}>
                <label htmlFor="date" className={styles['form-label']}>
                    <img src="/calendar.svg" alt="calendar" />
                    <span>Дата</span>
                </label>
                <Input ref={dateRef} isValid={isValid.date} value={values.date} onChange={onChange} id="date" type="date" name="date" />
            </div>

            <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <img src="/folder.svg" alt="folder" />
                    <span>Метки</span>
                </label>

                <Input value={values.tag} onChange={onChange} type="text" id="tag" name="tag" />
            </div>

            <textarea
                ref={postRef}
                value={values.post}
                onChange={onChange}
                name="post"
                cols="30"
                rows="10"
                className={cn(styles.input, {
                    [styles['invalid']]: !isValid.post,
                })}></textarea>

            <Button text="Сохранить" />
        </form>
    );
};

export default JournalForm;
