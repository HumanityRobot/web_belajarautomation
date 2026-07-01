import WelcomeBanner from "./WelcomeBanner";
import ProgressCard from "../cards/ProgressCard";
import ContinueLearningCard from "../cards/ContinueLearningCard";

export default function DashboardSection() {
    return (
        <div className="grid grid-cols-12 gap-6">

            {/* Welcome */}
            <div className="col-span-8">
                <WelcomeBanner />
            </div>

            {/* Roadmap Placeholder */}
            <div className="col-span-4 rounded-3xl border bg-white p-6 shadow-sm">
                Roadmap Card
            </div>

            {/* Progress */}
            <div className="col-span-4">
                <ProgressCard />
            </div>

            {/* Continue Learning */}
            <div className="col-span-4">
                <ContinueLearningCard />
            </div>

            {/* Activity */}
            <div className="col-span-4 rounded-3xl border bg-white p-6 shadow-sm">
                Activity
            </div>

            {/* Category */}
            <div className="col-span-12 rounded-3xl border bg-white p-6 shadow-sm">
                Category Section
            </div>

        </div>
    );
}