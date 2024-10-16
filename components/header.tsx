import Link from "next/link";
import React from "react";
import "./style.header.css";

export default function header(){
    return (
        <nav>
            <div >
            <ul >
                <li >
                    <Link href="/">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link href="/">
                        About
                    </Link>
                    </li>
                    <li> 
                    <Link href="/">
                        Contact
                    </Link>
                    </li>
                    <li>
                    <Link href="/">
                        Services
                    </Link>
                    </li>

            </ul>
            </div>
        </nav>
        );
        }

  
