import Link from "next/link";
import Image from 'next/image'
import { ReactNode } from "react";


interface ILayOutProps {
    children: ReactNode;
}

const Layout = ({ children }: ILayOutProps) => {

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 w-4/5 m-auto" >
                <div className="flex flex-wrap justify-between bg-slate-600 p-4">
                    <Link href="/" className="flex justify-between w-full">
                        <Image src="/logo.svg" className="h-8 mr-3" alt="Logo" width={100} height={100} />
                        <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-center text-slate-200">Address Book</h1>
                    </Link>
                </div>
            </nav>

            {children}
        </>


    )

}

export default Layout;