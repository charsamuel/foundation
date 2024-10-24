import BlogPage from "@/components/BlogPage/BlogPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
export const metadata = {
  title: "Blog || Paroti || Non Profit Charity Nextjs Template",
  description: "Non Profit Charity Nextjs Template",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title='Blog  Page' list='Blog' />
      <BlogPage />
    </Layout>
  );
};

export default page;
