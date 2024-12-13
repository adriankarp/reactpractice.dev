# React Challenges

This repository contains solutions to React challenges from [React Practice](https://reactpractice.dev). Each challenge is implemented as a separate page in this React project, allowing you to view and interact with the solutions directly.

## Project Structure

The project follows this structure:

```
react-challenges/
├── public/                # Static files
├── src/
│   ├── challenges/        # Individual challenge components
│   │   ├── Challenge1.js
│   │   ├── Challenge2.js
│   │   └── ...
│   ├── components/        # Shared components (if any)
│   ├── pages/             # Main page and additional pages
│   │   └── MainPage.js
│   ├── App.js             # Main application component with routing
│   ├── index.js           # React entry point
│   └── ...
├── package.json           # Project dependencies
└── README.md              # Project information
```

## Features

- **Main page**: A list of all implemented challenges with navigation links.
- **Interactive challenges**: Each challenge is a standalone page.
- **Routing**: Easily navigate between challenges using React Router.
- **Customizable**: Add new challenges or modify existing ones as needed.

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-challenges.git
   cd react-challenges
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Run the Project

Start the development server:

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000/`.

### Adding a New Challenge

1. Create a new file in the `src/challenges/` directory, e.g., `Challenge3.js`.
2. Implement the solution in the new file.
3. Import the component and add a route in `App.js`:

   ```javascript
   import Challenge3 from "./challenges/Challenge3";

   <Route path="/challenge3" element={<Challenge3 />} />;
   ```

4. Add the challenge to the main page (`src/pages/MainPage.js`):
   ```javascript
   <li>
     <Link to="/challenge3">Challenge 3</Link>
   </li>
   ```

### Main Page

The main page (`MainPage.js`) displays a list of all implemented challenges with navigation links. It serves as the landing page of the application.

Example:

```javascript
import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>React Challenges</h1>
      <ul>
        <li>
          <Link to="/challenge1">Challenge 1</Link>
        </li>
        <li>
          <Link to="/challenge2">Challenge 2</Link>
        </li>
        {/* Add more links as you implement new challenges */}
      </ul>
    </div>
  );
};

export default MainPage;
```

### Deploying

To deploy the app (e.g., to GitHub Pages):

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to your hosting service.

## Contributing

Feel free to fork this repository and submit pull requests if you have improvements or additional challenges to add.

## Resources

- [React Practice](https://reactpractice.dev)
- [React Documentation](https://reactjs.org/docs/)
- [React Router Documentation](https://reactrouter.com/en/main)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
