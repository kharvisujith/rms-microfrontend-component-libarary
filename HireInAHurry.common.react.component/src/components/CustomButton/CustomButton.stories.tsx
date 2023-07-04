import React from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import AddIcon from '@mui/icons-material/Add';
import CustomButton from "./CustomButton";

export default {
    title: "Components/Button",
    component : CustomButton
}

//export const Primary = () => <NewButton label="cancel"/>;

export const Primary = {
    args:{
        label: "save",
    }
}

export const PrimaryWithIcon = {
    args:{
        label: "Upload",
        icon: <UploadIcon/>,
    }
}

export const PrimaryWithOnlyIcon = {
    args:{
        icon: <AddIcon/>,
    }
}


