import React from "react";
import Card from './Card';

class CardList extends React.Component {
    constructor(){
        super();
        this.state={
            keyCounter: [0],
            currentKey: 0
        }
    }

    newCounter=()=>{
        this.setState({
            keyCounter: [...this.state.keyCounter, this.state.currentKey+1],
            currentKey: this.state.currentKey+1
        });
        // console.log(this.state.keyCounter, this.state.keyCounter.length);
    }

    resetPage = () =>{
        this.setState({
            keyCounter: [this.state.currentKey+1],
            currentKey: this.state.currentKey+1
        });
        let x = document.getElementsByClassName("counters");
        while (x.firstChild && x.length>2) {
            x.removeChild(x.firstChild);
        }
        // console.log("divs left after reset:", x);
    }
    deleteCounter = (targetId)=>{
        // get the id of the to-be-deleted counter and find and remove it from counter array
        // multiple issues. one is the issue of deleting style. one is the issue of index no longer being able to point to correct dom element.
        let x = this.state.keyCounter;
        let index = x.findIndex(number=>number===targetId);
        // console.log("counter to be deleted:", x[index]);
        x.splice(index, 1);
        this.setState({keyCounter: x});
        // console.log("After delete:", x[index]);
    }
    logDivs =()=>{
        console.log(document.getElementsByClassName("counters"));
    }
    // save = () =>{}
    render(){
        const {keyCounter} = this.state;
        // let x=document.getElementsByClassName("counters");
        // console.log(x);
        return(
            <div>
                <div className="flex justify-center">
                    <button className="mt2 mh1" onClick={this.newCounter}>New Counter</button>
                    <button className="mt2 mh1" onClick={this.resetPage}>Reset Page</button>
                    <button className="mt2 mh1" onClick={this.logDivs}>Log Divs</button>
                    {/* <button className="mt2 mh1" onClick={this.save}>Save</button> */}
                </div>
                <div className="flex flex-wrap justify-center">
                {
                    keyCounter.map((key, i)=>{
                        return(
                            <Card key={key} id={key} position={i} deleteCounter={this.deleteCounter}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default CardList;