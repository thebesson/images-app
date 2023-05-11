import * as React from 'react';
import PreviewCard from './PreviewCard';
import { ImagesListType } from '../types';
import { Container } from '@mui/material';

type ImagesListProps = {
    images: ImagesListType
}

export default function ImagesList({ images }: ImagesListProps) {
    return <Container>
        {images?.map((image) => <PreviewCard src={image.src} />)}
    </Container>
}

