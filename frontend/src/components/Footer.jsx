import React from "react";

var date = new Date();
var year = date.getFullYear();
function Footer(){

return(
    <footer>
        <p>A project made my Kushagra Malviya @
            {year}
        </p>
    </footer>
)

}

export default Footer;