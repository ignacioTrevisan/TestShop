import { ThemeProvider } from "@emotion/react"
import { OranjeTheme } from "./orangeTheme"
import { CssBaseline } from "@mui/material"

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={OranjeTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>

    )
}
