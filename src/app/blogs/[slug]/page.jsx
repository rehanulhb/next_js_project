import React from "react";

const page = async ({ params }) => {
  const slug = await params.slug;
  const { title, description } = blogs.find((blog) => blog.slug == params.slug);
  console.log(slug);
  return (
    <div className="h-screen">
      <h5>{title}</h5>
      <h5>{description}</h5>
    </div>
  );
};

export default page;

const blogs = [
  {
    slug: "how-to-learn-python-fast",
    title: "How to Learn Python Fast",
    description:
      "A practical guide to mastering Python quickly, with tips, resources, and project ideas for beginners.",
  },
  {
    slug: "understanding-javascript-closures",
    title: "Understanding JavaScript Closures",
    description:
      "Dive deep into closures in JavaScript with examples and use cases for better coding practices.",
  },
  {
    slug: "design-thinking-for-beginners",
    title: "Design Thinking for Beginners",
    description:
      "Learn the fundamentals of design thinking and how to apply it to solve real-world problems creatively.",
  },
  {
    slug: "top-10-ai-tools-in-2025",
    title: "Top 10 AI Tools in 2025",
    description:
      "A curated list of the most powerful and user-friendly AI tools dominating the tech landscape in 2025.",
  },
  {
    slug: "remote-work-productivity-hacks",
    title: "Remote Work Productivity Hacks",
    description:
      "Boost your productivity while working from home with these proven tools and daily routines.",
  },
];
