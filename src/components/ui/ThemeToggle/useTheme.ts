import { useEffect, useState } from "react";

export default function useTheme() {
    const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));

    const switchTheme = () => {
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        setIsDarkMode(!isDarkMode);
        window.dispatchEvent(new Event('themechange'));
    }

    useEffect(() => {
        const sync = () => setIsDarkMode(
            document.documentElement.classList.contains('dark')
        );
        window.addEventListener('themechange', sync);
        return () => window.removeEventListener('themechange', sync);
    }, []);

    return {
        isDarkMode, switchTheme
    }
}