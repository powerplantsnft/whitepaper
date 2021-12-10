import React from "react";
import { Collapse } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";

//import CSS
import './roadmapitem.css';
class RoadMapItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render () {
        return (
            <div>
                <div onClick={() => {this.setState({open: !this.state.open})}}
                    // aria-controls='example'
                    // aria-expanded={this.state.open}
                    className='collapse-header-control' >
                    <div className='collapse-header'>
                        {/* <h4>{this.props.tag}</h4> */}
                        <p>{this.props.title}</p>
                    </div>
                    {/* <BsPlusLg /> */}
                </div>
                {/* <Collapse in={this.state.open}> */}
                    <div id="example" className='collapse-content display-linebreak'>
                        {this.props.content}
                        <a href={this.props.custom}>{this.props.linky}</a>
                        <a href={this.props.custom2}>{this.props.linky2}</a>
                        <a href={this.props.custom3}>{this.props.linky3}</a>
                        <a href={this.props.custom4}>{this.props.linky4}</a> 
                    </div>
                {/* </Collapse> */}
            </div>
        );
    }
}

export default RoadMapItem;