import SelectUser from "../../SelectUser/SelectUser.jsx";
import Button from "../Button/Button.jsx";
import {useState} from "react";
import Logo from "../Logo/Logo.jsx";

const logos = ['/logo.svg', '/vite.svg'];

const Header = () => {
    const [logoIndex, setLogoIndex] = useState(0);
    console.log('Header');

    const goggleLogo = () => {
        setLogoIndex(state => Number(!state));
    }

    return (
        <>
            <Logo image={logos[logoIndex]} />
            <SelectUser />
            <Button onClick={goggleLogo}>Сменить лого</Button>
        </>
    );
}

export default Header;
