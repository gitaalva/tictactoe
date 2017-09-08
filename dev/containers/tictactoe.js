import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Cell from '../components/cell.js';
import Flashline from '../components/flashline.js';
import Name from './name_bar.js';
import {makeMove,confirmMove, gameOver} from '../actions/index.js';
import AI from '../helper/AI.js';


class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.AI = new AI();
        this.timer = null;
        this.gameOver = null;
    }

    checkIfGameOver() {
        var result = this.AI.isGameOver(this.props.board);
        if (result === false) return;
        switch (result) {
            case 'O':
                this.props.gameOver('computer','won');
                this.gameOver = true;
                break;
            case 'X':
                this.props.gameOver('human', 'won');
                this.gameOver = true;
                break;
            default:
                this.props.gameOver('bla', 'tie');
                this.gameOver = true;
        }
    }
    render() {
        // check if game over
        if (this.props.name === null) {
            return (
                <div>
                    <Flashline message={this.props.message}/>
                    <Name />
                </div>
            );
        } else {
            this.checkIfGameOver();
            if (this.gameOver !== true && this.props.currentPlayer === 'computer') {
                let computerMove = this.AI.naiveAI(this.props.board);
                console.log('It is computers turn to play', computerMove);
                this.props.makeMove(computerMove,'computer');
            }
            return (
            <div>
                <Flashline message={this.props.message}/>
                <div className="grid">
                {
                    this.props.board.map((value,index) => (
                        <Cell key={index} state={value} onClickFunc={(evt) => {
                            if (this.gameOver !== true && this.props.currentPlayer === 'human' && this.props.board[index] === undefined) {
                                // case where computer is the previous player
                                // this is the first move we should give 3 seconds timeOut
                                if (this.props.prevPlayer !== 'human') {
                                    this.timer = setTimeout (()=> {
                                        // on timeout we just confirm
                                        this.props.confirmMove(index,index);
                                    },3000);
                                }
                                if (this.props.prevPlayer === 'human') {
                                    // note modification is also confirmation.
                                    // in the case of modification we send different index and move
                                    clearTimeout(this.timer);
                                    this.props.confirmMove(index,this.props.prevMove);
                                } else {
                                    this.props.makeMove(index,'human');
                                }
                            }
                        }}/>
                    ))
                }
                </div>
            </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        board:state.board,
        prevPlayer:state.prevPlayer,
        prevMove:state.prevMove,
        currentPlayer:state.currentPlayer,
        message:state.message,
        name:state.name
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({makeMove:makeMove, confirmMove:confirmMove,gameOver:gameOver}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
