import React from "react";

/**
 * Functional Component that shows a list of departments with their data.
 *
 * @param {Object} props - Component's properties.
 * @param {Department[]} props.departments - Department list to show.
 * @param {(department: Department) => void} props.onEdit - Function called on click on 'Edit'.
 * @param {(department: Department) => void} props.onDelete - Function called on click on 'Delete'.
 * @returns {JSX.Element}
 */
const DepartmentTable = ({ departments, onEdit, onDelete }) => {
    return (
        // main table to return as a component.
        <table id="departments-table">
            {/* Table Header */}
            <thead>
            <tr>
                <th>Name</th>
                <th>Code</th>
                <th>Address</th>
                <th>Actions</th> 
            </tr>
            </thead>
            {/* Table body where department list will be loaded */}
            <tbody>
            {/* Condition to render if there are not departments */}
            {/* This enhance the UX by notifiying the user. */}
            {departments.length === 0 ? (
                <tr key='-1'>
                    <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                        No departments found. Add a new one!
                    </td>
                </tr>
            ) : (
                // iterate through the departments array to create a row for each one.
                // note: key= is crucial in react to let the software now what department changed,
                // has been added or deleted. The recommendation is ensure to use unique Ids.
                departments.map(department => (
                <tr key={department.id}> 
                    <td>{department.name}</td>
                    <td>{department.code}</td>
                    <td>{department.address}</td>
                    <td>
                   
                    <button className="edit-btn" onClick={() => onEdit(department)}>
                        Edit
                    </button>
                    
                    <button className="delete-btn" onClick={() => onDelete(department)}>
                        Delete
                    </button>
                    </td>
                </tr>
                ))
            )}
            </tbody>
        </table>
    );
}

export default DepartmentTable;