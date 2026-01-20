import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Divider, Input, Select, styled, Typography } from "@mui/material";
import api from "../../api";

function MissionsPage() {

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        const file = e.target.files[0];
        await api.files.uploadMissionFile(file);
        alert("Upload complete");
    };

    // Visually hide the input but keep it accessible
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })

    return (
        <div className="w-full flex flex-col gap-8 m-4">
            <Typography variant="h2" className="m-4">Missions</Typography>
            <div className="flex flex-col gap-4 h-full">
                <div id="new-missions-upload-section">
                    <Typography variant="h5">Upload New Mission</Typography>
                    <Divider />
                    <Typography variant="body1" gutterBottom>
                        Upload telemetry data files for a new mission. Supported file formats include CSV and JSON.
                    </Typography>
                    <Box className="m-4 flex flex-col gap-1 items-center justify-center">
                        <Button component="label" variant="contained" startIcon={<CloudUpload />}>
                        Upload file
                        <VisuallyHiddenInput
                            type="file"
                            accept=".csv,.json"
                            multiple
                            onChange={handleUpload}
                        />
                        </Button>
                    </Box>
                </div>
                <div id="missions-list-section">
                    <Typography variant="h5">Missions List</Typography>
                    <Divider />
                    <div id="existing-missions-list-header" className="flex flex-row justify-center gap-4">
                        <Input placeholder="Search missions..." />
                        <Select defaultValue={"Status Filter"}>
                            <option value={"Status Filter"} disabled>Status Filter</option>
                            <option value={"All"}>All</option>
                            <option value={"Active"}>Active</option>
                            <option value={"Completed"}>Completed</option>
                        </Select>
                    </div>
                    <div id="existing-missions-list-content">
                        <Typography variant="body2">
                            No missions available.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionsPage;