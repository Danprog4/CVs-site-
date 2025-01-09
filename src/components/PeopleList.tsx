import React, { useEffect } from "react";
import SoloPeople from "./SoloPeople";
import { usePeopleStore } from "../store";
import { Link } from "react-router-dom";
import { useAutoAnimate } from '@formkit/auto-animate/react';

const PeopleList: React.FC = () => {

    const { peopleArr, loadPeople } = usePeopleStore();
    const [animationParent] = useAutoAnimate();

    useEffect(() => {
        loadPeople();
    }, [])


    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <ul ref={animationParent}>
                {peopleArr.map((people, index) => (
                    <li key={people.id} >
                        <Link to={`/employyes/${people.id}`}>
                            <SoloPeople people={people} index={index + 1}></SoloPeople>
                        </Link>
                    </li>
            )   )}
            </ul>
        </div>
    )
}

export default PeopleList;