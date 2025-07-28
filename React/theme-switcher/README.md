# React Theme Switcher with Context API

- Created a Context using createContext() to hold shared theme data (light or dark).
- ThemeProvider component to: Store theme state using useState. Provide a toggleTheme function to switch themes. Wrap children with ThemeContext.Provider 
- Wrapped entire app in the ThemeProvider to allow any component in the app tree to access the context.
- useContext(ThemeContext) inside components to access the current theme and trigger theme switching via toggleTheme().
- conditional className logic in JSX to apply styles based on theme


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
