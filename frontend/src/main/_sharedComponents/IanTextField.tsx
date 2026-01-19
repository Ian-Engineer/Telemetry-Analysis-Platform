import { TextField, Collapse, Typography } from "@mui/material";

export function Run4RightsTextField(
    {
        value,
        valueChange,
        className, 
        label, 
        required = false, 
        multiline = false, 
        rows = 1,
        color = 'secondary',
        error = null,
        size = 'small',
    }: {
        value: string,
        valueChange: Function,
        className: string,
        label: string,
        required?: boolean,
        multiline?: boolean,
        rows?: number,
        color?: 'primary' | 'secondary' | 'error' | 'warning' | "info" | "success",
        error?: string | null,
        size?: "small" | "medium"
    }
) {
    return (
        <div>
            <TextField
                size = {size}
                className={className}
                label={label}
                required={required}
                multiline={multiline}
                rows={rows}
                color={color}
                value={value}
                error={Boolean(error)}
                onChange={(e)=>{valueChange(e.target.value)}}
            />
            <div>
                <Collapse in={Boolean(error)} timeout="auto" unmountOnExit>
                    <Typography
                        variant="caption"
                        color="error"
                        style={{ paddingLeft: "14px" }}
                    >
                        {error}
                    </Typography>
                </Collapse>
            </div>
        </div>
    )
} 
