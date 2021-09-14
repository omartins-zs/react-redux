import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ListS = styled.ul`
    font-size: 1.5rem;
    line-height: 2.8rem;
    color: #333;
    list-style: none;
    padding: 0;
    text-align: center;
    grid-column: 1 / 3;
`

const List = ({todoList}) => (
        <ListS>
            {todoList.map(({id, name}) => <li key={id}>{name}</li>)}
        </ListS>
    )

const mapStateToProps = state => ({
    todoList: state.todo.list
});

export default connect(mapStateToProps)(List)