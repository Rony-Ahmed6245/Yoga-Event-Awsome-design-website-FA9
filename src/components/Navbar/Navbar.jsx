import { NavLink } from "react-router-dom";


const Navbar = () => {
    const home = <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans" : "bgTrans"
        }
    >
        Home
    </NavLink>;
    const services = <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  text-red-400 border-b px-2 py-1 rounded-lg font-bold " : ""
        }
    >
        Services
    </NavLink>;
    const products = <NavLink
        to="/products"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        Product
    </NavLink>;
    const blog = <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        Blog
    </NavLink>;





    return (
        <div className="bg-[#DC2C5C]">
            <div className="max-w-screen-xl	 mx-auto md:px-2">
                <div className="px-4 md:px-4 lg:px-4   bg-none z-30 relative ">
                    <div className="navbar flex justify-between items-center ">
                        <img className="w-[150px] md:w-[200px]" src={'https://i.ibb.co/cgSdsT0/logo-1-300x300.webp'} alt="" />
                        <div className="">
                            <div className="dropdown">
                                <label tabIndex={1} className="btn btn-ghost md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] text-white w-[30px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className=" menus menu-sm dropdown-content bg-white px-3 py-3 border z-[10]  rounded-box  -left-10 ">
                                    <li className="text-4xl">{home}</li>
                                    <li className=" text-4xl">{services}</li>
                                    <li className="text-4xl">{products}</li>
                                    <li className="text-4xl">{blog}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center hidden md:flex">
                            <ul className=" menu-horizontal px-4 gap-10 md:mr-10  lg:mr-24 text-white font-bold">
                                <li className="">{home}</li>
                                <li>{services}</li>
                                <li>{products}</li>
                                <li>{blog}</li>

                            </ul>
                            <button className="btn btn-primary md:ml-20 lg:ml-32">
                                login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;