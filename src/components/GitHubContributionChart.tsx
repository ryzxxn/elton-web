import React, { useEffect, useRef } from 'react';
// @ts-ignore
import GitHubCalendar from 'github-calendar';


interface GitHubContributionChartProps {
  username: string;
}

const GitHubContributionChart: React.FC<GitHubContributionChartProps> = ({ username }) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, username);
    }
  }, [username]);

  return <div className='calendar' ref={calendarRef}></div>;
}

export default GitHubContributionChart;
