import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Memorize } from "./06-memos/Memorize";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCustomHook/> */}
    {/* <SimpleForm/> */}
    {/* <SimpleFormWithCustomHook/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    <Memorize/>
  </StrictMode>
);
