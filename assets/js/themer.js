const setValue = (property, value) => {
    if (value) {
        document.documentElement.style.setProperty(`--${property}`, value);

        const input = document.querySelector(`#${property}`);
        if (input) {
            value = value.replace('px', '');
            input.value = value;
        }
    }
};

const setValueFromLocalStorage = (property, defaultValue = null) => {
    let value = localStorage.getItem(property) || defaultValue;
    setValue(property, value);
};

const setTheme = options => {
    for (let option of Object.keys(options)) {
        const property = option;
        const value = options[option];

        if (value !== undefined) {
            setValue(property, value);
            localStorage.setItem(property, value);
        } else {
            localStorage.removeItem(property);
            document.documentElement.style.removeProperty(`--${property}`);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setValueFromLocalStorage('color-background', '#F8F6F1');
    setValueFromLocalStorage('color-text-pri', '#4C432E');
    setValueFromLocalStorage('color-text-acc', '#AA9A73');

    setValueFromLocalStorage('image-background');
});

const dataThemeButtons = document.querySelectorAll('[data-theme]');

for (let i = 0; i < dataThemeButtons.length; i++) {
    dataThemeButtons[i].addEventListener('click', () => {
        const theme = dataThemeButtons[i].dataset.theme;

        switch (theme) {                
            case 'blackboard':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#1a1a1a',
                    'color-text-pri': '#FFFDEA',
                    'color-text-acc': '#5c5c5c'
                });
                return;

            case 'gazette':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#F2F7FF',
                    'color-text-pri': '#000000',
                    'color-text-acc': '#5c5c5c'
                });
                return;

            case 'espresso':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#21211F',
                    'color-text-pri': '#D1B59A',
                    'color-text-acc': '#4E4E4E'
                });
                return;

            case 'cab':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#F6D305',
                    'color-text-pri': '#1F1F1F',
                    'color-text-acc': '#424242'
                });
                return;

            case 'cloud':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#f1f2f0',
                    'color-text-pri': '#35342f',
                    'color-text-acc': '#37bbe4'
                });
                return;

            case 'lime':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#263238',
                    'color-text-pri': '#AABBC3',
                    'color-text-acc': '#aeea00'
                });
                return;

            case 'white':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#ffffff',
                    'color-text-pri': '#222222',
                    'color-text-acc': '#dddddd'
                });
                return;

            case 'tron':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#242B33',
                    'color-text-pri': '#EFFBFF',
                    'color-text-acc': '#6EE2FF'
                });
                return;
            
            case 'blues':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#2B2C56',
                    'color-text-pri': '#EFF1FC',
                    'color-text-acc': '#6677EB'
                });
                return;
            
            case 'passion':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#f5f5f5',
                    'color-text-pri': '#12005e',
                    'color-text-acc': '#8e24aa'
                });
                return;
            
            case 'chalk':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#263238',
                    'color-text-pri': '#AABBC3',
                    'color-text-acc': '#FF869A'
                });
                return;
            
            case 'paper':
                setTheme({
                    'image-background': undefined,
                    'color-background': '#F8F6F1',
                    'color-text-pri': '#4C432E',
                    'color-text-acc': '#AA9A73'
                });
                return;
            case 'chiyochichi':
                setTheme({
                    'image-background': 'url(/assets/img/neko_background.png)',
                    'color-background': 'pink',
                    'color-text-pri': '#af616a',
                    'color-text-acc': '#898b90'
                });
                return;

        }
    })
}