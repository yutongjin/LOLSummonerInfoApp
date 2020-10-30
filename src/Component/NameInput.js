import React from "react";
import Input from "@bit/semantic-org.semantic-ui-react.input";

const style = (
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
  />
);

export default function NameInput(props) {
  return (
    <div>
      {style}
      <Input
        onChange={(event) => props.onChange(event)}
/*        loading
        icon="user"*/
        placeholder="Search..."
      />
    </div>
  );
}
