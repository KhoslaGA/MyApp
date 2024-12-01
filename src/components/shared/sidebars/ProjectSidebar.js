import React, { useState, useEffect } from "react";
import Download from "./widgets/Download";
import { useParams } from "next/navigation";
import getAllProjectInfo from "@/libs/getAllProjectInfo";

const ProjectSidebar = ({
  date = "N/A",
  location = "N/A",
  url = "N/A",
  duration = "N/A",
}) => {
  const projects = getAllProjectInfo(); // Fetch all project info
  const { id: currentIdString } = useParams();
  const currentId = currentIdString ? parseInt(currentIdString) : null;

  const getFilteredProjects = (currentId, projects) => {
    if (!currentId || !projects) return [];
    if (currentId > 3 && currentId < 7)
      return projects.filter(({ id }) => id > 3 && id < 7);
    if (currentId === 1) return projects.filter(({ id }) => id < 4);
    if (currentId === 3)
      return projects.filter(({ id }) => (id > 1 && id < 4) || id === 7);
    if (currentId === 7)
      return projects.filter(({ id }) => id === 3 || (id > 6 && id < 9));
    return projects.filter(
      ({ id }) => id > currentId - 2 && id < currentId + 2
    );
  };

  const currentProjects = getFilteredProjects(currentId, projects);

  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    if (currentProjects) {
      setCurrentProject(
        currentProjects.find(({ id }) => id === currentId) || null
      );
    }
  }, [currentProjects, currentId]);

  return (
    <div className="col-xl-4 col-lg-4 col-md-12 col-12">
      <div className="project__details__sidebar sidebar">
        <div
          className="project__details__sidebar__info"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="project__details__sidebar__heading">
            <h6>Project info:</h6>
          </div>
          <div className="project__details__sidebar__list">
            <ul>
              <li>
                <span>Date:</span>
                <p>{date}</p>
              </li>
              <li>
                <span>Website:</span>
                <p>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </p>
              </li>
              <li>
                <span>Location:</span>
                <p>{location}</p>
              </li>
              <li>
                <span>Duration:</span>
                <p>{duration}</p>
              </li>
            </ul>
          </div>
          <div className="headerarea__icon project__details__sidebar__icon"></div>
        </div>

        <div
          className="project__details__get__quote"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="project__details__sidebar__heading get__quote__heading">
            <h6>Get a Quote:</h6>
          </div>
          <div className="project__details__get__quote__input">
            <input
              className="sidebar__common__input"
              type="text"
              placeholder="Name:"
            />
            <input
              className="sidebar__common__input"
              type="text"
              placeholder="Email:"
            />
            <input
              className="sidebar__common__input"
              type="text"
              placeholder="Phone:"
            />
            <textarea
              className="sidebar__common__input"
              cols="30"
              rows="10"
              placeholder="Notes:"
            />
          </div>
          <div className="project__details__get__quote__button">
            <button type="submit" className="default__button">
              SEND MESSAGE
            </button>
          </div>
        </div>

        <Download />
      </div>
    </div>
  );
};

export default ProjectSidebar;
