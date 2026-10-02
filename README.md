# TodoList

A task management application built with **Angular 22**.

## Live Application

The application is available online:

**https://joseph-bigot.github.io/todo-list/**

## Features

* Create tasks
* Mark tasks as completed
* Delete tasks
* Filter tasks
* Save tasks using `localStorage`
* Dark mode
* Minecraft theme

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/joseph-bigot/todo-list.git
cd todo-list
npm install
```

## Development Server

To start the application locally:

```bash
ng serve
```

Then open:

```text
http://localhost:4200/
```

The application automatically reloads whenever you modify the source files.

## Build

To create a production build:

```bash
ng build
```

The generated files are stored in the `dist/` directory.

## Testing

To run the unit tests:

```bash
ng test
```

To run the tests without watch mode:

```bash
ng test --watch=false
```

## Code Quality

The project uses ESLint to check code quality:

```bash
ng lint
```

## Security

To check for vulnerabilities in project dependencies:

```bash
npm audit
```

## Deployment

The application is deployed on **GitHub Pages** using Angular CLI:

```bash
ng deploy --base-href=/todo-list/
```

## Technologies

* Angular 22
* TypeScript
* HTML
* CSS
* ESLint
* Vitest
* Git / GitHub
* GitHub Pages
* LocalStorage
