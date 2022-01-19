import React from "react";
import Editor from "./Editor";
export default function App() {
  return (
    <>
      <Editor data="" onChange={(e) => console.log(e, "final Return")} />
    </>
  );
}
