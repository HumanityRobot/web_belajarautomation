import WelcomeBanner from "@/components/dashboard/sections/WelcomeBanner";
import CategorySection from "@/components/dashboard/sections/CategorySection";

import ProgressCard from "../cards/ProgressCard";
import ContinueLearningCard from "../cards/ContinueLearningCard";
import ActivityCard from "../cards/ActivityCard";

import RoadmapCard from "@/components/roadmap/RoadmapCard";

export default function DashboardSection() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Hero */}
      <div className="col-span-8">
        <WelcomeBanner />
      </div>

      {/* Roadmap */}
      <div className="col-span-4">
        <RoadmapCard />
      </div>

      {/* Overview */}
      <div className="col-span-4">
        <ProgressCard />
      </div>

      <div className="col-span-4">
        <ContinueLearningCard />
      </div>

      <div className="col-span-4">
        <ActivityCard />
      </div>

      {/* Categories */}
      <div className="col-span-12">
        <CategorySection />
      </div>
    </div>
  );
}