// resources/js/components/ThemeSwitcher.tsx

import { themes, useAppearance } from '@/hooks/use-appearance';
import React, { useState, useRef, useEffect } from 'react';

export default function ThemeSwitcher() {
    const { appearance, updateAppearance } = useAppearance();
    
    // 1. State to manage if the dropdown is open or closed
    const [isOpen, setIsOpen] = useState(false);
    
    // 2. Ref to detect clicks outside the component
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 3. Effect to handle clicks outside the dropdown to close it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        // Add event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleThemeChange = (theme: typeof themes[number]) => {
        updateAppearance(theme);
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* The main button that shows the current theme and toggles the dropdown */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-32 px-3 py-1 text-sm rounded-full capitalize border border-border/20 bg-background hover:bg-border/10"
            >
                {appearance}
                <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* The dropdown menu, conditionally rendered */}
            {isOpen && (
                <div className="absolute right-0 w-32 mt-2 origin-top-right rounded-lg shadow-lg bg-background ring-1 ring-border/20">
                    <div className="py-1">
                        {themes.map((theme) => (
                            <button
                                key={theme}
                                onClick={() => handleThemeChange(theme)}
                                className="w-full px-4 py-2 text-sm text-left capitalize hover:bg-border/10 text-foreground"
                            >
                                {theme}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}