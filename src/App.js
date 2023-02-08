import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './app.css'

import Header from "./header";
import MajorTarot from "./MajorTarot";
import AppSelect from "./AppSelect";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppSelect />,
  },
  {
    path: '/major-tarot',
    element: <MajorTarot />
  }
])


function App() {
  const outerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    colour: 'lightgrey',
  }
  return (
    <div style={outerStyle}>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
