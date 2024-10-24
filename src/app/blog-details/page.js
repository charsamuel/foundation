import BlogDetailsPage from "@/components/BlogDetailsPage/BlogDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
export const metadata = {
  title: "Blog Post || Paroti || Non Profit Charity Nextjs Template",
  description: "Non Profit Charity Nextjs Template",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title='Blog post' list='Blog' />
      <BlogDetailsPage />
    </Layout>
  );
};

export default page;
