'use client';
import { useEffect, useState } from 'react';



type Project = {
  name: string;
  desc: string;
  downloadButton: string;
  downloadlnk: string;
};

type ProjectData = {
  projects: Project[];
};


export const Projects = () => {
  const [data, setData] = useState<ProjectData | null>(null);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
        {data.projects.map((project) => (
          <div key={project.name} className='projectsDiv'>
            <h2 className="projectTitle">{project.name}</h2>
            <p className='projectDescription'>{project.desc}</p>
            <a className='downloadButton' href={project.downloadlnk}>{project.downloadButton}</a>
          </div>
        ))}
    </div>
  );
}