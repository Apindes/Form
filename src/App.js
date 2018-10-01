import React from "react";
import ReactDom from "react-dom";

const Form = () =>{
    return (
        <form method="post" onsubmit="ga('send', 'event', 'klik_na_formu', 'submit'); return false ;" action="" id="ajaxform" class="form-0">
        <label>Ваше имя</label><br/>
        <input type="hidden" name="city" id="city" value="Киев."/>
        <input type="hidden" name="id" value="896"/>
        <input type="submit" value="Забронировать" class="enabled"/>
        </form>
    );
};

export default Form;
ReactDom.render(<Form />,document.getElementById('app'));