import React, { useState } from "react";
import { Layout } from "antd";

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import GridLayout from "./GridLayout";
import Loader from "./Loader";

import useFetchData from "../hooks/useFetchData";

const { Content } = Layout;

const AppLayout = () => {
  const { data, loading } = useFetchData();
  const [filters, setFilters] = useState({});
  const [sorts, setSorts] = useState({});

  return (
    <Layout>
      <AppHeader setFilters={setFilters} setSorts={setSorts} />
      <Content className="site-layout">
        {loading ? (
          <Loader />
        ) : (
          <GridLayout filters={filters} sourceData={data} sorts={sorts} />
        )}
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
