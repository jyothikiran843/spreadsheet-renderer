import { useState } from "react";

export default function Board(){
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill('N')]);
    const [currentMove,setCurrentMove]=useState(0);
    const currentSquares = history[currentMove];
    function handlePlay(nextSquares){
        const nextHistory = [...history, nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }
    function jumpTo(move){
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);

    }
    const moves=history.map((squares,move)=>{
        let description;
        if(move>0){
            description='Go to move '+move;
        }
        else{
            description='Go to games start';
        }
        return (<li key={move}>
                <button className="btn" onClick={()=>jumpTo(move)}>{description}</button>
            </li>)
    })
    return(
        <>
        <GameBoard isNext={xIsNext} values={currentSquares} onPlay={handlePlay} />
        <ol>
            {moves}
        </ol>
        </>
    )
}
function GameBoard({ isNext, values, onPlay }){
    function handleClick(i){
        if(values[i]==='N' && !isWinner(values)){
            const nvalues=values.slice();
            nvalues[i]=isNext ? 'X' : 'O';
            onPlay(nvalues);
        }
        else{
            return;
        }
    }
    let stat;
    var winner=isWinner(values);
    if(winner){
        stat='Winner is'+winner;
    }
    else{
        stat='Next player is'+(isNext ? 'X' : 'O');
    }
    return (
        <>
            <div className="container">
                <div className="row">{stat}</div>
                {
                values.map(
                    (value,index)=>{
                    return(index%3===0 ? <><br/><Square value={value} clicked={()=>handleClick(index)} /></> : <Square value={value} clicked={()=>handleClick(index)} />)
                    }
                    )
                }
            </div>
        </>
    )
}
function Square({value,clicked}){
    return (
        <button className="btn btn-primary" onClick={clicked}>{value}</button>
    )
}
function isWinner(values){
    const indices=
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(var i=0;i<indices.length;i++){
        const [a,b,c]=indices[i];
        if(values[a]!=='N' && values[a]===values[b] && values[a]===values[c]){
            return values[a];
        }
    }
    return null;
}