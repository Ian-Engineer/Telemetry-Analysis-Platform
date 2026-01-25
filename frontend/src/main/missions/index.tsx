import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Divider, Input, Select, styled, Typography } from "@mui/material";
import api from "../../api";
import { useEffect, useState } from "react";
import type { Mission, ApiResponse } from "../../config/models";

function MissionsPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [missions, setMissions] = useState<Array<Mission>>([]);
    const [error, setError] = useState<string | null>(null);

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

    useEffect(() => {
        // make api call getting missions list
        api.getRequest("/missions").then((response: ApiResponse<Array<Mission>>) => {
            console.log(response);
            if (response.success && response.data) {
                setMissions(response.data);
            } else {
                setError("Failed to fetch missions list.");
            }
            setLoading(false);
        }).catch(() => {
            setError("Failed to fetch missions list.");
            setLoading(false);
        });
    }, []);

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
                    <div id="existing-missions-list-content" className="flex flex-col justify-center items-center mt-4">
                        {loading ? (
                            <Typography variant="body2">
                                Loading missions...
                            </Typography>
                        ) : error ? (
                            <Typography variant="body2" color="error">
                                {error}
                            </Typography>
                        ) : missions.length > 0 ? (
                            <ul>
                                {missions.map((mission) => (
                                    <li key={mission.id} className="mb-2 p-2 border rounded">
                                        <Typography variant="h6">{mission.name}</Typography>
                                        <Typography variant="body2">Status: {mission.status}</Typography>
                                        <Typography variant="body2">Start Date: {new Date(mission.startDate).toLocaleDateString()}</Typography>
                                        {mission.endDate && (
                                            <Typography variant="body2">End Date: {new Date(mission.endDate).toLocaleDateString()}</Typography>
                                        )}
                                        {mission.description && (
                                            <Typography variant="body2">Description: {mission.description}</Typography>
                                        )}                                 
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Typography variant="body2">
                                No missions available.
                            </Typography>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionsPage;