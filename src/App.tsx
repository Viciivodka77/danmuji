import { useRef } from "react";
// import { getEncodeHeader } from "@/utils/request";
import "./App.css";
import {invoke} from "@tauri-apps/api/core";

function App() {
  const appKeyInputRef = useRef(null);
  const appSecretInputRef = useRef(null);

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  const onRequestClick = async (event: MouseEvent) => {
    event.preventDefault();

    // const headers = getEncodeHeader(
    //     {},
    //   appKeyInputRef.current.value,
    //   appSecretInputRef.current.value
    // );


      const headers = await invoke("getEncodeHeader", {
          params: {},
          appKey: appKeyInputRef.current.value ?? '',
          appSecret: appSecretInputRef.current.value ?? ''
      });
      console.log("headers = ", headers);

    // const res = await fetch(
    //   "https://member.bilibili.com/arcopen/fn/live/room/info",
    //   {
    //     method: "POST",
    //     headers: {
    //       ...headers
    //     },
    //   }
    // );
    // const data = await res.json();
    // console.log("response data", data);
  };

  return (
    <main className="container bg-blueGray">
      <h2>Bilibili 弹幕姬</h2>
      <p>base on Tarui + Vite + React</p>

      <div>
        <div>
          <label>appKey</label>
          <input ref={appKeyInputRef} />
        </div>
        <div>
          <label>appSecret</label>
          <input ref={appSecretInputRef} />
        </div>
        <div>
          <button onClick={onRequestClick}>请求鉴权API</button>
        </div>
      </div>
    </main>
  );
}

export default App;
