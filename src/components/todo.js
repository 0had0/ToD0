import React from 'react';

import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Button, TextField} from '@material-ui/core';

const useStyless = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        backgroundColor: '#607d8b',
        color: 'white',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        minWidth: '500px'
    }
}));

const Content = props => {
    const [cont, setCont] = React.useState(props.item.content);

    const handleChange = event => {
        setCont(event.target.value)
    }
    const handleDone = () => {
        //props.item.content = cont;
        props.handleEdit(Object.assign({}, props.item, {content:cont}))        
        props.setEdit(false)
    }
    const handleCancel = () => {
        props.setEdit(false)    
}
    return (
        <React.Fragment>
        <TextField id="normal-textarea" label="ToDo ..." placeholder="Memorizable thing ;)"
            value={
                cont
            }
            margin="normal"
            onChange={handleChange}/>
<Button onClick={handleDone} color='inherit'>Done</Button>
<Button onClick={handleCancel} color='inherit'>Cancel</Button>
        </React.Fragment>
    );
}

const Cart = props => {
    const classes = useStyless();
    const [edit, setEdit] = React.useState(props.isEditing);

    const handleClick = () => {
        props.handleDel(props.item)
    }
    const handleEdit = () => {
        setEdit(true);
    }
    return (
        <Box position="static"
            className={
                classes.root
        }>
            <input type="checkbox"/> {
            (edit) ? (
                <Content item={props.item} setEdit={setEdit} handleEdit={props.handleEdit}/>
            ) : (
                <>
                <Typography variant='h5'>
                    {props.item.content}
                </Typography>
                <div>
                    <Button onClick={handleEdit} color='inherit'>Edit</Button>
                    <Button onClick={handleClick} color='inherit'>Remove</Button>
                </div>
                </>
            )
        }
            
        </Box>
    );
}

export default Cart;
