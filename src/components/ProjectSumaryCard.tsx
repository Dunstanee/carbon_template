import { MapPin, SquareArrowRight } from "lucide-react";

interface ProjectSummaryCardProps {
  projectName: string;
  location: string;
  imageUrl: string;
  description: string;
}

export default function ProjectSumaryCard({ projectName, location, imageUrl, description }: ProjectSummaryCardProps) {
  return (
    <div className="card card-body shadow-xl bg-base-100 rounded-2xl p-4">
        <h4 className="font-bold text-2xl text-gray-600">{projectName}</h4>
        <p className="flex gap-3 items-center"><MapPin className="w-4 h-4" /> {location}</p>
        <div className="mb-3">
        <img src={imageUrl} alt="Project Image" className="w-full h-40 object-cover rounded-lg mt-2" />
        </div>
        <div className="mb-3">
            <p>{description}</p>
        </div>
        <button className="btn rounded-2xl p-3 bg-green-700 text-white flex items-center"> View More  <SquareArrowRight className="w-4 h-4 ml-3" /></button>
    </div>
  )
}
