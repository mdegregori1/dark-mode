import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage(darkMode, value);
    if (darkMode === false){
        document.body.classList.add('dark-mode');
    }
    else {
        document.body.classList.remove('dark-mode');
    }


    return [darkMode, setDarkMode];
    //review here

}


