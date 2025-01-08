import { useFavoriteStore} from "@/store";
import React from "react";

interface Person {
    name: string;
    salary: number;
    id: number;
}

interface PeopleProps {
    people: Person;
    index: number;
}


const SoloPeople: React.FC<PeopleProps> = ({ people , index}) => {

    const { isFavorite } = useFavoriteStore();


    return (
        <div className='flex border-2 border-white-200 rounded-lg mb-5 w-80 justify-center gap-2 '>
             <span>{index}.</span>
             <span>{people.name}</span>
             <span>${people.salary}</span>
             {isFavorite(people.id) && <span>fav</span>}
        </div>
    )
}

export default SoloPeople;