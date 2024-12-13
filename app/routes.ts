import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "/challenge-1", file: "routes/challenge1.tsx" },
] satisfies RouteConfig;
