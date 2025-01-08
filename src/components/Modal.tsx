import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useModalStore, usePeopleStore } from "@/store";

const Modal: React.FC = () => {
    const [name, setName ]= useState('');
    const [salary, setSalary] = useState('');
    const [job, setJob] = useState('');

    const { isOpen, setIsOpen }= useModalStore()
    const { addPerson, peopleArr } = usePeopleStore();

    const handleSubmit = () => {

        const salaryNumber = Number(salary);

        if (name && salary && job) {
            const newPerson = {
                name,
                salary: salaryNumber,
                job,
                desc: '-',
                experience: '-',
                id: peopleArr.length + 1
            }

            addPerson(newPerson);
            setIsOpen(!isOpen);
            setName('');
            setSalary('');
            setJob('');
        }

        else {
            alert('Пожалуйста, заполните все поля корректно.')
        }
    }


    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 ${isOpen ? "block" : "hidden"}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex flex-col items-center gap-4">
                    <Input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
                    <Input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)}/>
                    <Button 
                        onClick={handleSubmit} 
                        className="focus:outline-none">
                        Submit
                    </Button>
                </div>
            </div>
    </div>
    )
}

export default Modal;