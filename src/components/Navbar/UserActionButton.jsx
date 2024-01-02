import Link from 'next/link'
import { authUserSession } from '@/libs/auth-libs'
const UserActionButton = async() => {
const user = await authUserSession()
console.log(user)
const actionLabel = user ? "Sign Out" : "Sign In"
const actionUrl = user ? "/api/auth/signout" : "api/auth/signin"
return (
    <div className={"flex flex-row justify-between gap-2"}>
        {
            user ? <Link href={"/users/dashboard"} className={""}>Dashboard</Link> : null
        }
    <Link href={actionUrl} className="">{actionLabel}</Link>
    </div>

)
}

export default UserActionButton