import styled  from "styled-components";
import background from "./assets/tap-beer.jpg"


export const Hero = styled.section`
    width: 100vw;
    height: 600px;
    margin-top: 108px;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    display: grid; 
    place-items: center;
    div{
        text-align: center;
        color: var(--yellow);
        h1{
            text-shadow: -3px 4px 0px var(--black);
            font-size: 6rem;
            &:hover{
                color: var(--black);
                text-shadow: -3px 4px 0px var(--yellow);
                transition: 0.4s ease;
            }
        }
        p{
            margin-top: 16px;
        }
    }
`

export const About = styled.section`
    height: 800px;
`