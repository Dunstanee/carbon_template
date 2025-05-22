import UserInsightChart from "../charts/UserInsightChart";

export default function UserInsight() {
  return (
    <div className="card card-body flex-1">
        <div>
        <h2 className="text-xl font-semibold">User Insight</h2>
        <span className="text-xs text-gray-500 mr-2">856 total users</span>
        </div>
        <UserInsightChart />
    </div>
  )
}
