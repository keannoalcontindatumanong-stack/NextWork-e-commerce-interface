'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const STORAGE_KEY = 'kenai-theme'

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
}: {
  children: React.ReactNode
  defaultTheme?: Theme
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)

  // Sync initial state with whatever the pre-hydration script applied.
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setThemeState(isDark ? 'dark' : 'light')
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    applyTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore write errors (private mode, etc.) */
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}

/** Inline script string that applies the stored theme before paint (no FOUC). */
export const themeInitScript = `
(function () {
  try {
    var t = localStorage.getItem('${STORAGE_KEY}') || 'dark';
    var d = document.documentElement;
    d.classList.toggle('dark', t === 'dark');
    d.style.colorScheme = t;
  } catch (e) {}
})();
`
