import ActiveProjectSections from "../sections/ActiveProjectSections";
import ProjectOverviewSection from "../sections/ProjectOverviewSection";
import StatisticsSection from "../sections/StatisticsSection";
import UserInsight from "../sections/UserInsight";


export default function Dashboard() {
  return (
    <>
    <div className="card card-body mb-3">
    <StatisticsSection />
    </div>
    <div className="card card-body mb-3">
        <ProjectOverviewSection />
    </div>

    <div className="flex gap-3 flex-wrap">
        <UserInsight />
        <ActiveProjectSections />
    </div>
    </>
  )
}
