import React from "react";
import { buttonVariants } from "@/components/ui/button"
import { Link } from "react-router-dom";





const Header: React.FC = () => {

    // const { isOpen, setIsOpen } = useModalStore();


    return (
        <div className="fixed top-0 left-0 right-0 flex gap-20 border-b-2 w-full justify-center p-5 bg-white z-50 h-14 items-center">
            <Link to={'/employyes'} className={buttonVariants({ variant: "outline" })}>Employyes</Link>
            <Link to={'/about'} className={buttonVariants({ variant: "outline" })}>About them</Link>
            <Link to={'/favorite'} className={buttonVariants({ variant: "outline" })}>FavoriteList</Link>
        </div>
    )
}

export default Header;