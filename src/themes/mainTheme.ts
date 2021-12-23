import {createTheme} from "@mui/material";

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        main: true;
    }
}

export const mainTheme = createTheme({

    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "main" },
                    style: {
                        transition: "transform .4s",
                        backgroundColor: "var(--btn-main-color)",
                        padding: "0",
                        color: "var(--link-color)",
                        '&:hover': {
                            backgroundColor: "var(--hover-btn-main-color)",
                            color: "var(--hover-link-color)",
                            transform: "translateY(-2px)"
                        },
                        "a": {
                            padding: "5px 20px",
                            color: "var(--link-color)",
                            '&:hover': {
                                color: "var(--hover-link-color)"
                            }
                        }
                    }
                }
            ]
        }
    }

});
