import { StaticImageData } from "next/image";

export interface InitialStateProps {
    lang: string;
    loading: boolean;
    userData: userDataProps | null;
}

export interface PortfolioDataProps {
    id: number,
    title: string,
    desc: string,
    src: string | StaticImageData,
    owner: string,
    hash: string[],
    position: string;
    url: string;
    start_date: string;
    final_date: string;
    manager: string;
    status: boolean;
}

export interface OfficesDataProps {
    id: number,
    title: string,
    desc: string,
    src: string | StaticImageData,
    owner: string,
}

export interface userDataProps {
    full_name: string;
    birthdate: string;
    address: string;
    description: string;
    phone_number: string;

}