'use client';
import { useEffect, useState } from 'react';

export const Projects = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
        {data.projects.map((project: any, index: number) => (
          <div key={project.name} className='projectsDiv'>
            <h2 className="projectTitle">{project.name}</h2>
            <p className='projectDescription'>{project.desc}</p>
            <a className='downloadButton' href={project.downloadlnk}>{project.downloadButton}</a>
          </div>
        ))}
    </div>
  );
}