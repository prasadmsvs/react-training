import React from 'react';
import { connect } from 'react-redux';
import './Employee.css';
import { showEmployee } from './../../actions/simpleaction';
class Employees extends React.Component{
    constructor(){
        super();
        this.showEmployee = this.showEmployee.bind(this);
    }
    showEmployee(index){
       this.props.showEmployee(index);
    }
    render(){
        console.log(this.props);
        return(
            <ul className="list">
                {this.props.simplereducer.empDetails.map((employee, index) => {
                    return <li key={index} onClick={()=>this.showEmployee(index)}>{employee.name}</li>
                })}
            </ul>
        )
    }
}
const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    showEmployee: (index) => dispatch(showEmployee(index))
})
export default connect(mapStateToProps, mapDispatchToProps)(Employees);