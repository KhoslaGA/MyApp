"use client";
import { useCommonContext } from "@/providers/CommonContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const BlogCategories = () => {
  const currentCategory = useSearchParams().get("category");
  const { sidebar } = useCommonContext();
  // const categories = [
  //   {
  //     id: 1,
  //     name: "Strategic Planning",
  //   },
  //   {
  //     id: 2,
  //     name: "Web Design",
  //   },
  //   {
  //     id: 3,
  //     name: "SEO Services",
  //   },
  //   {
  //     id: 4,
  //     name: "Content Creation",
  //   },
  //   {
  //     id: 5,
  //     name: "PPC Advertising",
  //   },
  //   {
  //     id: 6,
  //     name: "Web Development",
  //   },
  // ];
  const categories = [
    {
      id: 1,
      name: "Supply Chain Optimization",
    },
    {
      id: 2,
      name: "Retention Strategies",
    },
    {
      id: 3,
      name: "AI Marketing",
    },
    {
      id: 4,
      name: "Retail Strategy",
    },
    {
      id: 5,
      name: "Eco-Friendly Business",
    },
    {
      id: 6,
      name: "Digital Marketing",
    },
    {
      id: 7,
      name: "Data Science",
    },
    {
      id: 8,
      name: "Business Growth",
    },
    {
      id: 9,
      name: "Leadership",
    },
  ];

  return (
    <div
      className="sidebar__widget"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="sidebar__title">
        <h5>{sidebar === "service" ? "All Services:" : "Post category:"}</h5>
      </div>
      <div className="sidebar__list">
        <ul>
          {categories?.map(({ id, name }, idx) => (
            <li key={idx}>
              <Link
                className={`sidebar__common__input ${
                  currentCategory === name.toLowerCase().split(" ").join("-")
                    ? "active"
                    : ""
                }`}
                href={`/${
                  sidebar === "service" ? "services" : "blogs"
                }?category=${name.toLocaleLowerCase().split(" ").join("-")}`}
              >
                {name}
                <i className="icofont-rounded-right"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogCategories;
