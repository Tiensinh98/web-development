import React from "react";

function Heading() {
    return (
    <h1 className='heading' contentEditable="true" spellCheck="true" style={customStyle}>
        Hello {`${fName} ${lName}`}
    </h1>);
}

export default Heading;