import ActiveProjectMap from "../map/ActiveProjectMap";



export default function ActiveProjectSections() {
    return (
        <div className="card card-body flex-1">
            <div>
                <h2 className="text-xl font-semibold">Active Projects</h2>
            </div>
            <ActiveProjectMap />
        </div>
    )
}