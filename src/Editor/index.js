import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import config from "./Config";
export default function TinyEditor({ data, onChange }) {
  const [initialValue, setInitialValue] = useState(
    data || "<p>Start Typing...</p>"
  );

  function updateValue(value) {
    setInitialValue(value);
    onChange(value);
  }

  return (
    <>
      <Editor
        id="pageEditor"
        apiKey="no-api-key"
        initialValue={initialValue}
        onEditorChange={(newText) => updateValue(newText)}
        init={config}
      />
    </>
  );
}
