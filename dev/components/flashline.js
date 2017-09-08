import React from 'react';

class Flashline extends React.Component {
    /*{ this.props.message }*/
    render() {
        return (
            <div className="flashline">{ this.props.message }</div>
        )
    }
}

export default Flashline;
