import React, {Component} from 'react'
import OptionCard from './option-card.jsx'
import Result from './result.jsx'
import './container.css'
export default class Container extends Component{
    state = {
        initialState:0,
        question:["What kind of work do you do?", "What is your priority when paying tax?", "How long will you be working?", "How much can you contribute to your retirement?", "When are you retiring?"],
        industry:[
            ["Private Sector", "I work for a company independent from any government control"],
            ["Public Sector", "I work for a local or federal institution"],
            ["Self Employed", "I am self employed, or I have a business, or I am an independent contractor"],
            [ "Service Member", "I am part of the state / federal uniformed service member"]
        ],
        priority: [["Pay as little now as possible","Part of your current income becomes non-taxable so you won't have to pay as much now, but will pay later once you withdraw your retirement"],["Pay tax in full taxable income then not paying later","Your full income will be taxable. But later on you won't be paying any tax when you withdraw your retirement"]],
        age: [["I expect to work after 50 years old",""],["I think I am good at around 50 years old",""]],
        contribution: [["Less than $ 6,000 per year",""], ["Less than $ 20,500 per year",""]],
        timetilretire: [
                            ["I am still young, I have not thought about it yet","You are still at least about 40 years until you retire"],
                            ["Sometimes I think about it","You are still at least about 20 years until you retire"],
                            ["I am about to retire", "You are almost at the typical age of retirement in the U.S (66 years old)"]
                        ],
        retirementPlans:  [0,0,0,0,0,0],
        retirementPlanName: ["Traditional 401k", "Traditional IRA", "Roth 401k", "Roth IRA", "403b", "Thrift Savings Plan"],
        matchList:[]
        // trad401, tradIRA, roth401, rothIRA, 403b, tsp
    }

