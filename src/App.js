import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";
class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         transaction: [],
    //     }
    // }
    state = {
        transactions: [],
        description: '',
        amount: '',
    }

    addTransaction = add => {

        const transactions = [...this.state.transactions];

        transactions.push({
            id: `cmr${(+new Date).toString(16)}`,
            description: this.state.description,
            amount: this.state.amount,
            add
        });

        this.setState({
            transactions,
            description: '',
            amount: ''});
    }
    addAmount = e => {
        this.setState({amount: e.target.value});
    }
    addDescription = e => {
        this.setState({description: e.target.value});
    }


 render() {
     return (
         <>
             <Header/>
             <main>
                 <div className='container'>
                     <Total/>
                     <History transactions={this.state.transactions}/>
                     <Operation
                     addTransaction={this.addTransaction}
                     addAmount={this.addAmount}
                     addDescription={this.addDescription}
                     description={this.state.description}
                     amount={this.state.amount}
                     />
                 </div>
             </main>
         </>
     );
 }
}

export default App;
