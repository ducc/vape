import * as React from "react";

export class Navbar extends React.Component {
    public render() {
        return (
            <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
                <div className={"container-fluid"}>
                    <a className={"navbar-brand"} href={"#"}>VapeLiquids.com</a>
                    <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"} data-target={"#navbarNavAltMarkup"} aria-controls={"navbarNavAltMarkup"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
                        <span className={"navbar-toggler-icon"}/>
                    </button>
                    <div className={"collapse navbar-collapse"} id={"navbarNavAltMarkup"}>
                        <div className={"navbar-nav"}>
                            <a className={"nav-item nav-link active"} href={"#"}>E-Liquids</a>
                            <a className={"nav-item nav-link"} href={"#"}>Kits</a>
                            <a className={"nav-item nav-link"} href={"#"}>Mods</a>
                            <a className={"nav-item nav-link"} href={"#"}>Tanks</a>
                            <a className={"nav-item nav-link"} href={"#"}>Notifications</a>
                            <a className={"nav-item nav-link"} href={"#"}>Profile</a>
                            <a className={"nav-item nav-link"} href={"#"}>Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
