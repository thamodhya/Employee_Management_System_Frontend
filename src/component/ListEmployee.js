import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const ListEmployee = () => {
    const [employeeArray, setEmployeeArray] = useState([]);

    useEffect(() => {
        getAllEmployee();
    }, []);

    function getAllEmployee() {
        EmployeeService.getAllEmployee()
            .then(res => { 
                 
                const sortedEmployeeArray = res.data.sort((a, b) => a.id - b.id); 
                setEmployeeArray(sortedEmployeeArray);
                console.log(res);
            })
            .catch(e => console.log(e));
    }

    function deleteEmployee(e, id) {
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
            .then(getAllEmployee)
            .catch(e => console.log(e));
    }

    return (
        <div className='container'>
            <Link to={"/add-employee"} className='btn btn-primary mb-2 mt-3' href="">Add Employee</Link>
            <h2 className='text-center mb-4'>Employees</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeArray.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Link to={`/add-employee/${employee.id}`} className='btn btn-info'>Update</Link>{" "}
                                <button onClick={(e) => deleteEmployee(e, employee.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee;
