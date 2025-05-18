
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
            <Tabs defaultValue="work" className="w-[800px] p-8">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="work">Work Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                    <Card>
                        <CardTitle>Work Experience</CardTitle>
                        <CardContent>
                            <WorkTimeline />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="education">
                    <Card>
                        <CardTitle>Education</CardTitle>
                        <CardContent>
                            <EduTimeline />
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>


    );
};

export default ExperienceTabs;