export type ImageType = {
    src: string
}

export type ImagesListType = ImageType[]

export type FolderType = { name: string, images: ImagesListType }

export type FoldersListType = FolderType[]