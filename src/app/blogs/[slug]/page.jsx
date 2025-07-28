import React from "react";

const page = async ({ params }) => {
  const slug = await params.slug;
  console.log(slug);
  return <div>Details</div>;
};

export default page;
