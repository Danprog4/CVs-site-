import SoloPeople from "@/components/SoloPeople";
import { useFavoriteStore, usePeopleStore } from "@/store";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { useAutoAnimate } from '@formkit/auto-animate/react';


interface Person {
    name: string;
    salary: number;
    desc: string,
    experience: string,
    id: number,
    job: string
  }

const FavoriteList: React.FC = () => {

    const [favoriteList, setFavoriteList] = useState<Person[]>([]);
    const { peopleArr } = usePeopleStore();
    const { favoriteArr } = useFavoriteStore();
    const [animationParent] = useAutoAnimate()
    const showFavorite = (arr: Person[], favArr: number[]) => {
        const newArr = arr.filter((elem) => favArr.includes(elem.id));
        setFavoriteList(newArr);
    }

    useEffect(() => {
        showFavorite(peopleArr, favoriteArr)
    }, [favoriteArr, peopleArr])

    return (
        <div className="flex flex-col gap-4 items-center mt-7 border-2 w-1/2 min-h-screen justify-start p-2">
            <h1 className="font-bold text-xl">Favorite List</h1>
            
            {favoriteList.length > 0 ? (
                <ul ref={animationParent}>
                    {favoriteList.map((people, index) => (
                        <li key={people.id}>
                            <Link to={`/employees/${people.id}`}>
                                <SoloPeople people={people} index={index + 1} />
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="flex flex-col gap-3">
                    <span className="font-semibold text-xl">You didn’t add favorite CVs yet</span>
                    <span className="font-medium text-center">Check our employees</span>
                    <Link to={'/employees'} className={buttonVariants({ variant: "outline" })}>Employees</Link>
                </div>
            )}
        </div>
    )
    
    
}

export default FavoriteList;