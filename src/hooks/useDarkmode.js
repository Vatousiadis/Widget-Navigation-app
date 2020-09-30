import { useEffect } from 'react';
import useMedia from './useMedia';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');
    const prefersDarkMode = usePrefersDarkMode();

    const enabled =
        typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

    useEffect(
        () => {
            const className = 'dark-mode';
            const element = window.document.body;
            if (enabled) {
                element.classList.add(className);
            } else {
                element.classList.remove(className);
            }
        },
        [enabled]
    );
    return [enabled, setEnabledState];
}

const usePrefersDarkMode = () => {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

export default useDarkMode;