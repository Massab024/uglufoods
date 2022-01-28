/**
=========================================================
* Soft UI Dashboard PRO React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";

// Soft UI Dashboard PRO React components
import SuiBox from "@uf/components/SuiBox";

// Soft UI Dashboard PRO React example components
import PageLayout from "@uf/examples/LayoutContainers/PageLayout";

// Pricing page components
import Header from "@uf/layouts/pages/pricing-page/components/Header";
import Footer from "@uf/layouts/pages/pricing-page/components/Footer";
import PricingCards from "@uf/layouts/pages/pricing-page/components/PricingCards";
import TrustedBrands from "@uf/layouts/pages/pricing-page/components/TrustedBrands";
import Faq from "@uf/layouts/pages/pricing-page/components/Faq";

function PricingPage() {
  const [tabValue, setTabValue] = useState(0);
  const [prices, setPrices] = useState(["59", "89", "99"]);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);

    if (event.currentTarget.id === "annual") {
      setPrices(["119", "159", "399"]);
    } else {
      setPrices(["59", "89", "99"]);
    }
  };

  return (
    <PageLayout>
      <Header tabValue={tabValue} tabHandler={handleSetTabValue} />
      <Container>
        <PricingCards prices={prices} />
        <TrustedBrands />
        <Faq />
      </Container>
      <SuiBox mt={8}>
        <Footer />
      </SuiBox>
    </PageLayout>
  );
}

export default PricingPage;