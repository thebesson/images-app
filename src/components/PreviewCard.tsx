import * as React from 'react';
import { Card, CardMedia } from '@mui/material';
import { ImageType } from '../types';

export default function PreviewCard({ src }: ImageType) {
    return (
        <Card sx={{ maxWidth: 200, minWidth: 200, padding: '10px', display: 'inline-block' }}>
            <CardMedia
                sx={{ height: 200 }}
                image={src}
            />
        </Card>
    );
}
