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

const WorkTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineDescription>Mar 2023 - Present</TimelineDescription>
          <TimelineTitle>Freelance Software Developer</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineDescription>Jun 2022 - Feb 2023</TimelineDescription>
          <TimelineTitle>Web Developer Lead</TimelineTitle>
          <TimelineDescription>Oregon State University COE</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem></TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineDescription>Mar 2021 - Jun 2022</TimelineDescription>
          <TimelineTitle>Web Developer</TimelineTitle>
          <TimelineDescription>Oregon State University COE</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default WorkTimeline;
