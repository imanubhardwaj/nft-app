# NFT App
Platform for buying/selling of crypto 

## Overview

## Setup
- Install NodeJS (v16 is recommended)

## Environment Configuration
- Run `cp .env.example .env`
- Update desired env values

## Getting Started
- Run the development server: `npm run start`
- Open [localhost:3000](http://localhost:3000) with your browser to see the result

## API Communication

- `axios` is used to make API calls, response is mocked for now
- React Query is used as a wrapper on top of axios for better management of data and request state

## UI Kit & Styling

### Tailwind

[Tailwind css](https://tailwindcss.com/) is used for styling.

### Material UI

Material UI components like Button, Dialog, etc are used. One important point to note here is that
components should not be imported directly from `@mui/material` instead import the component itself like
`@mui/material/Button`. The same goes for material icons as well.

## Required environmental variables

- `REACT_APP_ENV` - local|alpha|prod
