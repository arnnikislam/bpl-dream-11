# BPL Dream 11

A responsive React application for building a cricket dream team within a credit budget. Browse the available player pool, choose players whose prices fit the budget, and review or remove them from the selected squad.

## Features

- Shows 15 player profiles from a local JSON data source.
- Starts with a **9,999-credit** budget and updates the balance as players are chosen or removed.
- Displays player role, country, rating, batting style, bowling style, price, and photo.
- Separates the **Available** and **Selected** player views.
- Provides toast feedback for successful selections, insufficient credits, and removals.
- Includes responsive navigation and player-card layouts for mobile and desktop screens.

## Built with

- React 19
- Vite 8
- Tailwind CSS 4 and daisyUI
- Axios
- Lucide React
- React Toastify

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+ (recommended for the Vite version used by this project)
- npm

### Installation

```bash
git clone <your-repository-url>
cd BPL-Dream-11
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs ESLint across the project. |

## Project structure

```text
src/
  components/
    Hero/                 # Banner section
    Navbar/               # Navigation and credit balance
    Players/
      AvailablePlayers/   # Player catalogue and selection controls
      SelectedPlayers/    # Selected-squad list and removal controls
  assets/                 # Logos, banner artwork, and UI images
  App.jsx                 # Application state and page composition
  index.css               # Tailwind CSS and daisyUI setup
public/
  playersData.json        # Local player catalogue
```

## How it works

Player data is loaded from `public/playersData.json`. Selecting a player deducts that player's `price` from the shared credit balance; removing a selected player refunds the same amount. The available and selected views share this state through the player-list components.

## Current limitations and suggested improvements

This project is a front-end prototype. The following would make it more complete and dependable:

- Enforce a squad limit of 11 players and role-based rules, if this is intended to mirror Dream 11.
- Move the selection state to one source of truth and prevent duplicates there. At present, a player can be selected again after switching tabs because each card stores its own local `isSelected` state.
- Change the credit check from `coin > price` to `coin >= price` so a player can be chosen when the balance exactly equals the price.
- Wire up the **Claim Free Credit** and **Add More Player** buttons; they currently have no action.
- Make the “Add More Player” button switch back to the available-player view.
- Add routes or remove the Navbar links for Fixture, Teams, and Schedules, which currently point to pages that do not exist.
- Replace externally hosted player images with owned/local assets or dependable image URLs, and add meaningful `alt` text to every player image.
- Add request loading and error states around `playersData.json`; the current Axios request is made when the module loads, so a failed request has no user-facing recovery state.
- Align the player data and currency with the product name: the current catalogue is international rather than BPL-specific and labels prices as USD while the UI calls the balance “coins.”
- Add automated tests for credit calculations, selection/removal, duplicate prevention, and the empty selected-squad state.

## Verification

The current codebase passes:

```bash
npm run lint
npm run build
```

## License

No license has been specified yet. Add a `LICENSE` file before distributing or accepting outside contributions.
