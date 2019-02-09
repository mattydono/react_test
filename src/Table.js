import React, { Component } from 'react';

export class Table extends Component {
    render(){
        return(
            <table>
                <tbody>
                <tr>
                    <th>Unsubscribe</th>
                    <th>Bid</th>
                    <th>Mid</th>
                    <th>Ask</th>
                    <th>Last</th>
                    <th>Change</th>
                </tr>
                {this.renderedRow()}
                </tbody>
            </table>
        )
    }

    renderedRow = () => {
        return (
            <tr>
                <td><button>❌</button></td>
                <td>a</td>
                <td>b</td>
                <td>c</td>
                <td>d</td>
                <td>e</td>
            </tr>
        )
    }
}

// renderedOption = () => {
//     const currencyPairs = this.props.currencyPairs;
//     return currencyPairs.map( currencyPair => {
//         return (
//             <option>
//                 {currencyPair}
//             </option>
//         )
//     })
// }