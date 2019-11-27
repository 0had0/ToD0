import React, {useState} from 'react';
import {TextField, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'center'
    }
}));
const Form = props => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [name, setName] = useState('');

    const handleText = event => {
        setText(event.target.value);
        props.setNewItem(Object.assign({}, props.newItem, {text: text}))
    }
    const handleName = event => {
        setName(event.target.value);
        props.setNewItem(Object.assign({}, props.newItem, {title: name}))
    }
    return (
        <Box position="static"
            className={
                classes.root
        }>
            <TextField id="outlined-textarea" label="Title" placeholder="Memorizable thing ;)"
                className={
                    classes.textField
                }
                value={name}
                margin="normal"
                variant="outlined"
                onChange={handleName}/>
            <TextField id="outlined-textarea" label="Text" multiline placeholder="things to remember!"
                className={
                    classes.textField
                }
                value={text}
                variant="outlined"
                onChange={handleText}/>
        </Box>
    );
}

export default Form;
