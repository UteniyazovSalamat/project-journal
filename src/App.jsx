import styles from './App.module.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import {UserContextProvider} from "./context/user.context.jsx";

function mapItems(items) {
    if (!items) {
        return [];
    }
    return items.map((i) => ({
        ...i,
        date: new Date(i.date),
    }));
}

function App() {
    const [items, setItems] = useLocalStorage('data', []);

    const addItem = (item) => {
        const currentItems = Array.isArray(items) ? items : [];
        setItems([
            ...mapItems(currentItems),
            {
                ...item,
                date: new Date(item.date),
                id: currentItems.length > 0 ? Math.max(...currentItems.map((i) => i.id)) + 1 : 1,
            },
        ]);
    };

    return (
        <UserContextProvider>
            <div className={styles.app}>
                <LeftPanel>
                    <Header />
                    <JournalAddButton />
                    <JournalList items={mapItems(items)} />
                </LeftPanel>

                <Body>
                    <JournalForm onSubmit={addItem} />
                </Body>
            </div>
        </UserContextProvider>
    );
}

export default App;
