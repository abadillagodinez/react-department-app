import React, { useState, useEffect, useCallback } from 'react'; // Import React and necessary hooks
import DepartmentTable from '../components/DepartmentTable';     // Import our DepartmentTable component
import DepartmentModal from '../components/DepartmentModal';     // Import our DepartmentModal component
import ConfirmationModal from '../components/ConfirmationModal'; // Import our ConfirmationModal component

// Import API functions
import { getDepartments, addDepartment, updateDepartment, deleteDepartment } from '../api/departments';

const DepartmentsPage = () => {

    // set all state variables for the department page
    const [departments, setDepartments] = useState([]);                     // Initial state for departments is an empty array.

    // State to control the visibility of the Add/Edit Department modal.
    const [isModalOpen, setIsModalOpen] = useState(false);                  // True means the modal is open, false means it's closed.

    // State to hold the data of the department currently being edited.
    const [editingDepartment, setEditingDepartment] = useState(null);       // If null, it means we are in "add" mode.

    // State to control the visibility of the confirmation modal (for deletion).
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    // State to hold the department to be deleted.
    const [departmentToDelete, setDepartmentToDelete] = useState(null);     // This helps us pass the correct department ID to the delete function.

    // State for loading indicators (optional, but good for UX)
    const [isLoading, setIsLoading] = useState(false);

    // State for error messages (optional, good for debugging/user feedback)
    const [error, setError] = useState(null);

    // useCallback is used to memoize functions. This prevents unnecessary re-renders
    // of child components (like DepartmentTable) if these functions are passed as props,
    // as long as their dependencies don't change.
    // This function fetches departments from the API and updates the state.
    const fetchDepartments = useCallback(async() => {
        setIsLoading(true); // Set loading to true before fetching
        setError(null);     // Clear any previous errors

        try {
            const data = await getDepartments(); // Call our API function
            setDepartments(data);
        } catch (error) {
            console.error("Failed to fetch departments:", error);
            setError("Failed to load departments. Please try again later."); // Set an error message
        } finally {
            setIsLoading(false);
        }
    }, []); // Empty dependency array means this function is created once when the component mounts

    // useEect hook to run `fetchDepartments` once when the component mounts.
    // The empty dependency array `[]` ensures it only runs on the initial render.
    useEffect(() => {
        fetchDepartments();
    }, [fetchDepartments]);

    // Handler for opening the Add Department modal.
    const handleAdd = () => {
        setEditingDepartment(null); // Clear any previous editing data
        setIsModalOpen(true); // Open the modal
    };

    // Handler for opening the Edit Department modal.
    const handleEdit = (department) => {
        setEditingDepartment(department); // Set the department to be edited
        setIsModalOpen(true); // Open the modal
    };

    // Handler for opening the Delete Conrmation modal.
    const handleDelete = (department) => {
        setDepartmentToDelete(department); // Store the department to be deleted
        setIsConfirmModalOpen(true); // Open the conrmation modal
    };

    // handler for closing the modals
    const handleCloseModal = () => {
        setIsModalOpen(false);          // Close the Add/Edit modal
        setEditingDepartment(null);     // Clear editing data
        setIsConfirmModalOpen(false);   // Close the conrmation modal
        setDepartmentToDelete(null);    // Clear department to delete
        setError(null);                 // Clear any modal-related errors
    }

    // Handler for submitting the Add/Edit form.
    const handleSubmitDepartment = async (departmentData) => {
        setIsLoading(true); // Show loading indicator
        setError(null);     // Clear errors
        try {
        if (departmentData.id) {
            // If departmentData has an ID, we are updating an existing department.
            await updateDepartment(departmentData);
        } else {
            // Otherwise, we are adding a new department.
            await addDepartment(departmentData);
        }
        fetchDepartments(); // Re-fetch all departments to update the list
        } catch (err) {
            console.error("Failed to save department:", err);
            setError("Failed to save department. Please check your input."); // Set an error message
        } finally {
            setIsLoading(false); // Hide loading indicator
        }
    };

    // Handler for confirming deletion.
    const handleConfirmDelete = async () => {
        if (departmentToDelete) {
            setIsLoading(true); // Show loading indicator
            setError(null);     // Clear errors
            try {
                await deleteDepartment(departmentToDelete.id); // Call the delete API function
                fetchDepartments(); // Re-fetch departments to update the list
                handleCloseModal(); // Close the confirmation modal
            } catch (err) {
                console.error("Failed to delete department:", err);
                setError("Failed to delete department. It might be linked to other data."); // Set an error message
            } finally {
                setIsLoading(false); // Hide loading indicator
            }
        }
    }

     return (
    // Main container for the whole departments page
    <div id="container">
        <div id="card"> {/* A card-like container for the main content */}
            <div id="header">
                <h2 className="header-h2">Department List</h2>
                {/* Button to add a new department. Calls handleAdd when clicked. */}
                <button id="add-btn" onClick={handleAdd}>+ Add Department</button>
            </div>

            {/* Display loading message while fetching data */}
            {isLoading && <p className="loading-message">Loading departments...</p>}
            {/* Display error message if something went wrong */}
            {error && <p className="error-message">{error}</p>}

            {/* Our DepartmentTable component.
                We pass the list of departments and the action handlers as props. */}
            <DepartmentTable
                departments={departments}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {/* Our DepartmentModal component.
                Its visibility depends on isModalOpen.
                We pass current editing data (or null for add), and submit/close handlers. */}
            <DepartmentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmitDepartment}
                initialData={editingDepartment}
            />

            {/* Our ConfirmationModal component (for delete).
                Its visibility depends on isConfirmModalOpen. */}
            <ConfirmationModal
                isOpen={isConfirmModalOpen}
                title="Confirm Deletion"
                message={`Are you sure you want to delete department: "${departmentToDelete?.name}"? This action cannot be undone.`}
                onConfirm={handleConfirmDelete}
                onCancel={handleCloseModal} // Closing the confirm modal is like cancelling
            />
        </div>
    </div>
  );
};

export default DepartmentsPage;