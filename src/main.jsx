import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Task2, Task1, Task3, Task4 } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Task2 />
    <Task1 />
    <Task4 />
    <Task3 />
  </StrictMode>
);
