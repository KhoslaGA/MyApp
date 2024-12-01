import Image from "next/image";
import blogSmallImage1 from "@/assets/img/blog/blog__small__1.png";
import blogSmallImage2 from "@/assets/img/blog/blog__small__2.png";
import blogSmallImage3 from "@/assets/img/blog/blog__small__3.png";
import getAllBlogs from "@/libs/getAllBlogs";
import Link from "next/link";
import { useParams } from "next/navigation";

// const RecentPosts = () => {
//   const { id: currentId } = useParams();
//   const blogs = getAllBlogs();
//   const blog = blogs.find(({ id }) => id === parseInt(currentId));
//   const {
//     id,
//     title,
//     img,
//     desc,
//     tag,
//     category,
//     day,
//     publishDate,
//     date,
//     duration,
//     heading2,
//     content1,
//     content2,
//     content3,
//     content4,
//     content5,
//     content6,
//     content7,
//     point1,
//     point2,
//     point3,
//     point4,
//     point5,
//     shareLinks,
//   } = blog;

//   return (
//     <div
//       className="sidebar__widget"
//       data-aos="fade-up"
//       data-aos-duration="1500"
//     >
//       <div className="sidebar__title">
//         <h5>Recent Post:</h5>
//       </div>
//       <div className="sidebar__post">
//         <ul>
//           <li>
//             <Link href="/blogs/1">
//               <div className="sidebar__post__img">
//                 <Image src={blogSmallImage1} alt="" />
//               </div>
//               <div className="sidebar__post__text">
//                 <h6>{heading2}</h6>
//                 <span className="text__gradient">02 Dec, 2024</span>
//               </div>
//             </Link>
//           </li>

//           <li>
//             <Link href="/blogs/2">
//               <div className="sidebar__post__img">
//                 <Image src={blogSmallImage2} alt="" />
//               </div>
//               <div className="sidebar__post__text">
//                 <h6></h6>
//                 <span className="text__gradient">02 Dec, 2024</span>
//               </div>
//             </Link>
//           </li>

//           <li>
//             <Link href="/blogs/3">
//               <div className="sidebar__post__img">
//                 <Image src={blogSmallImage3} alt="" />
//               </div>
//               <div className="sidebar__post__text">
//                 <h6></h6>
//                 <span className="text__gradient">02 Dec, 2024</span>
//               </div>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

const RecentPosts = () => {
  const { id: currentId } = useParams();
  const blogs = getAllBlogs();
  const currentBlogId = parseInt(currentId);

  // Filter out the current blog from the list of recent posts
  const recentPosts = blogs
    .filter(({ id }) => id !== currentBlogId)
    .slice(0, 3); // Show only 3 recent posts

  return (
    <div
      className="sidebar__widget"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="sidebar__title">
        <h5>Recent Posts:</h5>
      </div>
      <div className="sidebar__post">
        <ul>
          {recentPosts.map((post, idx) => (
            <li key={post.id}>
              <Link href={`/blogs/${post.id}`}>
                <div className="sidebar__post__img">
                  <Image
                    src={
                      idx === 0
                        ? blogSmallImage1
                        : idx === 1
                        ? blogSmallImage2
                        : blogSmallImage3
                    }
                    alt={`Recent Post ${idx + 1}`}
                  />
                </div>
                <div className="sidebar__post__text">
                  <h6>{post.title}</h6>
                  <span className="text__gradient">{post.publishDate}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentPosts;
