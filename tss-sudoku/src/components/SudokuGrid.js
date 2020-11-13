import React, { Component } from 'react';
import './SudokuGrid.css';
import './helper/validate';
import validateSudoku from './helper/validate';
import question from './helper/questionare';
import Dropdown from './Dropdown';

class SudokuGrid extends Component {
    constructor() {
        super();
        this.state = {
            grid: question('easy'),
            name: "TSS Sudoku",
            isValid: true,
            currentQuestion: 'easy'
        };
        this.items = ['easy', 'intermediate', 'difficult', 'notFun'];
        this.calculateDisableMatrix(this.state.grid);
    }

    calculateDisableMatrix(grid) {
        this.disableMatrix = Array(9).fill().map(() => Array(9).fill(false));
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (grid[i][j] !== '') {
                    this.disableMatrix[i][j] = true;
                }
            }
        }
    }

    componentDidUpdate() {
        console.log('grid updated');
    }

    validateGrid = () => {
        const board = this.state.grid;
        const out = validateSudoku(board);
        this.setState({ isValid: out});
    }

    resetGrid = () => {
        let original = this.state.grid;
        original = question(this.state.currentQuestion);
        this.setState({ grid: original, isValid: true });
        this.calculateDisableMatrix(original);
    }

    handleChange = (e, i, j) => {
        console.log(i, j, e.target.value);
        const new_grid = this.state.grid;
        new_grid[i][j] = e.target.value;
        this.setState({ grid: new_grid });
    }

    selectHandler = (e) => {
        const type = e.target.value;
        this.setState({ currentQuestion: type });
        const data = question(type);
        this.setState({ grid: data });
        this.calculateDisableMatrix(data);
    }

    render() {
        const sudoku_grid = this.state.grid;
        const isValid = this.state.isValid;
        const em = Array(9).fill().map(() => Array(9).fill(''));
        const final = em.map((_, i) => {
            const row = sudoku_grid[i];
            return (
                <div className="row" id={i} key={i}>
                    {row.map((el, j) => (
                        <div className="item" id={j} key={j}>
                            <textarea 
                                maxLength={1} value={el}
                                onChange={(e) => this.handleChange(e, i, j)}
                                disabled={this.disableMatrix[i][j]}
                            />
                        </div>
                    ))}
                </div>
            )
        });
        return (
            <div className="container">
                <div className="main">
                    <h1>{this.state.name}</h1>
                    <Dropdown items={this.items} changeHandler={this.selectHandler}/>
                    {final}
                    <div className="button-grid">
                        <button onClick={this.resetGrid}>Reset</button>
                        <button onClick={this.validateGrid}>Validate</button>
                    </div>
                    <span className="status">
                        <h3 className={isValid ? "green" : "red"}>
                            <strong style={{color: "black"}}>Valid: </strong>{`${isValid}`}
                        </h3>
                    </span>
                </div>
            </div>
        );
    }
}

export default SudokuGrid;