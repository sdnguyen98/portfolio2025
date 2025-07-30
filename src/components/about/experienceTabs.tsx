import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WorkTimeline from "./workTimeline";
import EduTimeline from "./eduTimeline";
const ExperienceTabs = () => {
    return (
        <Tabs
            defaultValue="work"
            className="w-full max-w-[800px] mx-auto px-2 sm:px-4 md:px-8 py-4"
        >
            <TabsList className="grid w-full grid-cols-2 gap-2">
                <TabsTrigger value="work">Work Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work">
                <Card>
                    <CardTitle className="text-center">Work Experience</CardTitle>
                    <CardContent>
                        <WorkTimeline />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="education">
                <Card>
                    <CardTitle className="text-center">Education</CardTitle>
                    <CardContent>
                        <EduTimeline />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

export default ExperienceTabs;