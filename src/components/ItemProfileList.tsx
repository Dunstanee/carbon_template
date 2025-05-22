

interface ItemProfileListProps {
    projectName: string;
    icon: React.ReactNode;
    Label?: string;
}

export default function ItemProfileList({ projectName, icon, Label }: ItemProfileListProps) {
    return (
        <li className="flex items-center gap-3">
            <span className="w-15 h-15 flex items-center justify-center text-[#008036] bg-success-light  p-3" >{icon}</span>
            <div className="flex flex-col">
                <p className="text-gray-600"><b>{Label}:</b> {projectName}</p>
            </div>
        </li>
    )
}
