import React, { useCallback, useState } from 'react'
import { IPhoto } from '../../types/photo.type'
import { Grid } from 'react-loader-spinner'

interface IProps {
    photo: IPhoto
}

const PhotoCard: React.FC<IProps> = ({ photo }) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    const handleIsLoaded = useCallback(() => {
        setIsLoaded(true)
    }, [])
    return (
        <div>
            {
                !isLoaded && <Grid
                    color="lightgray"
                    height={300}
                    width={300}
                />
            }
            <img src={photo.url} onLoad={handleIsLoaded} />
        </div>
    )
}

export default React.memo(PhotoCard)