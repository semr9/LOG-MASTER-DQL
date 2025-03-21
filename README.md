# LOG-MASTER-DQL

A Dynatrace application for learning and testing DQL (Dynatrace Query Language) skills. This application provides an interactive environment where users can practice DQL queries and verify their syntax.

## Features

- Interactive DQL query editor
- Real-time syntax verification
- Multiple practice questions
- Immediate feedback on query validity

## Prerequisites

- Node.js (Latest LTS version recommended)
- Access to a Dynatrace environment
- Dynatrace API token with appropriate permissions

## Setup

1. Clone the repository:
```bash
git clone [your-repository-url]
cd LOG-MASTER-DQL
```

2. Install dependencies:
```bash
npm install
```

3. Configure your Dynatrace environment:
- Create a `.env` file in the root directory
- Add your Dynatrace environment URL and API token

4. Start the development server:
```bash
npm start
```

## Project Structure

- `/src/app/components` - React components
- `/src/app/pages` - Page components
- `/api` - Backend API functions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Getting Started with your Dynatrace App

This project was bootstrapped with Dynatrace App Toolkit.

It uses React in combination with TypeScript, to provide great developer experience.

## Available Scripts

In the project directory, you can run:

### `npm run start` or `yarn start`

Runs the app in the development mode. A new browser window with your running app will be automatically opened.

Edit a component file in `src` and save it. The page will reload when you make changes. You may also see any errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder. It correctly bundles your app in production mode and optimizes the build for the best performance.

### `npm run deploy` or `yarn deploy`

Builds the app and deploys it to the specified environment in `app.config.json`.

### `npm run uninstall` or `yarn uninstall`

Uninstalls the app from the specified environment in `app.config.json`.

### `npm run generate:function` or `yarn generate:function`

Generates a new serverless function for your app in the `api` folder.

### `npm run update` or `yarn update`

Updates @dynatrace-scoped packages to the latest version and applies automatic migrations.

### `npm run info` or `yarn info`

Outputs the CLI and environment information.

### `npm run help` or `yarn run help`

Outputs help for the Dynatrace App Toolkit.

## Learn more

You can find more information on how to use all the features of the new Dynatrace Platform in [Dynatrace Developer](https://dt-url.net/developers).

To learn React, check out the [React documentation](https://reactjs.org/).
