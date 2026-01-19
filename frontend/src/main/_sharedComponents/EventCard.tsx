import { Box, Typography, Grow } from "@mui/material"
import { Person } from "@mui/icons-material";
import { ReactNode, useEffect, useState } from "react";
import { Event } from "models";
import { Run4RightsPaper } from "./IanPaper";
import { useNavigate } from "react-router-dom";
import { Run4RightsButton } from "./AppButton";

    const dimensions: any = {
        small: {
            header: 'h5',
            body: 'body3',
            roleIcon: 'xs',
            imageSize: '60px',
            imageTranslate: 'translatex(-12px)',
            backupImage: 'medium',
            imagePlaceholder: '50px',
            backupImagePlaceholder: '30px',
        },
        medium: {
            header: 'h4',
            body: 'body2',
            roleIcon: 'small',
            imageSize: '72px',
            imageTranslate: 'translatex(-15px)',
            backupImage: 'large',
            imagePlaceholder: '57px',
            backupImagePlaceholder: '36px',
            dateSquareSize: "size-24",
            borderRadius: "10px",
            dateSize: "h3"
        },
        large: {

        },
        xl: {
            header: 'h3',
            body: 'body2',
            roleIcon: 'xl',
            imageSize: '96px',
            imageTranslate: 'translatex(-5px)',
            backupImage: 'large',
            imagePlaceholder: '114px',
            backupImagePlaceholder: '72px',
            textTranslate: 'translatex(80px)',
            dateSquareSize: "size-32"
        }
    }

const EventCard = ({event, size = 'medium', future = false}: {event: Event, size?: string, future?: boolean}) => {
    const [imageError, setImageError] = useState(false)
    const [loaded, setLoaded] = useState(true);
    const navigate = useNavigate();

    function formatToDollars(amount: number): string {
        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return USDollar.format(amount);
    }
    

    const RenderText = ({event, size}: {event: Event, size: string}) => {
        return (
            <Box
                className='flex flex-col w-full gap-2 text-left'
                sx={{color: "primary.main"}}
            >
                <Typography variant={dimensions[size].header}>
                    {event.organization}
                </Typography>
                {event.description ? 
                    <Typography className="hidden sm:block" variant={dimensions[size].body}>
                        {event.description}
                    </Typography>
                    :
                    null
                }
                <div className="flex flex-row justify-between items-center">
                    <Run4RightsButton text={"See More"} onClick={handleClick}/>
                    {future ? 
                        null 
                    :
                        <Typography variant={dimensions[size].body} fontWeight={'bold'} className="text-right pr-2">
                            Money Raised: {formatToDollars(event.moneyRaised)}
                        </Typography>
                    }
                </div>
            </Box>
        )
    }

    function formatCustomDate(date: Date) {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const month = months[date.getMonth()];
        const day = date.getDate();

        return {month, day};
    }

    const RenderDate = ({event, size}: {event: Event, size: string}): ReactNode => {
        let date = formatCustomDate(new Date(event.eventDate));
        return (
            <Box 
                sx={{
                    backgroundColor: "secondary.main", 
                    borderRadius: dimensions[size].borderRadius, 
                    margin: "10px", 
                    padding: "10px", 
                    textAlign: "center", 
                    display: "flex", 
                    alignItems: "center"
                }}
                className='flex flex-col align-center justify-center text-center max-h-fit'
            >
                <Typography fontWeight={700} variant={dimensions[size].dateSize}>{date.month}</Typography>
                <Typography fontWeight={700} variant={dimensions[size].dateSize}>{date.day}</Typography>
            </Box>
        )
    }

    const handleClick = () => {
        navigate(`/event/${event.id}`)
    }

    return (
        <div className="flex flex-row gap-6 items-center">
            <RenderDate event={event} size={size}/>
            <RenderText event={event} size={size}/>
        </div>
    )
}

export default EventCard