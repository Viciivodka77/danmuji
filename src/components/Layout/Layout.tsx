import {Outlet} from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className={"container h-full flex bg-amber"}>

            <Navbar/>
            layout


            <div className={"container"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;