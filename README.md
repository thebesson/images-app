# Getting Started with this template

Make sure you follow the .nvmrc and use Node 16

Start the app using the following command, replacing the key by your API key:

    REACT_APP_API_KEY="your_api_key" yarn run start

## User stories

Here is a brief overview into my approach. I also added some TODOs throughout the project with what I think is needed to be done.

### 1. As a user, I can upload an image from my computer. It will be sent to the server, which will return an image without the background

I didn't have enough time to improve this part. I would move the "onImageAdd" method into "Add Button" component, so component and it's functionality will be kept together, in the same context. I would also refactor the `uploadImageToServer` function to only use async/await, it reads more neat in my opinion. Also, I would abstract fetching and other parts of `uploadImageToServer` function, so it's easier to read. I also think it makes sense to choose which folder to upload to.

### 2. As a user, I can see the list of images previously sent to the server from my computer. They all appear in an "Untitled Folder" folder by default

Done, albeit a bit roughly. I would improve how images are displayed, and general layout. Make the folder look more like folder, make sure to display only 4-6 images from the folder on the preview.

### 3. As a user, I can create folders

Done. Can't do much with them in the current state of the app though.

### 4. As a user, I can move images between folders. An image can only be in one folder at a time

Not done - not enough time, unfortunately. I recon, it would have taken me another 30-40 minutes to do it. From the UX/UI perspective, I would have added a "Folder Modal" component, to give the user possibility to open the folder, look through it's contents and interact with the images. It's familiar to a usual folder system and should be easy to understand for users. I would have emulated the file system to move images too - right click > "move to folder" > select the folder from second level pop-up menu list.

### 5. As a a user, when I refresh the page, the folders and images are still showing (using Local Storage or this library)

Done. I've used `useLocalStorage` hook from `react-use` library.

### 6. (Optional) As a user, I can rename folders

Not done.
