'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

const choices = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="inline-flex gap-1 rounded-xl border bg-card p-1" aria-label="Colour theme">
      {choices.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          title={label}
          aria-label={label + ' theme'}
          aria-pressed={mounted && theme === value}
          onClick={() => setTheme(value)}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring ${mounted && theme === value ? 'bg-primary text-primary-foreground hover:bg-primary' : 'text-muted-foreground'}`}
        >
          <Icon size={16} aria-hidden="true" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
