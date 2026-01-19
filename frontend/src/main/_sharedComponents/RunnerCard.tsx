import { Box, Typography, Grow } from "@mui/material"
import { Person } from "@mui/icons-material";
import { useEffect, useState } from "react";

    const dimensions = {
        small: {
            header: 'h4',
            body: 'body3',
            roleIcon: 'xs',
            imageSize: '60px',
            imageTranslate: 'translatex(-12px)',
            backupImage: 'medium',
            imagePlaceholder: '50px',
            backupImagePlaceholder: '30px',
        },
        medium: {
            header: 'h3',
            body: 'body2',
            roleIcon: 'small',
            imageSize: '72px',
            imageTranslate: 'translatex(-15px)',
            backupImage: 'large',
            imagePlaceholder: '57px',
            backupImagePlaceholder: '36px',
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
        }
    }

const RunnerCard = ({runner, size = 'xl'}) => {
    const [imageError, setImageError] = useState(false)
    const [loaded, setLoaded] = useState(false);
    

    const renderText = (runner, size) => {
        return (
            <>
                <Typography className='text-left' fontWeight={'bold'} variant={dimensions[size].header} color={'background.default'}>
                    {runner.name}
                </Typography>
                <Box
                    sx={{
                        color: theme.palette.dark_brown
                    }}
                    className='flex flex-col w-full gap-2 justify-around'
                >
                    <Typography variant={dimensions[size].body}>
                        {runner.description}
                    </Typography>
                    <Typography variant={dimensions[size].body} fontWeight={'bold'} className="text-right">
                        Mileage: {runner.mileage}
                    </Typography>
                </Box>
            </>
        )
    }

    const renderImage = (runner, size) => {
        return ( 
            <>
                <div className="w-2/5">
                    <img
                        // className="absolute" 
                        src={`/runners/${runner.image}`}
                        alt='u' 
                        style={{
                            // top: "-15px",
                            // transform: dimensions[size].imageTranslate, 
                            height: dimensions[size].imageSize, 
                            width: dimensions[size].imageSize
                        }}
                        onError={()=>setImageError(true)}
                    />
                    <div style={{width: dimensions[size].imagePlaceholder}}/>
                </div>
                <div className="flex flex-col">
                    <div>
                        {renderText(runner, size)}
                    </div>
                </div>
            </>
        )
    }

    useEffect(()=>{
        const img = new Image();
        img.src = `/runners/${runner.image}`

        img.onload = () => {
            setImageError(false);
            setLoaded(true);
        }

        img.onerror = () => {
            setImageError(true);
            setLoaded(true);
        }
    }, [])

    return (
        <Grow in={loaded} timeout={500}>
            <Box
                sx={{
                    backgroundColor: theme.palette.beige,
                    padding: '5px',
                    borderRadius: `${theme.shape.borderRadius}px`,
                }}
                className={`flex flex-row items-center w-full min-w-fit relative`}
            >
                {renderImage(runner, size)}
            </Box>
        </Grow>
    )
}

export default RunnerCard