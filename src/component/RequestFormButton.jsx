import React, { useContext } from "react";
import StylesContext from "./StylesContext"


export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <button style={buttonStyling}>Click here!</button>
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}
