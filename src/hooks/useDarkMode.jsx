import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage(initialValue);
    if (value === true){
        document.body.classList.add('dark-mode');
    }
    else {
        document.body.classList.remove('dark-mode');
    }


    return [value, setValue];
}
