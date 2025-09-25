// resources/js/hooks/use-appearance.ts

import { useCallback, useEffect, useState } from 'react';

// 1. Define your available themes
export const themes = ['light', 'dark', 'synthwave', 'forest'] as const;
export type Theme = (typeof themes)[number] | 'system';

const prefersDark = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') return;
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

// 2. Modify applyTheme to set the data-theme attribute
const applyTheme = (theme: Theme) => {
    let themeToApply: (typeof themes)[number];

    if (theme === 'system') {
        themeToApply = prefersDark() ? 'dark' : 'light';
    } else {
        themeToApply = theme;
    }

    // Remove the old dark class if it exists
    document.documentElement.classList.remove('dark');
    // Set the new theme attribute
    document.documentElement.setAttribute('data-theme', themeToApply);
};

// ... (mediaQuery and handleSystemThemeChange functions remain the same) ...
const mediaQuery = () => {
    if (typeof window === 'undefined') return null;
    return window.matchMedia('(prefers-color-scheme: dark)');
};

const handleSystemThemeChange = () => {
    const currentAppearance = localStorage.getItem('appearance') as Theme;
    applyTheme(currentAppearance || 'system');
};


export function initializeTheme() {
    const savedAppearance = (localStorage.getItem('appearance') as Theme) || 'system';
    applyTheme(savedAppearance);
    mediaQuery()?.addEventListener('change', handleSystemThemeChange);
}

export function useAppearance() {
    // 3. Update the type for useState
    const [appearance, setAppearance] = useState<Theme>('system');

    const updateAppearance = useCallback((mode: Theme) => {
        setAppearance(mode);
        localStorage.setItem('appearance', mode);
        setCookie('appearance', mode);
        applyTheme(mode);
    }, []);

    useEffect(() => {
        const savedAppearance = localStorage.getItem('appearance') as Theme | null;
        updateAppearance(savedAppearance || 'system');
        return () => mediaQuery()?.removeEventListener('change', handleSystemThemeChange);
    }, [updateAppearance]);

    return { appearance, updateAppearance } as const;
}