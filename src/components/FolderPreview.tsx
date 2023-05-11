import * as React from 'react';
import { Card, CardContent, Typography, ImageList, ImageListItem } from '@mui/material';
import { FolderType } from '../types';

type PreviewCardProps = {
    data: FolderType
}

export default function PreviewCard({ data }: PreviewCardProps) {
    return (
        <Card sx={{ maxWidth: 200, minWidth: 200, padding: '10px', display: 'inline-block' }}>
            <CardContent>
                <Typography>{data.name}</Typography>
                {data.images.length > 0 &&
                    <ImageList sx={{ width: 180, height: 180 }} cols={3} rowHeight={20}>
                        {/* TODO: only display first 3 images on preview and ellipses if more that 3 images*/}
                        {data.images.map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    src={item.src}
                                    loading="lazy"
                                    alt="preview"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                }
            </CardContent>
        </Card>
    );
}