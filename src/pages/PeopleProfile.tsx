import { useFavoriteStore, usePeopleStore } from "@/store";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";


const PeopleProfile: React.FC = () => {
    const { deletePerson } = usePeopleStore();
    const { peopleId } = useParams<{ peopleId: string }>();
    const { peopleArr } = usePeopleStore();
    const employye = peopleArr.find((emp) => emp.id === Number(peopleId));
    const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();
    const [alert, setAlert] = useState<string | null>(null)

    if (!employye) {
        return (
            <div className="flex justify-center items-center mt-7">Error 404: Employee is not found. Try again</div>
        )
    }

    const handleFavoriteToggle = () => {
        switch (isFavorite(employye.id)) {
            case true :
                removeFavorite(employye.id)
                setAlert('This CV was removed from your favorite list')
                break;
            case false :
                addFavorite(employye.id)
                setAlert('This CV was added to your favorite list')
                break;
        }

        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    return (
        <div className="mx-auto p-4 flex flex-col border-2 w-1/2 mt-7 min-h-screen">
            {/* Заголовок и информация о сотруднике */}
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">{employye.name}</h1>
                <div className="flex justify-center gap-4 text-lg text-gray-600">
                    <span>{employye.experience}</span>
                    <span>{employye.salary}$</span>
                    <span>{employye.job}</span>
                </div>
            </div>

            {/* Описание о сотруднике */}
            <div className="flex flex-col gap-4 mb-6">
                <span className="text-lg font-bold text-gray-800">About me</span>
                <p className="text-gray-600">{employye.desc}</p>
            </div>

            {/* Навыки сотрудника */}
            <div className="flex flex-col gap-4 mb-6">
                <span className="text-lg font-bold text-gray-800">My skills</span>
                <p className="text-gray-600">{employye.desc}</p>
            </div>

            {/* Контактная информация */}
            <div className="flex flex-col gap-4 mb-6 mt-auto items-center">
                <span className="text-lg font-bold text-gray-800">My contact info</span>
                <div className="flex gap-4 justify-center text-gray-600">
                    <strong>somegmail@gmail.com</strong>
                    <strong>+1(292)655-78-98</strong>
                </div>
            </div>
            <div className="flex justify-center gap-10">
                <Button onClick={() => deletePerson(employye.id)}>Not interested</Button>
                {/* Add a favorite list and create a function to add profile to it */}
                <Button onClick={handleFavoriteToggle}>{isFavorite(employye.id) ? 'Remove from favorite' : 'Add to favorites'}</Button>
            </div>
            <div className="text-center text-green-500 m-2">
                {alert}
            </div>
        </div>
    );
        
    
}

export default PeopleProfile