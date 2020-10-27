import { useEffect } from 'react';
import useMedia from './useMedia';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('');
    const prefersDarkMode = usePrefersDarkMode();

    const enabled =
        typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

    useEffect(
        () => {
            const className = 'dark-mode';
            const elementBody = window.document.body;

            const element = document.getElementById('root')
            if (element) {
                enabled ?
                    elementBody.classList.add(className) :
                    elementBody.classList.remove(className);

                if (element.children) {
                    for (let i = 0; i < element.children.length; i++) {
                        for (let a = 0; a < element.children[i].children.length; a++) {
                            //  console.log('element', element.children[i].children[a])
                            if (enabled) {
                                //    console.log('is enabled', enabled)
                                element.children[i].children[a].classList.add(className);
                            } else {
                                element.children[i].children[a].classList.remove(className);
                            }
                        }
                    }
                }

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