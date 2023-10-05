import AddressBookList from './Components/AdressBookList.tsx/AddressBookList';
import Head from 'next/head';
import { AddressBook, getContacts } from 'services/contacts';
import { useEffect, useState } from 'react';
import Spinner from './Components/Spinner/Spinner';


export default function Home() {

  const currentPage = 1;
  const [data, setData] = useState<AddressBook[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const displayAddressBooks = async (page: number) => {
    setLoading(true);
    try {
      const addressBooks = await getContacts(page);
      setData(addressBooks);
      setLoading(false);

    } catch (error) {
      console.error("Error al obtener AddressBook:", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    displayAddressBooks(currentPage);
  }, [currentPage])


  return (
    <div>
      <Head>
        <title>Address Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          isLoading ? <Spinner /> : <AddressBookList data={data} />
        }
      </main>
    </div>
  )
}
