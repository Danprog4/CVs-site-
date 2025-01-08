import { create } from "zustand";

interface Person {
    name: string;
    salary: number;
    desc: string,
    experience: string,
    id: number,
    job: string
  }
  
  interface PeopleStore {
    peopleArr: Person[];
    setPeopleArr: (people: Person[]) => void;
    addPerson: (person: Person) => void;
    deletePerson: (id: number) => void;
  }

  interface ModalStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
  }

  interface FavoriteStore {
    favoriteArr: number[];
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
  } 
  

const usePeopleStore = create<PeopleStore>((set) => ({
    peopleArr: [
        { name: 'Johnaaa', salary: 7000, desc: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах', experience: '3 years', id: 1, job: 'manager' },
        { name: 'Janea', salary: 4000, desc: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах', experience: '3 years', id: 2, job: 'manager' },
        { name: 'Markaaaaaaaa', salary: 10000, desc: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах', experience: '3 years', id: 3, job: 'manager' },
        { name: 'Markaaaa', salary: 10000, desc: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах', experience: '3 years', id: 4, job: 'manager' },
        { name: 'Markaaaa', salary: 10000, desc: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах', experience: '3 years', id: 5, job: 'manager' },
        { name: 'Maaaaa', salary: 10000, desc: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах', experience: '3 years', id: 6, job: 'manager' },
        { name: 'Markaaaaaaaa', salary: 10000, desc: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах', experience: '3 years', id: 7, job: 'manager' },
    ],

    setPeopleArr: (people) => set({ peopleArr: people }),
    addPerson: (person: Person) => set((state) => ({
      peopleArr: [...state.peopleArr, person]
    })),
    deletePerson: (id: number) => set((state) => ({
        peopleArr: [...state.peopleArr.filter((person) => person.id !== id)]
    }))
}));

const useModalStore  = create<ModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))

const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favoriteArr: [],
  addFavorite: (id: number) => set((state) => {
    if (!state.favoriteArr.includes(id)) {
      return { favoriteArr: [...state.favoriteArr, id] };
    }
    return state;
  }), 

  removeFavorite: (id: number) => set((state) => ({
    favoriteArr: state.favoriteArr.filter((favId) => favId !== id),
  })),

  isFavorite: (id: number) => get().favoriteArr.includes(id),
  
  
}))


export { usePeopleStore, useModalStore, useFavoriteStore };

