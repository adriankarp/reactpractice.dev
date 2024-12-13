# React Challenges

This repository contains solutions to React challenges from [React Practice](https://reactpractice.dev). Each challenge is implemented as a separate page in this React project, allowing you to view and interact with the solutions directly.

## Project Structure

The project follows this structure:

```
reactpractice.dev/
├── app/                   # Core application files
│   ├── components/        # Shared components for the app
│   │   ├── challenge-layout.tsx # Layout component for challenges
│   ├── routes/                # Route definitions and structure
│   │   ├── home.tsx           # Home page component
│   │   ├── challenge1.tsx     # Challenge 1 route
│   ├── solutions/             # Individual challenge solutions
│   │   ├── solution1.tsx      # Solution for Challenge 1
│   ├── routes.ts          # Route definitions
├── public/                # Static assets
├── package.json           # Project dependencies
```

## Features

- **Main page**: A home page (`home.tsx`) with links to challenges.
- **Interactive challenges**: Each challenge is a standalone component.
- **Reusable components**: Shared components like layouts are available in the `components/` directory.
- **Routing**: Implemented using React Router, with routes defined in `routes.ts`.
- **Customizable**: Easily add new challenges, routes, or components.
- **Styling**: Tailwind CSS is configured for responsive and consistent styling.
- **Scalable structure**: Supports adding more challenges and shared components.

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/reactpractice.dev.git
   cd reactpractice.dev
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
npm run dev
# or
yarn dev
```

The app will be available at the local URL printed in the terminal (e.g., `http://localhost:5173`).

### Adding a New Challenge

1. Create a new solution file in the `solutions/` directory, e.g., `solution2.tsx`.
2. Create a corresponding route file in the `routes/` directory, e.g., `challenge2.tsx`.
3. Define the route in `routes.ts`:
   ```typescript
   {
     path: '/challenge-2',
     file: 'routes/challenge2.tsx',
   }
   ```
4. Add a navigation link in `home.tsx`:
   ```tsx
   <li>
     <Link to="/challenge-2">Challenge 2</Link>
   </li>
   ```
5. Use the `ChallengeLayout` component if applicable to maintain consistency.

### Main Page

The main page (`home.tsx`) serves as the entry point and displays a list of links to all implemented challenges. Each challenge is displayed as a visually appealing card-style link.

### Deploying

To deploy the app (e.g., to GitHub Pages):

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to your hosting service.

## Contributing

Feel free to fork this repository and submit pull requests if you have improvements or additional challenges to add.

## Resources

- [React Practice](https://reactpractice.dev)
- [React Documentation](https://reactjs.org/docs/)
- [React Router Documentation](https://reactrouter.com/en/main)
- [Vite Documentation](https://vitejs.dev/)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.
