import React, { Component } from 'react';
import { connect } from 'react-redux'; //responsável por conectar as ações
import styled from 'styled-components';

import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';

import { addToDo } from '../../store/actions/todo.js';

const Container = styled.div`
    display: grid;
    max-width: 720px;
    margin: auto;
    grid-template-columns: 2fr 1fr;
    margin-top: 3rem;
`

class App extends Component {
    state = {
        input: '',
    }

    handleOnClick = () => {
        // console.log('Botão foi clicado')
        const { addToDo } = this.props;
        const { input } = this.state;

        addToDo(input)
    }

    handleOnChange = (e) => {
        this.setState({input: e.target.value});
    }

    render(){

        const {input} = this.state;

        // const { listTodo } = this.props;

        return(
            <Container>
                <Input onChange={(e) => this.handleOnChange(e)} value={input} />
                <Button onClick={() => this.handleOnClick()}>
                    Adicionar
                </Button>
                <List />
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    listTodo: state.todo
})

export default connect(mapStateToProps, // informações que quer pegar
    { addToDo } // recebe as informações como propriedades
    )(App); 