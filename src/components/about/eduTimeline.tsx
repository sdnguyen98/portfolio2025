import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const EduTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineDescription> Sept 2018 - Jun 2022 </TimelineDescription>
          <TimelineTitle>Oregon State University</TimelineTitle>
          <TimelineDescription>Corvallis, OR — B.S. in Computer Science </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineDescription> Sept 2017 - June 2018 </TimelineDescription>
          <TimelineTitle>Portland State University</TimelineTitle>
          <TimelineDescription>Portland, OR — Transfer Degree</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem></TimelineItem>
    </Timeline>
  );
};

export default EduTimeline;
