import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";
import Head from "next/head";



export default function ContactDetails() {

    const router = useRouter();
    const { firstName, lastName, email, phone, picture } = router.query;

    return (

        <>
            <Head>
                <title>{firstName} {lastName}</title>
                <link rel="icon" href={`${picture}` || '/placeholderimg.png'} />
            </Head >

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-36 mx-auto" >
                <div className="flex flex-col items-center pb-10 mt-10">
                    <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`${picture}` || "/placeholderimg.png"} alt={`${firstName}` || ''} width={120} height={120} priority />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{firstName} {lastName}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">email: {email}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{phone}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Link href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Return</Link>

                    </div>
                </div>
            </div>

        </>

    )

}