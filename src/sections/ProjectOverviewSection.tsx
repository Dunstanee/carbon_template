import { Factory, Leaf, Recycle, Tractor, TreePine, Truck } from "lucide-react";
import { useState } from "react";
import Category from "../components/Category";
import ProjectDistributionChart from "../charts/ProjectDistributionChart";


export default function ProjectOverviewSection() {

    const [activeTab, setActiveTab] = useState('Energy');

    const categories = [
        { icon: <Leaf size={20} />, title: 'Energy' },
        { icon: <Truck size={20} />, title: 'Transport' },
        { icon: <Recycle size={20} />, title: 'Waste' },
        { icon: <TreePine size={20} />, title: 'Forestry & Land Use' },
        { icon: <Tractor size={20} />, title: 'Agriculture' },
        { icon: <Factory size={20} />, title: 'Industrial Processes & Product Use' },
    ];
    return (
        <>
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-xl font-semibold">Project Overview</h2>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                            THIS WEEK
                        </button>
                    </div>
                </div>

                <div>
                    <div className="flex flex-1 gap-4">
                        <div className="text-sm scrollable overflow-hidden overflow-x-scroll  font-medium text-center text-gray-500 bg-[#F5F8F2] rounded-3xl  dark:text-gray-400 dark:border-gray-700 ">
                            <ul className="flex flex-1 mb-px">
                                {categories.map((category) => (
                                    <Category
                                        key={category.title}
                                        icon={category.icon}
                                        title={category.title}
                                        active={activeTab === category.title}
                                        onClick={() => setActiveTab(category.title)}
                                    />
                                ))}
                            </ul>
                        </div>


                    </div>
                    <div className="bg-white p-6 rounded-lg">
                        <h3 className="text-lg font-medium mb-4">{activeTab} Projects</h3>
                        <div className="text-gray-500">
                            <ProjectDistributionChart />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
