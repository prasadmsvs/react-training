import React from 'react';
import './Infobox.css';
import context from './../../context';
import { connect } from 'react-redux';
class Infobox extends React.Component {
    render(){
        let name = ''
        if(this.props.simplereducer.empInfo.name !== undefined){
            name = this.props.simplereducer.empInfo.name;
        }
        let dept = ''
        if(this.props.simplereducer.empInfo.dept !== undefined){
            dept = this.props.simplereducer.empInfo.dept;
        }
        return(
            <context.Consumer>
                {
                    context =>{
                       return <div className={`infobox ${context==="dark"? "dark": ""}`}>
                            {name + "-"+ dept+ "-"+ context}
                            </div>
                    }
                }
            
            </context.Consumer>
        )
    }
        
}

const mapStateToProps = state => ({
    ...state
})


export default connect(mapStateToProps, null)(Infobox);
