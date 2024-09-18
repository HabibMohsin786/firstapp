import React, { useContext } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Avatar } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { AuthContex } from "../contex/AuthContex.jsx";
import { auth } from "../utils/firebase.js";
import { signOut } from "firebase/auth";
import { useLocation } from "react-router";



export default function Header() {
  const { user, setUser } = useContext(AuthContex)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

const handleLogOut=()=>{
  signOut(auth).then(() => {
    setUser({isLogin: false,
      userInfo: {}})
  }).catch((error) => {
    // An error happened.
  });
}

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem isActive={location.pathname === "/products"}>
          <Link color="foreground" href="/products">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/"}>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">
        {user?.isLogin ? <><Avatar src={user?.userInfo?.photo} />
          <NavbarItem className="hidden lg:flex">
            
              <button
                onClick={handleLogOut}
                className=" bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 py-2 px-4"
                type="button"
              >
                Log Out
              </button>
            
          </NavbarItem>
        </> :
          <NavbarItem className="hidden lg:flex">
            <Link href="/signin">
              <button
                className=" bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 py-2 px-4 mx-2"
                type="button"
              >
                Sign In
              </button>
            </Link>
            <Link href="/signUp">
              <button
                className=" bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 py-2 px-4"
                type="button"
              >
                Sign Up
              </button>
            </Link>
          </NavbarItem>
        }

      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
