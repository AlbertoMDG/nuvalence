
export interface AddressBook {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    picture: string;
}

export const getContacts = async (page: number): Promise<AddressBook[]> => {

    const url = process.env.NEXT_PUBLIC_API_RANDOM_USER_URL || '';

    const response = await fetch(`${url}/?page=${page}&results=10`);
    const data = await response.json();

    const addressBooks: AddressBook[] = data.results.map((user: any) => ({
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        phone: user.phone,
        picture: user.picture.medium
    }));

    return addressBooks;
}