import React from "react";
import minus from "./minus.png";
import plus from "./plus.png";
import darkPlus from "./darkPlus.png";
import darkMinus from "./darkMinus.png";
import { ThemeContext } from "./ThemeContext";


class Card extends React.Component{
    constructor() {
        super();
        this.state = {
            titleInput: "",
            title: "New Card",
            goalInput: 0,
            goal: 1,
            reps: 0,
            success: ""
        };
    };

    successCheck=(input, goal=this.state.goal)=>{
        // console.log("Reps", this.state.reps);        
        let x=document.getElementsByClassName("counters")[this.props.position];
        // console.log(x);

        if (input>=goal){
            this.setState({success: "Success!"});
            x.style.backgroundColor= 'green';
            x.style.color = 'white';
        }
        else {
            this.setState({success: ""});
            x.style.backgroundColor= '';
            x.style.color = 'black';
        }

    }

    add = () =>{
        this.successCheck(this.state.reps+1);
        this.setState({reps: this.state.reps+1});
    }

    subtract = () =>{
        if(this.state.reps>0){
            this.successCheck(this.state.reps-1);
            this.setState({reps: this.state.reps-1});
        }
    }

    getGoal=(event)=>{
        if(event.key === 'Enter'){
            this.setState({goal: event.target.value});
        }else{
            this.setState({goalInput: event.target.value});
        }
    }

    setGoal=()=>{
        this.successCheck(this.state.reps, this.state.goalInput);
        this.setState({goal: this.state.goalInput});
    }

    getTitle =(event)=>{
        // console.log(event.key);
        if(event.key === 'Enter'){
            this.setState({title: event.target.value});
        }else{
            this.setState({titleInput: event.target.value});
        }
    }

    setTitle =()=>{
        this.setState({title: this.state.titleInput});
    }
    reset=()=>{
        this.successCheck(0);
        this.setState({reps: 0});
    }
    modifyStyle=()=>{
        this.props.deleteCounter(this.props.id);
    }
    static contextType = ThemeContext;

    render(){
        const {darkorlight} = this.context;
        console.log(darkorlight);
        return(
            <div className={`counters card br2 ba dark-gray mv4 w-100 w-50-m w-25-l mw5 ml4 pt2 pb3 ph2 ${darkorlight === 'Light'? 'b--white-20' : 'b--black-20'}`}>
                <div className={`ma0 center ${darkorlight === 'Light'? 'white' : 'black'}`}>{this.state.title}</div>
                {/* <div className="flex mt2 justify-between ph3 center"> */}
                    <div className="flex flex-row justify-between mt2">
                        <input className="w4 mt2 h1 pv1" onChange={this.getTitle} onKeyDown={this.getTitle} maxLength={20}></input>
                        <button className="w4 ml1" onClick={this.setTitle}>Change Title</button>
                    </div>
                {/* </div> */}
                <div className="flex mt2 justify-between ph3">
                    <div className="flex flex-column">
                        <input className="w4 h1 ml1 mb1 pv2" type="number" onChange={this.getGoal} onKeyDown={this.getGoal} min={0} max={10000}/>
                        <button className="w4 ml1" onClick={this.setGoal}>Set Goal</button>
                    </div>
                    <div className={`w4 ${darkorlight === 'Light'? 'white' : 'black'}`}>{this.state.goal}</div>
                </div>
                <div className="flex justify-center mv2">
                    <div onClick={this.subtract}><img src={darkorlight === 'Light'? darkMinus : minus} alt="-"/></div>
                    <div className={`mv1 mh2 ${darkorlight === 'Light'? 'white' : 'black'}`}>{this.state.reps}</div>
                    <div onClick={this.add}><img src={darkorlight === 'Light'? darkPlus : plus} alt="+"/></div>
                </div>
                <button className="mh2" onClick={this.reset}>Reset</button>
                <button onClick={this.modifyStyle}>Delete Counter</button>
                <p>{this.state.success}</p>
                {/* {console.log(this.props.id)} */}
            </div>
            )
    }
}

export default Card;