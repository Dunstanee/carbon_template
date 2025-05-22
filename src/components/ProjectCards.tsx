
interface ProjectCardsProps {
    icon: React.ReactNode;
    title: string;
    bgColor: string;
    textColor: string;
    value: string | number;
}

export default function ProjectCards({ icon, title, bgColor, textColor, value }: ProjectCardsProps) {
    return (
        <div className={`p-3 rounded-3xl ${bgColor}`}>
            <div className={`p-4  flex items-center gap-3 `}>
                {icon}
                <div>
                    <div className={`text-2xl font-bold mt-1 ${textColor}`}>
                        {value}
                    </div>
                    <div className="text-xs text-gray-600">
                        {title}
                    </div>
                </div>

            </div>
        </div>
    )
}
