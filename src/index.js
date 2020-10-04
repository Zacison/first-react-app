//Import react and reactdom
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

//create react component
const App = () => {
    const button = { text: 'click me' };
    const style = { backgroundColor: 'grey', color: 'white' };
    return (
        <div>
            <form>
                <label className="label" htmlFor="name">
                    Enter name:
                </label>
                <input id="name" type="text" />
                <button style={style}>{button.text}</button>
            </form>
        </div>
    );
};

//take react component and show it on the screen using reactDOM
ReactDOM.render(<App />, document.querySelector('#root'));
