import { Button, Typography } from "@mui/material";

const placeHolderOnClick = (text: string) => {
    console.error("No onclick provided for button: ", text)
}

export function AppButton({text, className = "", onClick = () => placeHolderOnClick(text)}: {text: string, className?: string, onClick?: Function}) {

    return (
        <div className={className}>
            <Button color="secondary" className={className} onClick={()=>{onClick()}} sx={{ }}>
                <Typography noWrap={true} variant='h5' fontWeight={'700'} className="pr-2 pl-2">
                    {text}
                </Typography>
            </Button>
        </div>
    )
} 