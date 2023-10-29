import Link from "next/link"
const Header = ({title, linkHref, linkTitle })=>{
    return(
        <div className="p-4 flex justify-between flex-row items-center text-color-primary">
        <h1 className="text-xl font-semibold">{title}</h1>
        {linkHref && linkTitle ? <Link href={linkHref} className="sm:text-lg text-sm text-color-primary hover:text-color-accent underline transition-all" >{linkTitle}</Link> : null}
        
        </div>
    )
}
export default Header