import * as React from "react";
import NavBar from "../Navbar/Navbar";

export default function AppLayout({ children }: { children: any }) {
    return (
        <div>
            <NavBar />
            <div>
                {children}
            </div>
        </div>
    );
}