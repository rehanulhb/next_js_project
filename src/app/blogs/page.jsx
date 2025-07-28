import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="p-24">
      Blogs Page
      {blogs.map((blog) => (
        <div key={blog.slug} className="border-2 p-12 ">
          <h3>{blog.title}</h3>
          <h3>{blog.description}</h3>
          <button className="bg-red-400">
            <Link href={`/blogs/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

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
