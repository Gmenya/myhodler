import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { routeConfig } from "./routeConfig"

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {Object.values(routeConfig).map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Routes>
    </Router>
  )
}
