import Link from "next/link";

const Navbar = () =>{
    return(
        <header className="bg-indigo-600">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href="/" className="font-bold text-white text-2xl"> AnimeList </Link>
                <input  placeholder="cari animeh..." type="text"/>
            </div>
        </header>
    )
}
export default Navbar