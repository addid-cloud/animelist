
import { authUserSession } from '@/libs/auth-libs'
import Image from 'next/image'
import Link from 'next/link'
import { Books, Command } from '@phosphor-icons/react/dist/ssr'
const Page = async() => {
    const user = await authUserSession()
  return (
    <div className={"text-color-primary flex justify-center items-center flex-col mt-8"}>
        <h1 className={"text-2xl font-bold"}>welcome, {user?.name}</h1>
        <Image src={user?.image} width={250} height={250}/>
        <div className='flex flex-row flex-wrap gap-6'>
            <Link href="/users/dashboard/collection" className='flex flex-row gap-4 p-2 mt-4 rounded bg-color-accent text-color-primary'><Books className='w-6'/>collection</Link>
            <Link href="/users/dashboard/comment" className='flex flex-row gap-4 p-2 mt-4 rounded bg-color-accent text-color-primary'><Command className='w-6'/>Comment</Link>
        </div>
    </div>
  )
}

export default Page