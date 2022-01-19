import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import config from "./Config";
export default function App() {
  return (
    <>
      <Editor
        id="pageEditor"
        apiKey="no-api-key"
        initialValue="<p>Start Writing your Story...</p>"
        onEditorChange={(newText) => console.log(newText, "new Text")}
        init={config}
      />
    </>
  );
}
