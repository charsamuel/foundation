import DonationPage from "@/components/DonationPage/DonationPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
export const metadata = {
  title: "Donations || Paroti || Non Profit Charity Nextjs Template",
  description: "Non Profit Charity Nextjs Template",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title='Donations' />
      <DonationPage />
    </Layout>
  );
};

export default page;
