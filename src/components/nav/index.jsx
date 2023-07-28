import { useState, useEffect } from "react"
import * as A from "./style"

function Nav() {
    const [scrolled, setScrolled] = useState(false)

    const scrollFunction = () => {
        const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop
        if (scrollPosition > 60) {
            console.log("true")
            setScrolled(true)
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction)
        return () => {
        window.removeEventListener('scroll', scrollFunction)
        }
    }, [])

  return (
    <A.Nav scrolled={scrolled}>
        <A.Logo>
        <img src="" alt="logo" />
        </A.Logo>
        <ul>
            <li>
                <button>sing up</button>
            </li>
            <li>
                <button>subscribe</button>
            </li>
        </ul>
    </A.Nav>
  )
}

export default Nav
