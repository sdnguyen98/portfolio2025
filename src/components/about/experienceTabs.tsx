import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkTimeline from "./workTimeline";
import EduTimeline from "./eduTimeline";

const ExperienceTabs = () => {
  return (
    <Tabs defaultValue="work" className="w-full max-w-full sm:max-w-[600px] md:max-w-[800px] mx-auto px-1 sm:px-4 py-4 sm:py-6 md:py-8">
      <TabsList className="grid w-full grid-cols-2 gap-1 sm:gap-2 h-auto">
        <TabsTrigger value="work" className="text-xs sm:text-sm md:text-base px-2 sm:px-4 py-2 whitespace-nowrap">
          Work Experience
        </TabsTrigger>
        <TabsTrigger value="education" className="text-xs sm:text-sm md:text-base px-2 sm:px-4 py-2 whitespace-nowrap">
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Card>
          <CardTitle className="text-center p-2 sm:p-4 text-base sm:text-xl md:text-2xl">Work Experience</CardTitle>
          <CardContent className="px-1 sm:px-2 md:px-6 py-2 sm:py-4">
            <WorkTimeline />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="education">
        <Card>
          <CardTitle className="text-center p-2 sm:p-4 text-base sm:text-xl md:text-2xl">Education</CardTitle>
          <CardContent className="px-1 sm:px-2 md:px-6 py-2 sm:py-4">
            <EduTimeline />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ExperienceTabs;
