import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import uuidv1 from 'uuid/v1';

import ToDo from './todo';
import {addTodo, delTodo, editTodo} from '../actions/index';
import {
    TextField,
    Button,
    Box
} from '@material-ui/core';

const Show = props => {
    const [elm, setElm] = useState('');
    const [history, setHistory] = useState([]);

    const store = props.store ;
    
    function componentDidMount() {
        store.subscribe(() => console.log(props.store.getState()));
    }
    

    

    const useStyless = makeStyles(theme => ({
        padd: {
            padding: theme.spacing(3, 2),
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }
    }));

    const classes = useStyless();

    const handleDel = item => {
        console.log("Remove button is clicked")
        console.log(`id: ${item.id}`)
        setHistory([...history, {operation:"Delete", item}])
        props.store.dispatch(delTodo(item.id));
    }
    const handleEdit = item => {
        store.dispatch(editTodo(item));
        setHistory([...history, {operation:"Edit", item}])
    }
    const handleAdd = () => {
        console.log("Add button Clicked")
        props.store.dispatch(addTodo({id: uuidv1(), content: elm, visiblity: true}));
        setElm('')
                            }
    const handleChange = event => {
        console.log("change is affected")
        setElm(event.target.value);
    }
    return (
        <React.Fragment>
            <Container className={
                classes.padd
            }>
                <Box position='static' display='flex' flexDirection='row'>
                    <TextField id="normal-textarea" label="ToDo ..." placeholder="Memorizable thing ;)"
                        value={elm}
                        margin="normal"
                        onChange={
                            handleChange    
                        }/>
                    <Button variant='outlined' size="small" color='primary' 
                        onClick={
                            handleAdd
                    }>
                        Add
                    </Button>
                    <Button variant='outlined' size="small" color='primary' 
                        onClick={
                            () => {console.log(props.store.getState())}
                    }>
                        Store
                    </Button>
                    <Button variant='outlined' size="small" color='primary' 
                        onClick={
                            () => {console.log(history)}
                    }>
                        History
                    </Button>
                </Box>
                {
                store.getState().map((item, i) => {
                    return (
                        <ToDo item={item}
                            key={i}
                            id={item.id}
                            isEditing={false}
                            handleEdit={handleEdit}
                            handleDel={handleDel}/>
                    )
                })
            } </Container>
        </React.Fragment>
    );
}

export default Show;
