import React from 'react';

import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {
    Box,
    Button,
    TextField,
    ListItemSecondaryAction,
    ListItem,
    ListItemIcon,
    ListItemText,
    Checkbox,
    ButtonGroup
  } from '@material-ui/core';

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
        <TextField id="normal-textarea" placeholder="Can't be Empty"
            value={
                cont
            }
            margin="normal"
            onChange={handleChange} required/>
<Button onClick={handleDone} color='inherit'>Done</Button>
<Button onClick={handleCancel} color='inherit'>Cancel</Button>
        </React.Fragment>
    );
}

const Cart = props => {
    const [edit, setEdit] = React.useState(props.isEditing);

    const handleClick = () => {
        props.handleDel(props.item)
    }
    const handleEdit = () => {
        setEdit(true);
    }

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

   if (currentIndex === -1) {
     newChecked.push(value);
   } else {
     newChecked.splice(currentIndex, 1);
   }

   setChecked(newChecked);
 };
    return (
      <ListItem role={undefined} dense button >

            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            {
            (edit) ? (
                <Content item={props.item} setEdit={setEdit} handleEdit={props.handleEdit}/>
            ) : (
                <>
                <ListItemText primary={props.item.content} />
                <ButtonGroup
              variant="text"
              color="primary"
              aria-label="full-width contained primary button group"
            >
            <Button onClick={handleEdit} color="primary">Edit</Button>
          <Button onClick={handleClick} color="primary">Remove</Button>
          </ButtonGroup>
                {/* <ListItemSecondaryAction>
                  <Button onClick={handleEdit} color="primary">Edit</Button>
                <Button onClick={handleClick} color="primary">Remove</Button>
                </ListItemSecondaryAction> */}
                </>
            )
          }
          </ListItem>

    );
}

export default Cart;
