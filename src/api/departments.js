const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Fetches all departments from the backend API.
 * @returns {Promise<Array>} A promise that resolves to an array of department objects.
 */
export const getDepartments = async () => {
    try{
        const response = await fetch(`${API_BASE_URL}/departments`);
        // verify that the response is ok, codes between 200 and 299
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching departments:', error);
        throw error;
    }
};

/**
 * Adds a new department to the backend.
 * @param {Object} departmentData - The data for the new department (name, code, address).
 * @returns {Promise<Object>} A promise that resolves to the newly created department object.
 */
export const addDepartment = async (departmentData) => {
    try {
        // try to make the call
        const response = await fetch(`${API_BASE_URL}/departments`, {
            method: 'POST', // http POST call
            headers: {
                'Content-Type': 'application/json', // sending JSON
            },
            body: JSON.stringify(departmentData),
        });
        // if response not ok
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch(error) {
        console.error('Error adding department:', error);
        throw error;
    }
};

/**
 * Updates an existing department in the backend.
 * @param {Object} departmentData - The updated data for the department (must include 'id').
 * @returns {Promise<Object>} A promise that resolves to the updated department object.
 */
export const updateDepartment = async (departmentData) => {
    // verify departmentData has id to update
    if (!departmentData.id) {
        throw new Error('Department ID is required for update operation.');
    }

    try {
        const response = await fetch(`${API_BASE_URL}/departments/${departmentData.id}`, {
            method: 'PUT', // HTTP PUT method for updating
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(departmentData),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Spring Boot usually returns the updated entity
        return data;
    } catch (error) {
        console.error(`Error updating department with ID ${departmentData.id}:`, error);
        throw error;
    }
};

/**
 * Deletes a department from the backend.
 * @param {string} departmentId - The ID of the department to delete.
 * @returns {Promise<void>} A promise that resolves when the deletion is successful.
 */
export const deleteDepartment = async (departmentId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/departments/${departmentId}`, { // Append ID to the URL
            method:'DELETE', // HTTP DELETE method for deletion
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // No content expected for a successful DELETE, but we can check if it's 204 No Content
        // or if there's any JSON response if the backend sends it.
        // For now, we'll just check response.ok
    } catch (error) {
        console.error(`Error deleting department with ID ${departmentId}:`, error);
        throw error;
    }
};