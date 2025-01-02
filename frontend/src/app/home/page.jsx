import MainStoryCard from "@/components/main-story-card";
import { data } from "@/lib/data";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <MainStoryCard user={data.user} />
        <MainStoryCard user={data.user} />
        <MainStoryCard user={data.user} />
        <MainStoryCard user={data.user} />
        <MainStoryCard user={data.user} />
      </div>
    </div>
);
}
