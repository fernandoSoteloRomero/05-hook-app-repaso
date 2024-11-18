import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Padre } from "./07-tarea-memo/Padre";
// import { Memorize } from "./06-memos/Memorize";
// import { MemorizeHook } from "./06-memos/MemorizeHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { CallbackHook } from './06-memos/CallbackHook';

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
    {/* <Memorize/> */}
    {/* <MemorizeHook/> */}
    {/* <CallbackHook></CallbackHook> */}
    <Padre/>
  </StrictMode>
);
