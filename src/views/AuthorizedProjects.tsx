import { Briefcase, DollarSign, TreePalm } from "lucide-react";
import ProjectCards from "../components/ProjectCards";
import ProjectSumaryCard from "../components/ProjectSumaryCard";


export default function AuthorizedProjects() {
  return (
    <>
      <div className="content-header">
        <h1>My Projects</h1>
      </div>

      <div className="card card-body flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
          <ProjectCards
            title="No. Of projects"
            value="2"
            bgColor="bg-[#FAF3FC]"
            textColor="text-[#000]"
            icon={<Briefcase className="text-[#BF83FF] w-8 h-8" />}
          />
          <ProjectCards
            title="No. Of Credits issued"
            value="12,123"
            bgColor="bg-[#F3FCF9]"
            textColor="text-[#000]"
            icon={<TreePalm className="text-[#008036] w-8 h-8" />}
          />
          <ProjectCards
            title="Expected Credits per annum"
            value="$398,645"
            bgColor="bg-[#FFF0DB]"
            textColor="text-[#000]"
            icon={<DollarSign className="text-[#FAB143] w-8 h-8" />}
          />
          <ProjectCards
            title="Total Projects"
            value="$398,645"
            bgColor="bg-[#FFF0DB]"
            textColor="text-[#000]"
            icon={<DollarSign className="text-[#FAB143] w-8 h-8" />}
          />
        </div>

        <div className="flex flex-wrap gap-10  p-3 justify-around ">
          <div className="card card-body shadow-sm lg:w-8/12 sm:w-full">
            <div className="flex flex-col gap-3 mb-4">
              <h5 className="text-[#008036] font-bold text-xl ">Authorised Projects</h5>
            </div>

            <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-2 gap-4 flex-wrap">
              <ProjectSumaryCard
                projectName="Kilifi Solar Project"
                location="Kilifi, Kenya"
                imageUrl="/cooking.jpg"
                description="The project aims to address the lack of reliable and
                  sustainable electricity in the rural areas of Kilifi County,
                  located on the Kenyan coast. This initiative is designed
                  to harness the abundant solar energy in the region,
                  transforming it into a reliable source of power for the
                  local community"
              />
              <ProjectSumaryCard
                projectName="Kilifi Solar Project"
                location="Kilifi, Kenya"
                imageUrl="/cooking.jpg"
                description="The project aims to address the lack of reliable and
                  sustainable electricity in the rural areas of Kilifi County,
                  located on the Kenyan coast. This initiative is designed
                  to harness the abundant solar energy in the region,
                  transforming it into a reliable source of power for the
                  local community"
              />
              <ProjectSumaryCard
                projectName="Kilifi Solar Project"
                location="Kilifi, Kenya"
                imageUrl="/cooking.jpg"
                description="The project aims to address the lack of reliable and
                  sustainable electricity in the rural areas of Kilifi County,
                  located on the Kenyan coast. This initiative is designed
                  to harness the abundant solar energy in the region,
                  transforming it into a reliable source of power for the
                  local community"
              />
              <ProjectSumaryCard
                projectName="Kilifi Solar Project"
                location="Kilifi, Kenya"
                imageUrl="/cooking.jpg"
                description="The project aims to address the lack of reliable and
                  sustainable electricity in the rural areas of Kilifi County,
                  located on the Kenyan coast. This initiative is designed
                  to harness the abundant solar energy in the region,
                  transforming it into a reliable source of power for the
                  local community"
              />
            </div>
          </div>
          <div className="flex-1 ">
            <div className="card card-body shadow-2xl  h-100">
              <div className="p-4"> 
              <h5 className="text-[#599731] font-bold text-xl ">Notifications</h5>

              <div className="bg-gray-200 p-4 mt-4 rounded-lg">
                <p>There are no new notifications that need your
                attention at the moment!</p>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
