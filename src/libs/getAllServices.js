import serviceImage1 from "@/assets/img/service/service__1.png";
import serviceImage2 from "@/assets/img/service/service__2.png";
import serviceImage3 from "@/assets/img/service/service__3.png";
import serviceImage4 from "@/assets/img/service/service__4.png";
import serviceImage6 from "@/assets/img/service/service__6.png";
import serviceImage7 from "@/assets/img/service/service__7.png";
import serviceImage8 from "@/assets/img/service/service__8.png";
import serviceImage9 from "@/assets/img/service/service__9.png";
import serviceImage10 from "@/assets/img/service/service__10.png";
import serviceImage11 from "@/assets/img/service/service__11.png";
import serviceImage12 from "@/assets/img/service/service__12.png";
import serviceImage13 from "@/assets/img/service/service__13.png";
import serviceImage14 from "@/assets/img/service/service__14.png";
import serviceImage15 from "@/assets/img/service/service__15.png";
import serviceImage16 from "@/assets/img/service/service__16.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";
import lifecycleImage1 from "@/assets/img/Lifecycle/Brand_strategy.png";
import lifecycleImage2 from "@/assets/img/Lifecycle/WEB_DESIGN.png";
import lifecycleImage3 from "@/assets/img/Lifecycle/SEO_OPTIMIZE.png";
import lifecycleImage4 from "@/assets/img/Lifecycle/Content_Creation.png";
import lifecycleImage5 from "@/assets/img/Lifecycle/PPG_ADS.png";
import lifecycleImage6 from "@/assets/img/Lifecycle/WEB_DEVELOPMENT.png";
const getAllServices = () => {
  const services = [
    {
      id: 1,
      title: "Brand Strategy",
      desc: "We help businesses grow by developing customized digital marketing strategies tailored to your unique needs.",
      planningText: `
        <h4>1. Market Research & Analysis</h4>
        <p>We start by analyzing the market, identifying competitors, and understanding your target audience...</p>
        <h4>2. Brand Positioning & Messaging</h4>
        <p>We develop a unique value proposition (UVP) and craft messaging that speaks directly to your audience’s needs...</p>
        <h4>3. Creative Development</h4>
        <p>Our creative team brings your brand vision to life by designing logos...</p>
        <h4>4. Strategic Roadmap Implementation</h4>
        <p>With your brand's vision, positioning, and messaging in place, we execute the strategy across all marketing platforms...</p>
        <h4>5. Brand Monitoring & Optimization</h4>
        <p>We monitor how your brand is perceived, gathering insights and making data-driven decisions...</p>
        <h4>6. Continuous Brand Improvement</h4>
        <p>Based on ongoing results, we refine the brand strategy...</p>
      `,
      ImplementText1:
        "At Webhub4U, we collaborate with you to analyze your brand’s current position...",
      planningText: lifecycleImage1,
      ImplementText2:
        "Our services include brand positioning, market research, and customer persona development...",
      category: "Strategic Planning",
      duration: "1500",
      lifecycleImage: lifecycleImage1,
      img: serviceImage1,
    },
    {
      id: 2,
      title: "Web Design",
      desc: "Our team ensures your brand remains active and engaging on social media platforms, building your online presence.",
      planningText: `
     <h4>1. Research & Discovery</h4>
      <p>We begin by gaining a deep understanding of your business, goals, target audience, and user expectations...</p>
     <h4>2. Wireframing & Prototyping</h4>
       <p>Our team creates detailed wireframes and prototypes to visualize the layout of the website...</p>
      <h4>3. Design & Development</h4>
       <p>We focus on both UI/UX design and responsive development, ensuring a seamless experience across devices...</p>
     <h4>4. Content Integration</h4>
       <p>We integrate high-quality content that aligns with your branding and SEO requirements...</p>
      <h4>5. Testing & Launch</h4>
      <p>Thorough testing is done across devices to ensure compatibility before launching...</p>
      <h4>6. Ongoing Maintenance & Updates</h4>
    <p>Post-launch, we ensure the website remains optimized and updated...</p>
     `,
      ImplementText1:
        "We understand the importance of a visually appealing and functional website. We specialize in crafting custom websites...",
      ImplementText2:
        "Our web design services include wireframing, UI/UX design, responsive web development, and content integration.",
      img: serviceImage2,
      category: "Brand Awareness",
      duration: "1700",
      lifecycleImage: lifecycleImage2,
    },
    {
      id: 3,
      title: "SEO Services",
      desc: "We optimize your website to improve search engine rankings and increase organic traffic, driving more leads.",
      planningText: `
      <h4>1. Keyword Research & Analysis</h4>
      <p>At this stage, we identify the most relevant and valuable keywords for your business...</p>
      <h4>2. On-Page Optimization</h4>
      <p>This step focuses on optimizing the content and structure of your website to make it more search engine-friendly...</p>
      <h4>3. Content Creation & Optimization</h4>
      <p>Quality content is key to driving organic traffic. We create valuable content aligned with your target keywords...</p>
      <h4>4. Technical SEO</h4>
      <p>At this stage, we ensure that the technical aspects of your website are optimized for search engines...</p>
      <h4>5. Off-Page SEO</h4>
      <p>This step involves building your website’s authority and reputation through link-building strategies...</p>
      <h4>6. Performance Monitoring & Reporting</h4>
      <p>After implementing SEO strategies, we continuously monitor your website’s performance...</p>
    `,

      detailsImg: projectImage13,
      img: serviceImage3,
      category: "SEO Optimization",
      duration: "1900",
      lifecycleImage: lifecycleImage3,
    },
    {
      id: 4,
      title: "Content Creation",
      desc: "From blog posts to videos, our content creators produce high-quality content that resonates with your audience.",
      planningText: `
      <h4>1. Content Research & Strategy</h4>
      <p>We research the most engaging topics that resonate with your target audience...</p>
      <h4>2. Content Development</h4>
      <p>Our content creators craft compelling blog posts, videos, and other media that align with your brand and messaging...</p>
      <h4>3. SEO Integration</h4>
      <p>We ensure that each piece of content is optimized for SEO, using targeted keywords and relevant tags...</p>
      <h4>4. Distribution & Promotion</h4>
      <p>We share your content on social media platforms and other channels to maximize reach...</p>
      <h4>5. Performance Tracking</h4>
      <p>We track how your content performs in terms of engagement, shares, and conversions...</p>
      <h4>6. Refinement & Scaling</h4>
      <p>Based on performance insights, we refine and scale content to improve results...</p>
    `,

      detailsImg: projectImage12,
      img: serviceImage4,
      category: "Content Marketing",
      duration: "2100",
      lifecycleImage: lifecycleImage4,
    },
    {
      id: 5,
      title: "PPC Advertising",
      desc: "Boost your sales and brand visibility through targeted Pay-Per-Click campaigns on Google and social media platforms.",
      planningText: `
      <h4>1. Campaign Strategy & Planning</h4>
      <p>We start by understanding your business goals and target audience to create a PPC campaign strategy...</p>
      <h4>2. Ad Creation & Copywriting</h4>
      <p>Our team creates compelling ad copy and designs ads that attract attention...</p>
      <h4>3. Bid Management & Optimization</h4>
      <p>We optimize bidding strategies for the best ROI...</p>
      <h4>4. Audience Targeting & Retargeting</h4>
      <p>We focus on reaching the right audience using precise targeting methods...</p>
      <h4>5. Performance Monitoring & Analysis</h4>
      <p>We track performance metrics like CTR and conversion rates...</p>
      <h4>6. Reporting & Adjustments</h4>
      <p>We provide reports and adjust campaigns based on insights...</p>
    `,

      detailsImg: projectImage11,
      img: serviceImage6,
      category: "Paid Media",
      duration: "2400",
      lifecycleImage: lifecycleImage5,
    },
    {
      id: 6,
      title: "Web Development",
      desc: "We help you define and build a strong brand identity, ensuring your message is clear across all marketing channels.",
      planningText: `
      <h4>1. Website Planning & Research</h4>
      <p>We begin by understanding your business needs, brand, and target audience...</p>
      <h4>2. Wireframing & Design</h4>
      <p>We create wireframes and initial designs that align with your branding...</p>
      <h4>3. Development & Coding</h4>
      <p>Once the design is approved, we move to development using the latest technologies...</p>
      <h4>4. Testing & Quality Assurance</h4>
      <p>We thoroughly test for performance and compatibility across all devices...</p>
      <h4>5. Launch & Deployment</h4>
      <p>We deploy the website to a live server after rigorous testing...</p>
      <h4>6. Ongoing Maintenance & Support</h4>
      <p>We provide ongoing maintenance to ensure your website remains secure and up-to-date...</p>
    `,

      detailsImg: projectImage15,
      img: serviceImage7,
      category: "Brand Strategy",
      duration: "2700",
      lifecycleImage: lifecycleImage6,
    },
    {
      id: 7,
      title: "Brand Strategy",
      desc: "We help businesses grow by developing customized digital marketing strategies tailored to your unique needs.",
      planningText: `
      <h4>1. Market Research & Analysis</h4>
      <p>We start by analyzing the market, identifying competitors, and understanding your target audience...</p>
      <h4>2. Brand Positioning & Messaging</h4>
      <p>We develop a unique value proposition (UVP) and craft messaging that speaks directly to your audience’s needs...</p>
      <h4>3. Creative Development</h4>
      <p>Our creative team brings your brand vision to life by designing logos...</p>
      <h4>4. Strategic Roadmap Implementation</h4>
      <p>With your brand's vision, positioning, and messaging in place, we execute the strategy across all marketing platforms...</p>
      <h4>5. Brand Monitoring & Optimization</h4>
      <p>We monitor how your brand is perceived, gathering insights and making data-driven decisions...</p>
      <h4>6. Continuous Brand Improvement</h4>
      <p>Based on ongoing results, we refine the brand strategy...</p>
    `,
      ImplementText1:
        "At Webhub4U, we collaborate with you to analyze your brand’s current position...",
      ImplementText2:
        "Our services include brand positioning, market research, and customer persona development...",
      category: "Strategic Planning",
      duration: "1500",
      lifecycleImage: lifecycleImage1,
      img: serviceImage8,
    },
    {
      id: 8,
      title: "Web Design",
      desc: "Our team ensures your brand remains active and engaging on social media platforms, building your online presence.",
      planningText: `
      <h4>1. Research & Discovery</h4>
      <p>We begin by gaining a deep understanding of your business, goals, target audience, and user expectations...</p>
      <h4>2. Wireframing & Prototyping</h4>
      <p>Our team creates detailed wireframes and prototypes to visualize the layout of the website...</p>
      <h4>3. Design & Development</h4>
      <p>We focus on both UI/UX design and responsive development, ensuring a seamless experience across devices...</p>
      <h4>4. Content Integration</h4>
      <p>We integrate high-quality content that aligns with your branding and SEO requirements...</p>
      <h4>5. Testing & Launch</h4>
      <p>Thorough testing is done across devices to ensure compatibility before launching...</p>
      <h4>6. Ongoing Maintenance & Updates</h4>
      <p>Post-launch, we ensure the website remains optimized and updated...</p>
    `,
      ImplementText1:
        "We understand the importance of a visually appealing and functional website. We specialize in crafting custom websites...",
      ImplementText2:
        "Our web design services include wireframing, UI/UX design, responsive web development, and content integration.",
      img: serviceImage9,
      category: "Brand Awareness",
      duration: "1700",
      lifecycleImage: lifecycleImage2,
    },
    {
      id: 9,
      title: "SEO Services",
      desc: "We optimize your website to improve search engine rankings and increase organic traffic, driving more leads.",
      planningText: `
      <h4>1. Keyword Research & Analysis</h4>
      <p>At this stage, we identify the most relevant and valuable keywords for your business...</p>
      <h4>2. On-Page Optimization</h4>
      <p>This step focuses on optimizing the content and structure of your website to make it more search engine-friendly...</p>
      <h4>3. Content Creation & Optimization</h4>
      <p>Quality content is key to driving organic traffic. We create valuable content aligned with your target keywords...</p>
      <h4>4. Technical SEO</h4>
      <p>At this stage, we ensure that the technical aspects of your website are optimized for search engines...</p>
      <h4>5. Off-Page SEO</h4>
      <p>This step involves building your website’s authority and reputation through link-building strategies...</p>
      <h4>6. Performance Monitoring & Reporting</h4>
      <p>After implementing SEO strategies, we continuously monitor your website’s performance...</p>
    `,
      ImplementText1:
        "We use advanced SEO techniques to ensure your website ranks higher on search engines, bringing in targeted traffic...",
      ImplementText2:
        "Our SEO services include keyword optimization, technical SEO, content creation, and backlink strategies.",
      detailsImg: projectImage13,
      img: serviceImage10,
      category: "SEO Optimization",
      duration: "1900",
      lifecycleImage: lifecycleImage3,
    },
    {
      id: 10,
      title: "Content Creation",
      desc: "From blog posts to videos, our content creators produce high-quality content that resonates with your audience.",
      planningText: `
      <h4>1. Content Research & Strategy</h4>
      <p>We research the most engaging topics that resonate with your target audience...</p>
      <h4>2. Content Development</h4>
      <p>Our content creators craft compelling blog posts, videos, and other media that align with your brand and messaging...</p>
      <h4>3. SEO Integration</h4>
      <p>We ensure that each piece of content is optimized for SEO, using targeted keywords and relevant tags...</p>
      <h4>4. Distribution & Promotion</h4>
      <p>We share your content on social media platforms and other channels to maximize reach...</p>
      <h4>5. Performance Tracking</h4>
      <p>We track how your content performs in terms of engagement, shares, and conversions...</p>
      <h4>6. Refinement & Scaling</h4>
      <p>Based on performance insights, we refine and scale content to improve results...</p>
    `,
      ImplementText1:
        "Our content creators focus on crafting content that drives engagement and conversion. From blog posts to videos, we ensure each piece delivers value.",
      ImplementText2:
        "We specialize in writing SEO-optimized content, developing multimedia content, and managing content distribution to grow your online presence.",
      detailsImg: projectImage12,
      img: serviceImage11,
      category: "Content Marketing",
      duration: "2100",
      lifecycleImage: lifecycleImage4,
    },
    {
      id: 11,
      title: "PPC Advertising",
      desc: "Boost your sales and brand visibility through targeted Pay-Per-Click campaigns on Google and social media platforms.",
      planningText: `
      <h4>1. Campaign Strategy & Planning</h4>
      <p>We start by understanding your business goals and target audience to create a PPC campaign strategy...</p>
      <h4>2. Ad Creation & Copywriting</h4>
      <p>Our team creates compelling ad copy and designs ads that attract attention...</p>
      <h4>3. Bid Management & Optimization</h4>
      <p>We optimize bidding strategies for the best ROI...</p>
      <h4>4. Audience Targeting & Retargeting</h4>
      <p>We focus on reaching the right audience using precise targeting methods...</p>
      <h4>5. Performance Monitoring & Analysis</h4>
      <p>We track performance metrics like CTR and conversion rates...</p>
      <h4>6. Reporting & Adjustments</h4>
      <p>We provide reports and adjust campaigns based on insights...</p>
    `,
      ImplementText1:
        "We use advanced targeting techniques to ensure that your ads reach the right audience...",
      ImplementText2:
        "Our PPC services include campaign management, ad copywriting, bid management, and real-time performance analysis.",
      detailsImg: projectImage11,
      img: serviceImage12,
      category: "Paid Media",
      duration: "2400",
      lifecycleImage: lifecycleImage5,
    },

    {
      id: 12,
      title: "Web Development",
      desc: "We help you define and build a strong brand identity, ensuring your message is clear across all marketing channels.",
      planningText: `
      <h4>1. Website Planning & Research</h4>
      <p>We begin by understanding your business needs, brand, and target audience...</p>
      <h4>2. Wireframing & Design</h4>
      <p>We create wireframes and initial designs that align with your branding...</p>
      <h4>3. Development & Coding</h4>
      <p>Once the design is approved, we move to development using the latest technologies...</p>
      <h4>4. Testing & Quality Assurance</h4>
      <p>We thoroughly test for performance and compatibility across all devices...</p>
      <h4>5. Launch & Deployment</h4>
      <p>We deploy the website to a live server after rigorous testing...</p>
      <h4>6. Ongoing Maintenance & Support</h4>
      <p>We provide ongoing maintenance to ensure your website remains secure and up-to-date...</p>
    `,
      ImplementText1:
        "We build websites that are scalable and secure, focusing on great user experience and SEO optimization.",
      ImplementText2:
        "Our web development services cover front-end, back-end, and full-stack development for all types of websites.",
      detailsImg: projectImage15,
      img: serviceImage13,
      category: "Brand Strategy",
      duration: "2700",
      lifecycleImage: lifecycleImage6,
    },
    {
      id: 13,
      title: "Brand Strategy",
      desc: "We help businesses grow by developing customized digital marketing strategies tailored to your unique needs.",
      planningText: `
      <h4>1. Market Research & Analysis</h4>
      <p>We start by analyzing the market, identifying competitors, and understanding your target audience...</p>
      <h4>2. Brand Positioning & Messaging</h4>
      <p>We develop a unique value proposition (UVP) and craft messaging that speaks directly to your audience’s needs...</p>
      <h4>3. Creative Development</h4>
      <p>Our creative team brings your brand vision to life by designing logos...</p>
      <h4>4. Strategic Roadmap Implementation</h4>
      <p>With your brand's vision, positioning, and messaging in place, we execute the strategy across all marketing platforms...</p>
      <h4>5. Brand Monitoring & Optimization</h4>
      <p>We monitor how your brand is perceived, gathering insights and making data-driven decisions...</p>
      <h4>6. Continuous Brand Improvement</h4>
      <p>Based on ongoing results, we refine the brand strategy...</p>
    `,
      ImplementText1:
        "At Webhub4U, we collaborate with you to analyze your brand’s current position...",
      ImplementText2:
        "Our services include brand positioning, market research, and customer persona development...",
      category: "Strategic Planning",
      duration: "1500",
      lifecycleImage: lifecycleImage1,
      img: serviceImage14,
    },
    {
      id: 14,
      title: "Web Design",
      desc: "Our team ensures your brand remains active and engaging on social media platforms, building your online presence.",
      planningText: `
      <h4>1. Research & Discovery</h4>
      <p>We begin by gaining a deep understanding of your business, goals, target audience, and user expectations...</p>
      <h4>2. Wireframing & Prototyping</h4>
      <p>Our team creates detailed wireframes and prototypes to visualize the layout of the website...</p>
      <h4>3. Design & Development</h4>
      <p>We focus on both UI/UX design and responsive development, ensuring a seamless experience across devices...</p>
      <h4>4. Content Integration</h4>
      <p>We integrate high-quality content that aligns with your branding and SEO requirements...</p>
      <h4>5. Testing & Launch</h4>
      <p>Thorough testing is done across devices to ensure compatibility before launching...</p>
      <h4>6. Ongoing Maintenance & Updates</h4>
      <p>Post-launch, we ensure the website remains optimized and updated...</p>
    `,
      ImplementText1:
        "We understand the importance of a visually appealing and functional website. We specialize in crafting custom websites...",
      ImplementText2:
        "Our web design services include wireframing, UI/UX design, responsive web development, and content integration.",
      img: serviceImage15,
      category: "Brand Awareness",
      duration: "1700",
      lifecycleImage: lifecycleImage2,
    },
    {
      id: 15,
      title: "SEO Services",
      desc: "We optimize your website to improve search engine rankings and increase organic traffic, driving more leads.",
      planningText: `
      <h4>1. Keyword Research & Analysis</h4>
      <p>At this stage, we identify the most relevant and valuable keywords for your business...</p>
      <h4>2. On-Page Optimization</h4>
      <p>This step focuses on optimizing the content and structure of your website to make it more search engine-friendly...</p>
      <h4>3. Content Creation & Optimization</h4>
      <p>Quality content is key to driving organic traffic. We create valuable content aligned with your target keywords...</p>
      <h4>4. Technical SEO</h4>
      <p>At this stage, we ensure that the technical aspects of your website are optimized for search engines...</p>
      <h4>5. Off-Page SEO</h4>
      <p>This step involves building your website’s authority and reputation through link-building strategies...</p>
      <h4>6. Performance Monitoring & Reporting</h4>
      <p>After implementing SEO strategies, we continuously monitor your website’s performance...</p>
    `,
      ImplementText1:
        "We use advanced SEO techniques to ensure your website ranks higher on search engines, bringing in targeted traffic...",
      ImplementText2:
        "Our SEO services include keyword optimization, technical SEO, content creation, and backlink strategies.",
      detailsImg: projectImage13,
      img: serviceImage16,
      category: "SEO Optimization",
      duration: "1900",
      lifecycleImage: lifecycleImage3,
    },
    {
      id: 16,
      title: "Content Creation",
      desc: "From blog posts to videos, our content creators produce high-quality content that resonates with your audience.",
      planningText: `
      <h4>1. Content Research & Strategy</h4>
      <p>We research the most engaging topics that resonate with your target audience...</p>
      <h4>2. Content Development</h4>
      <p>Our content creators craft compelling blog posts, videos, and other media that align with your brand and messaging...</p>
      <h4>3. SEO Integration</h4>
      <p>We ensure that each piece of content is optimized for SEO, using targeted keywords and relevant tags...</p>
      <h4>4. Distribution & Promotion</h4>
      <p>We share your content on social media platforms and other channels to maximize reach...</p>
      <h4>5. Performance Tracking</h4>
      <p>We track how your content performs in terms of engagement, shares, and conversions...</p>
      <h4>6. Refinement & Scaling</h4>
      <p>Based on performance insights, we refine and scale content to improve results...</p>
    `,
      ImplementText1:
        "Our content creators focus on crafting content that drives engagement and conversion. From blog posts to videos, we ensure each piece delivers value.",
      ImplementText2:
        "We specialize in writing SEO-optimized content, developing multimedia content, and managing content distribution to grow your online presence.",
      detailsImg: projectImage12,
      img: serviceImage1,
      category: "Content Marketing",
      duration: "2100",
      lifecycleImage: lifecycleImage4,
    },
    {
      id: 17,
      title: "PPC Advertising",
      desc: "Boost your sales and brand visibility through targeted Pay-Per-Click campaigns on Google and social media platforms.",
      planningText: `
      <h4>1. Campaign Strategy & Planning</h4>
      <p>We start by understanding your business goals and target audience to create a PPC campaign strategy...</p>
      <h4>2. Ad Creation & Copywriting</h4>
      <p>Our team creates compelling ad copy and designs ads that attract attention...</p>
      <h4>3. Bid Management & Optimization</h4>
      <p>We optimize bidding strategies for the best ROI...</p>
      <h4>4. Audience Targeting & Retargeting</h4>
      <p>We focus on reaching the right audience using precise targeting methods...</p>
      <h4>5. Performance Monitoring & Analysis</h4>
      <p>We track performance metrics like CTR and conversion rates...</p>
      <h4>6. Reporting & Adjustments</h4>
      <p>We provide reports and adjust campaigns based on insights...</p>
    `,
      ImplementText1:
        "We use advanced targeting techniques to ensure that your ads reach the right audience...",
      ImplementText2:
        "Our PPC services include campaign management, ad copywriting, bid management, and real-time performance analysis.",
      detailsImg: projectImage11,
      img: serviceImage2,
      category: "Paid Media",
      duration: "2400",
      lifecycleImage: lifecycleImage5,
    },
    {
      id: 18,
      title: "Web Development",
      desc: "We help you define and build a strong brand identity, ensuring your message is clear across all marketing channels.",
      planningText: `
      <h4>1. Website Planning & Research</h4>
      <p>We begin by understanding your business needs, brand, and target audience...</p>
      <h4>2. Wireframing & Design</h4>
      <p>We create wireframes and initial designs that align with your branding...</p>
      <h4>3. Development & Coding</h4>
      <p>Once the design is approved, we move to development using the latest technologies...</p>
      <h4>4. Testing & Quality Assurance</h4>
      <p>We thoroughly test for performance and compatibility across all devices...</p>
      <h4>5. Launch & Deployment</h4>
      <p>We deploy the website to a live server after rigorous testing...</p>
      <h4>6. Ongoing Maintenance & Support</h4>
      <p>We provide ongoing maintenance to ensure your website remains secure and up-to-date...</p>
    `,
      ImplementText1:
        "We build websites that are scalable and secure, focusing on great user experience and SEO optimization.",
      ImplementText2:
        "Our web development services cover front-end, back-end, and full-stack development for all types of websites.",
      detailsImg: projectImage15,
      img: serviceImage3,
      category: "Brand Strategy",
      duration: "2700",
      lifecycleImage: lifecycleImage6,
    },

    {
      id: 19,
      title: "Web Development",
      desc: "We help you define and build a strong brand identity, ensuring your message is clear across all marketing channels.",
      planningText: `
      <h4>1. Website Planning & Research</h4>
      <p>We begin by understanding your business needs, brand, and target audience...</p>
      <h4>2. Wireframing & Design</h4>
      <p>We create wireframes and initial designs that align with your branding...</p>
      <h4>3. Development & Coding</h4>
      <p>Once the design is approved, we move to development using the latest technologies...</p>
      <h4>4. Testing & Quality Assurance</h4>
      <p>We thoroughly test for performance and compatibility across all devices...</p>
      <h4>5. Launch & Deployment</h4>
      <p>We deploy the website to a live server after rigorous testing...</p>
      <h4>6. Ongoing Maintenance & Support</h4>
      <p>We provide ongoing maintenance to ensure your website remains secure and up-to-date...</p>
    `,
      ImplementText1:
        "We build websites that are scalable and secure, focusing on great user experience and SEO optimization.",
      ImplementText2:
        "Our web development services cover front-end, back-end, and full-stack development for all types of websites.",
      detailsImg: projectImage15,
      img: serviceImage4,
      category: "Brand Strategy",
      duration: "2700",
      lifecycleImage: lifecycleImage6,
    },
    {
      id: 20,
      title: "Brand Strategy",
      desc: "We help businesses grow by developing customized digital marketing strategies tailored to your unique needs.",
      planningText: `
      <h4>1. Market Research & Analysis</h4>
      <p>We start by analyzing the market, identifying competitors, and understanding your target audience...</p>
      <h4>2. Brand Positioning & Messaging</h4>
      <p>We develop a unique value proposition (UVP) and craft messaging that speaks directly to your audience’s needs...</p>
      <h4>3. Creative Development</h4>
      <p>Our creative team brings your brand vision to life by designing logos...</p>
      <h4>4. Strategic Roadmap Implementation</h4>
      <p>With your brand's vision, positioning, and messaging in place, we execute the strategy across all marketing platforms...</p>
      <h4>5. Brand Monitoring & Optimization</h4>
      <p>We monitor how your brand is perceived, gathering insights and making data-driven decisions...</p>
      <h4>6. Continuous Brand Improvement</h4>
      <p>Based on ongoing results, we refine the brand strategy...</p>
    `,
      ImplementText1:
        "At Webhub4U, we collaborate with you to analyze your brand’s current position...",
      ImplementText2:
        "Our services include brand positioning, market research, and customer persona development...",
      category: "Strategic Planning",
      duration: "1500",
      lifecycleImage: lifecycleImage1,
      img: serviceImage6,
    },
    {
      id: 21,
      title: "Web Design",
      desc: "Our team ensures your brand remains active and engaging on social media platforms, building your online presence.",
      planningText: `
      <h4>1. Research & Discovery</h4>
      <p>We begin by gaining a deep understanding of your business, goals, target audience, and user expectations...</p>
      <h4>2. Wireframing & Prototyping</h4>
      <p>Our team creates detailed wireframes and prototypes to visualize the layout of the website...</p>
      <h4>3. Design & Development</h4>
      <p>We focus on both UI/UX design and responsive development, ensuring a seamless experience across devices...</p>
      <h4>4. Content Integration</h4>
      <p>We integrate high-quality content that aligns with your branding and SEO requirements...</p>
      <h4>5. Testing & Launch</h4>
      <p>Thorough testing is done across devices to ensure compatibility before launching...</p>
      <h4>6. Ongoing Maintenance & Updates</h4>
      <p>Post-launch, we ensure the website remains optimized and updated...</p>
    `,
      ImplementText1:
        "We understand the importance of a visually appealing and functional website. We specialize in crafting custom websites...",
      ImplementText2:
        "Our web design services include wireframing, UI/UX design, responsive web development, and content integration.",
      img: serviceImage7,
      category: "Brand Awareness",
      duration: "1700",
      lifecycleImage: lifecycleImage2,
    },
  ];

  return services;
};

export default getAllServices;
