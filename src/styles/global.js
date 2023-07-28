import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: "Poppins";
    }

    body{
        width: 100vw;
        height: 100vh;
        color: var(--white);
        background-color: var(--black);
    }

    button, input[type="submit"], input[type="reset"] {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        border-radius: 4px;
    }
    

    :root {
        --white: #F1F1F1;
        --black: #090909;
        --yellow: #EDB647;
    }
    
    `