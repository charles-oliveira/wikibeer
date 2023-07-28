import styled  from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${props => props.scrolled ? `${60}px` : `${108}px`};

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--black);
    transition: 0.4s ease;

    ul{
        display: flex;
        justify-content: space-between;

        width: ${props => props.scrolled ? `${254}px` : `${316}px`};
        transition: 0.2s ease;
        margin-right: 32px;
        /* li select -nav- buttons */
        li{
            list-style: none;
            button{
                border: 2px solid var(--yellow);
                padding: ${props => props.scrolled ? `${8}px ${22}px` : `${16}px ${40}px`};
                transition: 0.2s ease;

                &:hover{
                    background-color: var(--yellow);
                    color: var(--black);
                    transition: 0.2s ease;
                }
            }
        }
    }
    @media (max-width: 768px) {
        ul{
            width: 100%;
        }
    }

`

export const Logo = styled.button`
    margin-left: 32px;
    img{
        padding: 16px 40px;
    }
    @media (max-width: 768px) {
        img{
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    @media (max-width: 460px) {
        img{
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`