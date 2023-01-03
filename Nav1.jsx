import { useEffect, useRef, useState } from "react";
import "./Nav1.css";
function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    const [open, setOpen] = useState(true)
    useEffect(() => {
        if (!open) {
            document.getElementById("close-btn").click()
        }
    }, [open]);
    return (
        <header>
            <div className="logo">
                <h1>Servetab</h1>
            </div>
            <nav ref={navRef}>
                <a class="nav-link nav-link-ltr" href="#Home" onClick={() => setOpen(false)}>Home</a>
                <a class="nav-link nav-link-ltr" href="#About" onClick={() => setOpen(false)}>About</a>
                <a class="nav-link nav-link-ltr" href="#Product" onClick={() => 
                setOpen(false)}>Products</a>
                <a class="nav-link nav-link-ltr" href="#Contact" onClick={() => setOpen(false)}>Contact</a>
                <a class="nav-link nav-link-ltr" href="#Work" onClick={() => setOpen(false)}>Work</a>
                <a class="nav-link nav-link-ltr" href="#Team" onClick={() => setOpen(false)}>Team</a>

                <a
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>

                    <img style={{ display: "none" }} src="cross.png" id="close-btn" onClick={() => setOpen(true)} className="hamberimg" />
                </a>
            </nav>
            <a className="nav-btn" onClick={showNavbar}>
                <img src="menu.png" className="hamberimg" />
            </a>
        </header>
    );
}

export default Navbar;