"use client";
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import useSearch from "@/hooks/useSearch";
import getAllBlogs from "@/libs/getAllBlogs";
import CommonContext from "@/providers/CommonContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetailsPrimary = () => {
  const { id: currentId } = useParams();

  const blogs = getAllBlogs();
  const blog = blogs.find(({ id }) => id === parseInt(currentId));
  const {
    id,
    title,
    img,
    desc,
    tag,
    category,
    day,
    publishDate,
    date,
    duration,
    heading2,
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content7,
    point1,
    point2,
    point3,
    point4,
    point5,
    shareLinks,
  } = blog;

  const {
    searchString,
    searchedItems,
    previousSearchedItems,
    isShowSearch,
    handleSearch,
    handleSearchString,
    startSearch,
    closeSearch,
    isShowQuickSearchResult,
    setIsShowQuickSearchResult,
  } = useSearch(blogs, "/blogs");
  return (
    <div className="blog__details sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <CommonContext
              value={{
                searchedItems,
                handleSearch,
                handleSearchString,
                startSearch,
                closeSearch,
                isShowSearch,
                isShowQuickSearchResult,
                setIsShowQuickSearchResult,
              }}
            >
              <BlogSidebar />
            </CommonContext>
          </div>
          <div
            className="col-xl-8 col-lg-8 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="blog__details__wrapper">
              <div
                className="blog__details__img__wrapper"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="blog__details__img">
                  <Image src={img} alt="" placeholder="blur" />
                </div>
                <div className="blog__details__small__button">
                  <span>{publishDate}</span>
                </div>
              </div>

              <div
                className="blog__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>{heading2}</h4>
              </div>
              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{content1}</p>
              </div>

              <div
                className="blog__details__list"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <ul>
                  <li>{point1}</li>
                  <li>{point2}</li>
                  <li>{point3}</li>
                  <li>{point4}</li>
                  <li>{point5}</li>
                </ul>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{content2}</p>
              </div>

              <div
                className="blog__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>{heading2}</h4>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{content3}</p>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{content4}</p>
              </div>

              <div
                className="blog__details__text blog__details__text--2"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{content5}</p>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{content6}</p>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{content6}</p>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{content7}</p>
              </div>

              <div
                className="blog__details__social__icon"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <ul>
                  <div className="blog__details__share">
                    <span>Share Post:</span>
                  </div>

                  <li>
                    <a
                      className="common__gradient__bg"
                      href="https://www.facebook.com/"
                    >
                      <span>
                        <i className="icofont-facebook"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="common__gradient__bg" href="https://x.com/">
                      <span>
                        <i className="icofont-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="common__gradient__bg"
                      href="https://www.skype.com/"
                    >
                      <span>
                        <i className="icofont-skype"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="common__gradient__bg"
                      href="https://www.linkedin.com/"
                    >
                      <span>
                        <i className="icofont-linkedin"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPrimary;
