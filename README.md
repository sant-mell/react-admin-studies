# react-admin-studies

**Status: work in progress.** This is a practice repo for learning [react-admin](https://marmelab.com/react-admin/), working through the standard tutorial (JSONPlaceholder resources, a custom auth provider) with Material UI and TypeScript.

It's preparation for the TC2007B (Tec de Monterrey) "Agilizando la empresa con sistemas seguros" course challenge, which requires building a secure web + mobile app for a *socio formador* (partner organization). The partner for this semester (Ago-Dic 2026) has not been confirmed yet, but is expected to be a Mexican federal agency, likely the Secretaría de Economía or the Secretaría de Salud.

## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## Production

Build the application in production mode by running:

```sh
npm run build
```

## DataProvider

The included data provider use [ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server). It fits REST APIs powered by [JSON Server](https://github.com/typicode/json-server), such as [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

You'll find an `.env` file at the project root that includes a `VITE_JSON_SERVER_URL` variable. Set it to the URL of your backend. By default, we set it to targets [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

