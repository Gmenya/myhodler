import ReactDOM from "react-dom/client"

import { App } from "@/app/App"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main
    className="flex flex-col max-w-[1024px] w-full my-0 mx-auto h-screen
               s:p-1 sm:p-4 md:p-8 lg:py-10 lg:px-10 overflow-y-hidden"
  >
    <App />
  </main>,
)
