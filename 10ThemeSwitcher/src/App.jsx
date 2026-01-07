import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/theme'
import './App.css'
import ThemeBtn from './components/themeButton'
import Card from './components/card'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => setThemeMode('light')
  const darkTheme = () => setThemeMode('dark')

  // actual change in theme
  useEffect(() => {
    const html = document.querySelector('html')
    if (!html) return
    html.classList.remove('light', 'dark')
    html.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
  <div className="min-h-screen w-full bg-white dark:bg-gray-900 flex items-center justify-center px-4 py-6 overflow-hidden">
        <div className="w-full max-w-xs sm:max-w-sm">
          <div className="flex justify-center mb-4">
            <ThemeBtn />
          </div>

          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
