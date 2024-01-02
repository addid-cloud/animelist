import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () =>{
    return(
        <header className="bg-color-accent text-white">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4 md:items-center">
                <Link href="/" className="font-bold text-2xl"> Karena Lo Wibu </Link>
                <InputSearch/>
                <UserActionButton/>
            </div>
        </header>
    )
}
export default Navbar