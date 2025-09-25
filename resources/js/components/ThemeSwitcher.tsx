// resources/js/components/ThemeSwitcher.tsx

import { themes, useAppearance } from '@/hooks/use-appearance';
import React from 'react';

export default function ThemeSwitcher() {
    const { appearance, updateAppearance } = useAppearance();

    return (
        <div className="flex items-center gap-2 p-1 rounded-full border border-border/20 bg-background">
            {/* Map over the themes array to create buttons */}
            {themes.map((theme) => (
                <button
                    key={theme}
                    onClick={() => updateAppearance(theme)}
                    className={`px-3 py-1 text-sm rounded-full capitalize ${
                        appearance === theme
                            ? 'bg-foreground text-background'
                            : 'hover:bg-border/10'
                    }`}
                >
                    {theme}
                </button>
            ))}
        </div>
    );
}