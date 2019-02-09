import React, { Component } from 'react';

export class Selector extends Component {
    render(){
        return(
            <div>
                <select className="currencyOptions" value={this.props.selectedCurrencyPair}>
                    {this.renderedOption()}
                </select>
                <button className="Subscribe" onClick={this.onSubscribe}>Subscribe</button>
            </div>
        )
    }

    onSubscribe = () => {
        this.props.subbedPairs.add(this.props.selectedCurrencyPair);
    };

    renderedOption = () => {
        const { currencyPairs } = this.props;
        return currencyPairs.map( currencyPair => {
            return (
                <option key={currencyPair} onClick={this.props.handleCurrencyChange}>
                    {currencyPair}
                </option>
            )
        })
    }
}

// private renderedUser = () => {
//     const {users, activeUserId} = this.props;
//     return users.map(user => {
//         const isActive = activeUserId === user.id;
//         const className = isActive ? 'active' : 'inactive';
//         const onClick = this.userSelect(activeUserId === user.id ? null : user.id);
//         return (
//             <div key={user.id} className={`userOption ${className}`} onClick={onClick}>
//                 {isActive && (
//                     <button type="button" className="removeUser" onClick={this.onRemoveUser}>
//                         ❌
//                     </button>
//                 )}
//                 {user.name}
//             </div>
//         );
//     });
// };