    styles = {
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
    
    render(){
        return(
            <div style={{width: "100%", justifyContent: "center"}}>
                <h1 id = "q" className="question">{this.state.question[this.state.initialState]}</h1>

                <div id="one" className="choiceContainer" >
                    {this.state.industry.map(industry => <div key={industry[0]} onClick={event => this.add(industry[0])}><OptionCard input = {industry}/></div>)}
                </div>
                <div id="two" className="choiceContainer" style={{display: "none"}}>
                    {this.state.priority.map(priority => <div key={priority[0]} onClick={event => this.add(priority[0])}><OptionCard input = {priority}/></div>)}
                </div>
                <div id="three" className="choiceContainer" style={{display: "none"}}>
                    {this.state.age.map(age => <div key={age[0]} onClick={event => this.add(age[0])}><OptionCard input = {age}/></div>)}
                </div>
                <div id="four" className="choiceContainer" style={{display: "none"}}>
                    {this.state.contribution.map(contribution => <div  key={contribution[0]} onClick={event => this.add(contribution[0])}><OptionCard input = {contribution}/></div>)}
                </div>
                <div id="five" className="choiceContainer" style={{display: "none"}}>
                    {this.state.timetilretire.map(timetilretire => <div  key={timetilretire[0]} onClick={event => this.add(timetilretire[0])}><OptionCard input = {timetilretire}/></div>)}
                </div>

                <div id="result" style={{display: "none", overflowY: "auto",backgroundImage: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.70)"}}>
                    {/* <Result input= {this.state.retirementPlanName[this.state.retirementPlans.indexOf(Math.max(...this.state.retirementPlans))]} 
                            index = {this.state.retirementPlans.indexOf(Math.max(...this.state.retirementPlans))}/> */}
                    <h1 className = "question" style={{marginTop: "50px", color:"rgba(255, 255, 255,1)", borderBottom: "solid white 10px" }}>Here are a few options you can consider</h1> 
                    {this.state.matchList.map
                        (matchList => <div key={matchList}>
                            <Result input= {this.state.retirementPlanName[matchList]} index ={matchList}/> </div>)
                    }

                    <div style={{display:"flex", flexDirection: "column", color: "white",justifySelf: "left", backgroundColor: "rgba(255, 255, 255, 0.857)"}}>
                        <p className="readings" style ={{fontSize: "24px", color: "rgba(2, 100, 180, 0.616)"}}>Sources for Further Reading</p>
                        <a className="readings" target="_blank" rel="noreferrer" style={{textDecoration: "none",color: "black"}} href="https://www.nerdwallet.com/article/investing/what-is-a-401k#:~:text=A%20401(k)%20is%20a,a%20list%20of%20available%20offerings).">Trad. 401k</a>
                        <a className="readings" target="_blank" rel="noreferrer" style={{textDecoration: "none",color: "black"}} href="https://www.schwab.com/ira/trad-ira/what-is-a-trad-ira">Trad. IRA</a>
                        <a className="readings"target="_blank" rel="noreferrer" style={{textDecoration: "none",color: "black"}} href="https://www.investopedia.com/terms/r/roth401k.asp#:~:text=A%20Roth%20401(k)%20is,are%20tax%2Dfree%20upon%20retirement.">Roth 401k</a>
                        <a className="readings"target="_blank" rel="noreferrer" style={{textDecoration: "none",color: "black"}} href="https://www.schwab.com/ira/roth-ira/what-is-a-roth-ira#:~:text=after%2Dtax%20dollars.-,A%20Roth%20IRA%20is%20an%20Individual%20Retirement%20Account%20to%20which,been%20open%20for%20five%20years.">Roth IRA</a>
                        <a className="readings"target="_blank" rel="noreferrer" style={{textDecoration: "none",color: "black"}} href="https://www.investopedia.com/terms/1/403bplan.asp#:~:text=There%20are%20generally%20two%20broad,into%20a%20personal%20retirement%20account.">403b</a>
                        <a className="readings"target="_blank" rel="noreferrer" style={{textDecoration: "none",color: "black"}} href="https://www.investopedia.com/terms/t/thrift_savings_plan.asp">TSP</a><br/>
                    </div>
                </div>
            </div>
        )
    }

    plans () {
        let s = Math.max(...this.state.retirementPlans);
        let r = []
        for(let i = 0; i < this.state.retirementPlans.length; i++){
            if(this.state.retirementPlans[i] === s)
                r.push(i)
        }
        this.setState({matchList: r})
    }

    add = (choice) => {
        if(this.state.initialState === 4){
            this.plans()
            document.getElementById("q").style.display = "none"
            document.getElementById("five").style.display = "none"
            document.getElementById("result").style.height = "100vh"
            document.getElementById("result").style.display = "flex"
            document.getElementById("result").style.flexDirection = "column"
            document.getElementById("result").style.justifyContent = "flexStart"
        }
        if (this.state.initialState <= 4){
            this.setState({initialState: this.state.initialState + 1},() => {
                if(this.state.initialState === 1){
                    document.getElementById("one").style.display = "none"
                    document.getElementById("two").style.display = "flex"
                }
                else if(this.state.initialState === 2){
                    document.getElementById("two").style.display = "none"
                    document.getElementById("three").style.display = "flex"
                }
                else if(this.state.initialState === 3){
                    document.getElementById("three").style.display = "none"
                    document.getElementById("four").style.display = "flex"
                }
                else if(this.state.initialState === 4){
                    document.getElementById("four").style.display = "none"
                    document.getElementById("five").style.display = "flex"
                    // this.setState({initialState: this.state.initialState + 1})
                }
            });



        }

        let temp = this.state.retirementPlans;
        console.log(choice)
        if(choice === "Self Employed"){
            temp[2]++
            temp[3]++
        }
        else if(choice === "Service Member" || choice === "Public Sector"){
            temp[5] += 3
            temp[4] += 3
        }
        else if("Private Sector"){
            temp[0]++
            temp[1]++
            temp[2]++
            temp[3]++
        }

        if(choice === "Pay as little now as possible"){
            temp[0]++
            temp[1]++
            temp[5]++
            temp[4]++
        }
        else if(choice === "Pay tax in full taxable income then not paying later"){
            temp[2]++
            temp[3]++
        }

        if(choice === "I expect to work after 50 years old"){
            temp[0]++
            temp[2]++
            temp[3]++
            temp[5]++
            temp[4]++
        }
        else if(choice === "I think I am good at around 50 years old"){
            temp[1]++
        }

        if(choice === "Less than $ 6,000 per year"){
            temp[1]++
            temp[3]++
        }
        else if(choice === "Less than $ 20,500 per year"){
            temp[0]++
            temp[2]++
            temp[4]++
            temp[5]++
        }

        if(choice === "I have not thought about it yet"){
            temp[0]++
            temp[2]++
            temp[1]++
            temp[3]++
            temp[4]++
            temp[5]++
        }
        else if(choice === "Sometimes I think about it"){
            temp[1]++
            temp[3]++
            temp[4]++
        }
        else if(choice === "I am about to retire"){
            temp[0]++
            temp[2]++
            temp[3]++
            temp[5]++
        }
        
        this.setState({retirementPlans: temp});
    }
}