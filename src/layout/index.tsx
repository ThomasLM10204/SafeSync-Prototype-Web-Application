import { alpha, Box, Stack } from "@mui/material"
import SideMenu from "../dashboard/components/SideMenu"
import AppNavbar from "../dashboard/components/AppNavbar"
import Header from "../dashboard/components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <AppNavbar />
            <Box
                component="main"
                sx={(theme) => ({
                    flexGrow: 1,
                    backgroundColor: theme.vars
                        ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                        : alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                })}
            >
                <Stack
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        mx: 3,
                        pb: 5,
                        mt: { xs: 8, md: 0 },
                    }}
                >
                    <Header />
                    <Outlet/>
                </Stack>
            </Box>
        </Box>
    )
}

export default Layout;