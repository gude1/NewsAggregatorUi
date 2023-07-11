# Docker Compose Instructions
This respository is a vite react web application that users can login into to read news from credible sources across the world. This Frontend app consumes the endpoints of <a href="https://github.com/gude1/NewsAggergatorApi">NewsAggregatorApi</a>

## Table of Contents
* [Features](#Features)
* [Configuration](#Configuration and setup)
* [Tech Stack](#Tech%Stack)

## Features
<li>BootSplash Page</li>
<li> Signup, SignIn Page</li>
<li>News List Page</li>
<li>Search News Page</li>
<li>Profile & Log out page</li>

## Configuration and setup
<h2>Ensure that you have properly setup docker on your local machine</h2>
<li>git clone the repo</li>
<li>cd into the root project dir </li>

```bash
docker compose up --build
```
Laravel app should be available on http://127.0.0.1:8100/

## Tech Stack
Vite React, Tailwindcss, Typescript

