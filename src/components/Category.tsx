

interface CategoryProps {
    icon: React.ReactNode;
    title: string;
    active: boolean;
    onClick: () => void;
}

export default function Category({ icon, title, active, onClick }: CategoryProps) {
    return (
        <>
            <li className={`relative flex flex-col justify-center items-center gap-2 px-7 py-5 cursor-pointer transition-all
    ${active
      ? 'bg-[#CEE0C2] text-green-700 rounded-3xl after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-0.5 after:bg-green-600 after:rounded-full'
      : 'text-gray-600 hover:bg-gray-200'
    }`} onClick={onClick}>
                <span className={`${active ? 'bg-white' : 'bg-gray-300'} p-3 rounded-full`}>{icon}</span>
                <span className={`${active ? 'text-green-700' : 'text-gray-500'} text-sm font-medium `}>{title}</span>
           
            </li>
        </>
    );
};
