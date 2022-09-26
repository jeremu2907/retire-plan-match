import React, {Component} from 'react'
import './container.css'

export default class Result extends Component{
    stylesContainer = {
        // position: "relative",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: "50px"
    }

    styleInfo = {
        width: "30%",
        height: "auto",
        padding: "50px",
        paddingLeft: "100px",
        paddingRight: "100px",
        border: "10px rgba(2, 100, 180, 0.616) solid",
        backgroundColor: "rgba(255, 255, 255, 0.897)",
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    
    }

    render(){
        return(
            // <div style={{display: "flex", flexDirection: "column"}}>
            //     <h1 className="question" style={{marginTop: }}>You might want to consider these options</h1>
                <div style = {this.stylesContainer}>
                    <h1 className="question" style={{width:"30vw"}}>{this.props.input}</h1>
                    <div style={this.styleInfo}>
                        <h1 className="question" style={{fontSize: "40px",color: "black"}}>More info about this retirement plan</h1>
                        {this.infoPara()}
                        <a href = "https://www.tiaa.org/public/" style={{textDecoration: "none"}}>
                            <h1 className="question" style={{fontSize: "40px",color: "rgb(2, 100, 180)"}}>See what we can do for you</h1>
                        </a>
                    </div>
                </div>
        )
    }

    infoPara() {
        let index = this.props.index;
        let s;
        if(index === 0){
            s = "A 401(k) is a retirement savings and investing plan that employers offer. A 401(k) plan gives employees a tax break on money they contribute. Contributions are automatically withdrawn from employee paychecks and invested in funds of the employee’s choosing (from a list of available offerings).\n\n401(k)s have an annual contribution limit of $20,500 in 2022 ($27,000 for those age 50 or older)."
        }
        else if(index === 1){
            s = "A Traditional IRA is an Individual Retirement Account to which you can contribute pre-tax or after-tax dollars, giving you immediate tax benefits if your contributions are tax-deductible.\n\nWith a Traditional IRA, your money can grow tax-deferred, but you’ll pay ordinary income tax on your withdrawals, and you must start taking distributions after age 72. Unlike with a Roth IRA, there are no income limitations to open a Traditional IRA.\n\nIt may be a good option for those who expect to be in the same or lower tax bracket in the future."
        }
        else if(index === 2){
            s = "A Roth 401(k) is an employer-sponsored retirement savings account that is funded using after-tax dollars. This means that income tax is paid immediately on the earnings that the employee deducts from each paycheck and deposits into the account.\n\nWithdrawals from the account are tax-free upon retirement. This type of plan is different from a traditional 401(k) plan, which is funded with pretax money.\n\nIn this case, payroll deductions come out of the employee's gross income and taxes are due only when the money is withdrawn from the account."
        }
        else if(index === 3){
            s = "A Roth IRA is an Individual Retirement Account to which you contribute after-tax dollars. While there are no current-year tax benefits, your contributions and earnings can grow tax-free, and you can withdraw them tax- and penalty-free after age 59½ and once the account has been open for five years.\n\nA Roth IRA can be a good savings option for those who expect to be in a higher tax bracket in the future, making tax-free withdrawals even more advantageous.\n\nHowever, there are income limitations to open a Roth IRA, so not everyone will be eligible for this type of retirement account."
        }
        else if(index === 4){
            s = "There are generally two broad types of 403(b) plan—the traditional and the Roth. Not all employers allow employees access to the Roth version.\n\nA traditional plan allows the employee to have pretax money automatically deducted from each paycheck and paid into a personal retirement account.\n\nThe employee has put away some money for the future and at the same time reduced his or her gross income (and income taxes owed for the year). The taxes will be due on that money only when the employee withdraws it.\n\nA Roth 403(b) requires that after-tax money be paid into the retirement account. There's no immediate tax advantage. But the employee will not owe any more taxes on that money or the profit it accrues when it is withdrawn."
        }
        else{
            s = "A thrift savings plan (TSP) is a type of retirement investment program open only to federal employees and members of the uniformed services, including the Ready Reserve. It is a defined-contribution (DC) plan that offers federal employees many of the same benefits that are available to workers in the private sector. TSP benefits can include automatic payroll contributions and agency matching contributions.\n\nParticipants can choose to make tax-deferred contributions into a traditional TSP, which means the money that flows into the account will not be taxed until it is withdrawn. They may also choose to invest in a Roth TSP. This option allows employees to make after-tax contributions to their plans so that they’ll owe nothing in taxes when they withdraw the money after retiring.\n\nIn either case, the contribution limit to a TSP is $20,500 for 2002 (the same as for 401(k) plans)."
        }

        return(<text className="question info" style ={{fontSize:"20px", color: "black"}}>{s}</text>)
    }
}