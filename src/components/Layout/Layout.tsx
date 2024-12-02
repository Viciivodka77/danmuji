import {Outlet} from "react-router";

const Layout = () => {
    return (
        <div className={"container flex"}>


            layout


            <div className={"container"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;