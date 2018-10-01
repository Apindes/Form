import React from "react";
import ReactDom from "react-dom";


const Form = () =>{
    return (
        <form >
            <input type="text" name="email" />
            <input type={"submit"} value={"Send"} />
        </form>

    );
};

export default Form;
ReactDom.render(<Form />,document.getElementById('app'));