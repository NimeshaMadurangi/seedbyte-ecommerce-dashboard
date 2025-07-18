// main.jsx or App.jsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ProductProvider } from "./context/ProductContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
)
