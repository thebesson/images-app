import * as React from 'react';
import { Card, Button, Dialog, TextField, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { FoldersListType } from '../types'

type CreateFolderProps = {
    setStorage: Function
}

export default function CreateFolder({ setStorage }: CreateFolderProps) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [folderName, setFolderName] = React.useState('');
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFolderName(event.target.value);
    };

    const handleCreateFolder = () => {
        setStorage((prevState: FoldersListType) => {
            const folder = { name: folderName, images: [] }
            const newState = prevState ? [...prevState, folder] : [folder];
            return newState;
        })
        handleClose()
    }

    return (<>
        <Card sx={{ maxWidth: 200, minWidth: 200, padding: '10px', display: 'inline-block' }}>
            <Button onClick={handleOpen} variant="contained" endIcon={<AddIcon />}>
                Create Folder
            </Button>
        </Card>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create New Folder</DialogTitle>
            <DialogContent>
                <TextField
                    label="Folder name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={folderName}
                    onChange={handleTextChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleCreateFolder}>Create</Button>
            </DialogActions>
        </Dialog>
    </>
    );
}
