README
Overview

This project is built using React with Vite. It is a single-page application structured into reusable components for better organization and maintainability.

Project Structure
src/

The main source folder contains all the application code.

components/

This folder contains all JSX components used across the application.

Components are modular and organized for clarity.
Each folder that contains JSX components also includes a styles/ subfolder, which holds the corresponding CSS files.
components/Modal/
Contains components related to product modals (e.g., product detail views).
The product menus are structured similarly to the main components but are specific to modal views.
context/
Holds all global state management logic using React Context.
These contexts are wrapped around the main application inside main.jsx.
utility/

Contains helper scripts used throughout the app:

Scrolling.js – handles scrolling animations.
Translations.js – manages translations for different languages.
assets/

Stores all image assets used in the project:

Page/ – images displayed on the main page.
Modal/ – images used in product descriptions inside modals.
Entry Points
App.jsx – main application component.
main.jsx – application entry point where the app is rendered and wrapped with context providers.
Notes
The app follows a component-based architecture for scalability.
Styling is organized per component to keep styles modular and maintainable.
Utilities and contexts are separated for cleaner logic and easier updates.