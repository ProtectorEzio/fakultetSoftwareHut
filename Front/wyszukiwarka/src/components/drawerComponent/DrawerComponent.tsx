import React from 'react';
import { Drawer } from '@material-ui/core';
import {makeStyles,Theme} from '@material-ui/core/styles';
import {useHistory} from 'react-router';

const makeClasses =makeStyles((theme:Theme)=>({
    drawerContent:{
        margin:'20px',
    }
}));

interface IDrawerComponentProps {
    shouldBeOpen: boolean,
    onOtherClick:()=>void;
}

const DrawerComponent: React.FC<IDrawerComponentProps> = ({shouldBeOpen,onOtherClick}) => {
    const classes=makeClasses();
    const [isOpen,setIsOpen]= React.useState(false);
    const history= useHistory();
    const RedirectTo= (path:string, name:string )=><div  onClick={()=>history.push(path)}>{name}</div>

    return (
        <div onClick={()=>onOtherClick()}>
            <Drawer
                open={isOpen || shouldBeOpen}
                onClose={()=>setIsOpen(false)}
            
            >
                <div className={classes.drawerContent}>
                    <ul>
                        <li><button style={{width:"100px"}}>{RedirectTo('/','Home')}</button></li>
                        <li><button style={{width:"100px"}}>{RedirectTo('/movie','Movie')}</button></li>
                        <li><button style={{width:"100px"}}>{RedirectTo('/search','Search Movie')}</button></li>
                        <li><button style={{width:"100px"}}>{RedirectTo('/todo','TodoPanel')}</button></li>
                        <li><button style={{width:"100px"}}>{RedirectTo('/liked','Liked')}</button></li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;