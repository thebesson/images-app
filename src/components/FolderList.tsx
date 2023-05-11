import * as React from 'react';
import FolderPreview from './FolderPreview';
import { FoldersListType } from '../types';
import { Container } from '@mui/material';
import CreateFolder from './CreateFolder'

type FoldersListProps = {
    folders: FoldersListType,
    setStorage: Function
}

export default function FoldersList({ folders, setStorage }: FoldersListProps) {
    return <Container>
        {folders?.map((folder, index) => <FolderPreview key={index} data={folder} />)}
        <CreateFolder setStorage={setStorage} />
    </Container>
}