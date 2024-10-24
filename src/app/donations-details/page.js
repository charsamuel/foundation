import DonationDetails from "@/components/DonationDetails/DonationDetails";

import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

export const metadata = {
  title: "Donation Details || Paroti || Non Profit Charity Nextjs Template",
  description: "Non Profit Charity Nextjs Template",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title='Donations details' list='Donations' />
      <DonationDetails />
    </Layout>
  );
};

export default page;
