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

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// Soft UI Dashboard PRO React components
import SuiBox from "@uf/components/SuiBox";
import SuiTypography from "@uf/components/SuiTypography";
import SuiAvatar from "@uf/components/SuiAvatar";
import SuiInput from "@uf/components/SuiInput";
import SuiButton from "@uf/components/SuiButton";
// Soft UI Dashboard PRO React example components
import DashboardNavbar from "@uf/examples/Navbars/DashboardNavbar";
import Icon from "@mui/material/Icon";
// Soft UI Dashboard PRO React icons
// import Cube from "@uf/examples/Icons/Cube";
// import Document from "@uf/examples/Icons/Document";
// import Settings from "@uf/examples/Icons/Settings";

// Soft UI Dashboard PRO React base styles
import breakpoints from "@uf/assets/theme/base/breakpoints";
// import OutlinedCounterCard from "@uf/examples/Cards/CounterCards/OutlinedCounterCard";
// Images
import burceMars from "@uf/assets/images/bruce-mars.jpg";
import curved0 from "@uf/assets/images/curved-images/curved0.jpg";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  // const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /**
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  // const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <SuiBox position="relative">
      <DashboardNavbar absolute light />
      <SuiBox style = {{minHeight: "200px"}}

        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${curved0})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
          <SuiBox position="relative" height="max-content" mx="auto">
              <SuiAvatar src={burceMars} alt="profile picture" size="xxl" variant="rounded" />
              <SuiBox alt="spotify logo" position="absolute" right={0} bottom={0} mr={-1} mb={-1}>
              <Link to="/layouts/dashboards/edit-profile">
                <SuiButton variant="gradient" color="light" size="small" iconOnly>
                  <Icon>edit</Icon>
                </SuiButton>
                </Link>
              </SuiBox>
            </SuiBox>
          </Grid>


          <Grid item>
            <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Alex Thompson
              </SuiTypography>
              <SuiTypography variant="button" color="text" fontWeight="medium">
                alecthompson@mail.com | (44) 123 1234 123
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item xs={6} md={3} lg={3} sx={{ ml: "auto" }}>
                <SuiBox
                style={{paddingTop: "2px",paddingBottom:"0",paddingLeft:"10px",paddingRight:"10px"}}
                  borderRadius="md"
                  border="0.0625rem dashed #8392ab"
                  textAlign="center"
                  py={2}
                >
                  <SuiTypography variant="h6" style={{color:"#17c1e8"}} fontWeight="medium" textTransform="capitalize">
                    Coupon
                  </SuiTypography>
                  <SuiBox display="flex" style={{marginBottom:"0"}} alignItems="center" mb={2}>
                      <SuiBox width="70%" mr={1}>
                        <SuiInput
                          size="small"
                          defaultValue="code is hear"
                          icon={{ component: "lock", direction: "right" }}
                          disabled
                        />
                      </SuiBox>
                      <Tooltip title="Expires On: 12-2-2022" placement="top">
                        <SuiButton
                          variant="outlined"
                          color="secondary"
                          size="small"
                          sx={{ padding: "0.5rem 1rem" }}
                        >
                          copy
                        </SuiButton>
                      </Tooltip>
                    </SuiBox>
                    <span style={{fontSize:"13px"}}>Expires On: 12-2-2022</span>

                </SuiBox>
          </Grid>
          <Grid item xs={6} md={2} lg={2} >
                {/* ernings card */}
                <SuiBox
                  style={{background: "linear-gradient(310deg, #2152ff,#21d4fd )"}}
                  borderRadius="md"
                  textAlign="center"
                  py={2}
                >
                  <SuiTypography variant="h6" style={{color:"#fff"}} fontWeight="medium" textTransform="capitalize">
                    Earnings
                  </SuiTypography>
                  <SuiTypography variant="h4" fontWeight="bold">


                      <SuiTypography style={{color:"#fff"}} component="span" variant="h5" fontWeight="bold">
                       1454
                      </SuiTypography>
                      <SuiButton variant="text" style={{textDecoration: "underline"}} color="white">Create Coupon</SuiButton>
                  </SuiTypography>
                </SuiBox>
          </Grid>

        </Grid>
      </Card>
    </SuiBox>
  );
}

export default Header;
