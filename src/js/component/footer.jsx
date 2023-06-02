import React from "react";

const Footer = (props) => {
    return (
        <div class="container-fluid bg-dark">
            <footer class="py-3 my-4">
                <p class="text-center text-white">{props.footerText}</p>
            </footer>
        </div>
    )
}

export default Footer;