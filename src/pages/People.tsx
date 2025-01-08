import React from "react";
import FilterPeople from "@/components/FilterPeople";
import PeopleList from "@/components/PeopleList";
import { useModalStore } from "@/store";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";


const People: React.FC = () => {

    const { isOpen, setIsOpen } = useModalStore();


    return (
        <div className="relative mx-auto p-4 flex flex-col border-2 w-1/2 mt-7 min-h-screen ">
            <h1 className="font-bold text-xl text-center p-2">Employees List</h1>
            <FilterPeople />
            <PeopleList />
            <div className="flex justify-center mt-3 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col gap-3">
                <span className="font-bold">Do you want add you CV?</span>
                <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="w-[190px]">Add Employee</Button>
            </div>
            {isOpen && <Modal />}
        </div>
  )
}

export default People;