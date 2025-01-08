import React, { useEffect, useState } from "react"
import { usePeopleStore } from "../store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



type Options = 'Default' | 'Salary' | 'Length';


const FilterPeople: React.FC = () => {
    const [option, setOption] = useState<Options>('Default');
    const { peopleArr, setPeopleArr } = usePeopleStore();
    const [defaultPeopleArr] = useState(peopleArr)

    // const { isOpen, setIsOpen } = useModalStore();

    const sortedArr = (option: Options) => {
        switch (option) {
          case 'Salary':
            return  [...peopleArr].sort((a, b) => b.salary - a.salary);
          case 'Length':
            return  [...peopleArr].sort((a, b) => b.name.length - a.name.length); 
          case 'Default':
          default:
            return  defaultPeopleArr; 
        }
      }; 

    const handleChange = (newOption: string) => {
        const newOptionTyped = newOption as Options;
        setOption(newOptionTyped)
    }

    useEffect(() => {
        setPeopleArr(sortedArr(option));
    }, [option, setPeopleArr, defaultPeopleArr])

    return (
      <div className="m-5">
          <Select value={option} onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Default">Default</SelectItem>
              <SelectItem value="Salary">Salary</SelectItem>
              <SelectItem value="Length">Length</SelectItem>
            </SelectContent>
          </Select>
      </div>
    )
}

export default FilterPeople