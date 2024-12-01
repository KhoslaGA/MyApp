"use client";
import ProjectSidebar from "@/components/shared/sidebars/ProjectSidebar";
import getAllProjects from "@/libs/getAllProjects";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProjectDetalisPrimary = () => {
  const projects = getAllProjects();
  const totalProjects = projects?.length;
  const { id: currnetIdString } = useParams();
  const currentId = currnetIdString ? parseInt(currnetIdString) : null;
  const currentProjects = projects?.filter(({ id }) =>
    currentId > 3 && currentId < 7
      ? id > 3 && id < 7
      : currentId === 1
      ? id < 4
      : currentId === 3
      ? (id > 1 && id < 4) || id === 7
      : currentId === 7
      ? id === 3 || (id > 6 && id < 9)
      : currentId === totalProjects
      ? id > currentId - 3
      : id > currentId - 2 && id < currentId + 2
  );
  const [currentProject, setCurrentProject] = useState(
    currentProjects?.find(({ id }) => id === currentId)
  );
  const { title, about, challenges } = currentProject;
  return (
    <div className="project__details sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="project__details__bottom__border">
          <div className="row">
            <div className="col-12">
              {" "}
              {/* Make the column span full width */}
              <div className="project__details__wraper">
                <div
                  className="projects__tap__wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div
                    className="tab-content tab__content__wrapper"
                    id="myTabContent"
                  >
                    {currentProjects?.map(({ img, detailsImg, id }, idx) => (
                      <div
                        key={idx}
                        className={`tab-pane fade ${
                          id === currentId ? "active show" : ""
                        }`}
                        id={`projects__${id}`}
                        role="tabpanel"
                        aria-labelledby={`projects__${id}`}
                      >
                        <div className="projects__img">
                          <Image src={detailsImg} alt="" placeholder="blur" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <ul
                        className="nav projects__nav__wrap"
                        id="myTab"
                        role="tablist"
                      >
                        {currentProjects?.map((project, idx) => {
                          const { img, detailsImg, id } = project;
                          return (
                            <li
                              onClick={() => setCurrentProject(project)}
                              key={idx}
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className={`projects__tab__link ${
                                  id === currentId ? "active" : ""
                                }`}
                                data-bs-toggle="tab"
                                data-bs-target={`#projects__${id}`}
                              >
                                <Image src={detailsImg} alt="projectsimg" />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="service__details__heading"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h4>{title}</h4>
                </div>
                <div
                  className="service__details__text"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <p>{about}</p>
                </div>
                <div
                  className="project__details__challenges"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="project__details__challenges__heading">
                    <h6>Project Challenges:</h6>
                  </div>
                  <p>{challenges}</p>
                </div>
                <div
                  className="project__details__button"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <Link
                    className={`default__button ${
                      currentId === 1 ? "disabled" : ""
                    }`}
                    href={`/projects/${
                      currentId === 1 ? totalProjects : currentId - 1
                    }`}
                  >
                    PREV.PROJECT
                  </Link>

                  {/* VIEW LIVE Button */}
                  <Link
                    className="default__button"
                    href={currentProject?.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW LIVE
                  </Link>

                  {/* NEXT.PROJECT Button */}
                  <Link
                    className={`default__button ${
                      currentId === totalProjects ? "disabled" : ""
                    }`}
                    href={`/projects/${
                      currentId === totalProjects ? 1 : currentId + 1
                    }`}
                  >
                    NEXT.PROJECT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetalisPrimary;
