import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkTimeline from "./workTimeline";
import EduTimeline from "./eduTimeline";
const ExperienceTabs = () => {
  return (
    <Tabs defaultValue="work" className="w-full max-w-[800px] mx-auto px-4 py-8 md:px-8">
      <TabsList className="grid w-full grid-cols-2 gap-2">
        <TabsTrigger value="work" className="text-sm md:text-base">
          Work Experience
        </TabsTrigger>
        <TabsTrigger value="education" className="text-sm md:text-base">
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Card>
          <CardTitle className="text-center p-4 text-xl md:text-2xl">Work Experience</CardTitle>
          <CardContent className="px-2 md:px-6">
            <WorkTimeline />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="education">
        <Card>
          <CardTitle className="text-center p-4 text-xl md:text-2xl">Education</CardTitle>
          <CardContent className="px-2 md:px-6">
            <EduTimeline />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ExperienceTabs;
