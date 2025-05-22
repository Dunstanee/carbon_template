import { Activity, Blinds,  Calendar, CalendarPlus, CalendarRange, ChartNetwork, DollarSign, Edit, MapPin, NotebookPen, PenLine, PictureInPicture, PlugZap, TreePine, UsersRound, X } from "lucide-react";
import ProjectCards from "../components/ProjectCards";
import ProgressSteps from "../components/ProgressSteps";
import ItemProfileList from "../components/ItemProfileList";
import SdgCards from "../components/SdgCards";
import ProjectLocationMap from "../components/ProjectLocationMap";

export default function Projects() {
    return (
        <div>
            <div className="mb-3">
                <p>Project Name</p>
                <h4 className="text-2xl font-bold text-gray-900">Kilifi Solar Project</h4>
            </div>

            <div className="card  card-body p-3">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-3">
                    <ProjectCards
                        title="Average Annual Emmission Reduction"
                        value="25,123"
                        bgColor="bg-[#FAF3FC]"
                        textColor="text-[#000]"
                        icon={<ChartNetwork className="text-[#BF83FF] w-8 h-8" />}
                    />
                    <ProjectCards
                        title="Annual generation"
                        value="40 GWh"
                        bgColor="bg-[#F3FCF9]"
                        textColor="text-[#000]"
                        icon={<PlugZap className="text-[#008036] w-8 h-8" />}
                    />
                    <ProjectCards
                        title="Crediting Period"
                        value="15 Years"
                        bgColor="bg-[#FAF3FC]"
                        textColor="text-[#000]"
                        icon={<Calendar className="text-[#BF83FF] w-8 h-8" />}
                    />
                    <ProjectCards
                        title="Projected Revenue"
                        value="$15,000"
                        bgColor="bg-[#FFF0DB]"
                        textColor="text-[#000]"
                        icon={<DollarSign className="text-[#FAB143] w-8 h-8" />}
                    />
                    <div className="flex items-center  ">
                        <div className="flex items-center flex-1 justify-between border border-[#8FD5F2] rounded-3xl py-2 px-3">
                            <button className="btn btn-primary flex-1  text-[#13a0dd] flex items-center">
                                <Edit className="mr-2 font-bold" />
                                <div className="flex flex-col items-start">
                                    <span className="text-2xl">Edit</span>
                                    <span>project</span>
                                </div>
                            </button>
                            <button className="btn btn-primary px-3  flex-1 border-l border-[#8FD5F2]  text-[#13a0dd] flex items-center">
                                <PictureInPicture className="mr-2 font-bold" />
                                <div className="flex flex-col items-start">
                                    <span className="text-2xl">View</span>
                                    <span>project</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <ProgressSteps />

                <div className="mb-3 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px w-full ">
                        <li className="item-list">
                            <a href="#" className="active inline-block p-4 border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">PROJECT DETAILS</a>
                        </li>
                        <li className="item-list">
                            <a href="#" className="inline-block p-4   border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 " aria-current="page">PROPONENT DETAILS</a>
                        </li>
                        <li className="item-list">
                            <a href="#" className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">PROPRIETOR DETAILS</a>
                        </li>
                        <li className="item-list">
                            <a href="#" className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">SPONSOR/UPFRONT BUYER</a>
                        </li>
                        <li className="item-list">
                            <a className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">CARBON EMISSIONS</a>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-10 wrapped  p-3 justify-around">
                    <div className="card card-body shadow-2xl lg:w-8/12 sm:w-full">
                        <div className="flex wrapped items-center justify-between gap-3 mb-4 border-b pb-5 border-gray-300">
                            <h5 className="font-semibold text-2xl">Project Details</h5>
                            <div>
                                <button className="btn btn-custom-primary mb-1">VIEW LETTER OF NO OBJECTION</button>
                                <button className="btn btn-custom-success">Approved</button>
                            </div>
                        </div>
                        <h4 className="mb-3 text-gray-500">Project Description</h4>
                        <p>The project aims to address the lack of reliable and sustainable electricity in the rural areas of Kilifi County, located on the Kenyan coast. This
                            initiative is designed to harness the abundant solar energy in the region, transforming it into a reliable source of power for the local
                            community.</p>
                    </div>
                    <div className="flex-1 ">
                        <div className="card card-body shadow-2xl  h-100">
                            <div className="p-4">
                                <h5 className="text-[#599731] font-bold text-xl ">Notifications</h5>

                                <div className="bg-[#E6F2EA] p-4 mt-4 rounded-lg">
                                    <X className="text-2xl float-right text-[#599731] mb-2" />
                                    <h4 className="text-[#599731]">Kilifi Solar Project</h4>
                                    <p className="mb-4">There are no new notifications that need your
                                        attention at the moment!</p>
                                    <div className="w-full bg-[#CFE5D8] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                        <div className="bg-[#006B3D] h-2.5 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex wrapped gap-10  p-3 justify-around">
                    <div className="card card-body shadow-2xl lg:w-8/12 sm:w-full">
                        <div className="border-b border-gray-300 gap-3 pb-5 mb-4">
                            <h5 className="font-semibold text-2xl">Project Details</h5>
                        </div>

                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <ItemProfileList
                                Label="Project Name"
                                projectName="Rachel Frye"
                                icon={<PenLine />}
                            />
                            <ItemProfileList
                                Label="Project Location"
                                projectName="Nairobi"
                                icon={<MapPin />}
                            />
                            <ItemProfileList
                                Label="Project Type"
                                projectName="Agriculture"
                                icon={<TreePine />}
                            />
                            <ItemProfileList
                                Label="Project Sector"
                                projectName="Livestock Management"
                                icon={<CalendarPlus />}
                            />
                            <ItemProfileList
                                Label="Project Start Date"
                                projectName="5/7/2024"
                                icon={<CalendarRange />}
                            />
                            <ItemProfileList
                                Label="Project Milestone"
                                projectName="Stakeholder Engagement"
                                icon={<Blinds />}
                            />


                        </ul>
                    </div>
                    <div className="flex-1 ">
                        <div className="card card-body shadow-2xl  ">
                            <div className="p-4">
                                <h5 className="text-[#599731] font-bold text-xl ">Project Images</h5>

                                <div>
                                    <img src="/lady-cook.png" alt="Project Image" className="w-full h-40 object-cover rounded-lg mt-2" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                                    <img src="/lady-cook.png" alt="Project Image" className="w-full h-40 object-cover rounded-lg mt-2" />
                                    <img src="/lady-cook.png" alt="Project Image" className="w-full h-40 object-cover rounded-lg mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3  card card-body shadow-2xl ">
                    <h5 className="text-[#599731] font-bold text-xl mb-7 ">Project Location</h5>
                    <ProjectLocationMap />
                </div>

                <div className="p-4  card-body">
                    <h5 className="mb-5 text-gray-800 font-semibold text-2xl">SDG Goals</h5>
                    <div className="flex wrapped gap-10">

                        <SdgCards
                            title="No Poverty"
                            subTitle="SDG Implementation Description"
                            icon={<UsersRound size={150} />}
                            description="The CDM project activity for GHG emission
                                reduction by catalytic N2O destruction was
                                implemented in Abu Qir, Egypt in year 2006.
                                The project activity includes development,
                                design, engineering, procurement, finance,
                                construction, operation and maintenance of a
                                system for catalytic reduction of N2O. The
                                EnviNOx® process used in the nitric acid
                                (hereinafter called “NA”) plant II of Abu Qir
                                Fertilizer Co. (hereinafter called “AFC”) is based
                                on the catalytic reduction of NOx (NO and NO2)
                                with ammonia (NH3) and ] beds."
                            bgColor="bg-[#E4233B]"
                        />
                        <SdgCards
                            title="Good Health and Well-being"
                            subTitle="SDG Implementation Description"
                            icon={<Activity size={150} />}
                            description="The CDM project activity for GHG emission
                                reduction by catalytic N2O destruction was
                                implemented in Abu Qir, Egypt in year 2006.
                                The project activity includes development,
                                design, engineering, procurement, finance,
                                construction, operation and maintenance of a
                                system for catalytic reduction of N2O. The
                                EnviNOx® process used in the nitric acid
                                (hereinafter called “NA”) plant II of Abu Qir
                                Fertilizer Co. (hereinafter called “AFC”) is based
                                on the catalytic reduction of NOx (NO and NO2)
                                with ammonia (NH3) and of nitrous ."
                            bgColor="bg-[#4B9E38]"
                        />
                        <SdgCards
                            title="Quality Education"
                            subTitle="SDG Implementation Description"
                            icon={<NotebookPen size={150} />}
                            description="The CDM project activity for GHG emission
                                reduction by catalytic N2O destruction was
                                implemented in Abu Qir, Egypt in year 2006.
                                The project activity includes development,
                                design, engineering, procurement, finance,
                                construction, operation and maintenance of a
                                system for catalytic reduction of N2O. The
                                EnviNOx® process used in the nitric acid
                                (hereinafter called “NA”) plant II of Abu Qir
                                Fertilizer Co. (hereinafter called “AFC”) is based
                                on the catalytic reduction."
                            bgColor="bg-[#C4182D]"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
