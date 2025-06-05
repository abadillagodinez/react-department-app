import React, { useEffect, useRef} from "react"; // import react and the needed hooks

/**
 * Functional Component that shows a modal to add or edit departments.
 *
 * @param {Object} props - Component's properties.
 * @param {boolean} props.isOpen - Whether the modal is open or not.
 * @param {() => void} props.onClose - Function called when the modal is closed.
 * @param {(department: Department) => void} props.onSubmit - Function called when submitting the department form.
 * @param {Department} [props.initialData] - Optional object with data of the department to edit.
 * @returns {JSX.Element}
 */
const DepartmentModal = ({ isOpen, onClose, onSubmit, initialData }) => {
    // useRef if for obtain the form element reference
    const formRef = useRef(null);

    // useEffect is executed after every new render
    // here is used to reset the form or preloading it before editing
    useEffect(() => {
        if(isOpen && formRef.current) {  // this means that there is a reference for the form and is opened

            if(initialData){  // if there is coming info to edit on the form
                formRef.current.name.value = initialData.name || '';
                formRef.current.code.value = initialData.code || '';
                formRef.current.address.value = initialData.address || '';
            } else {  // if there is no initial data we're adding
                formRef.current.reset();
            }
        }
    }, [isOpen, initialData]); // those are the dependencies used by useEffet if those values change this effect is executed again


    // if the modal should not be opened, return null
    if(!isOpen){
        return null;
    }

    /**
     * Function to handle the submit for the CTA button.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form to reload

        // create an object 'updatedData' with the updated inputs from the form
        const updatedData = {
            name: e.target.name.value,
            code: e.target.code.value,
            address: e.target.address.value,
        };

        // if we're editing, the id is needed to add in the updatedData so the 
        // backend knows which Department is going to be updated
        if(initialData && initialData.id){
            updatedData.id = initialData.id;
        }

        // send the info and close the modal
        onSubmit(updatedData);
        onClose();
    };

    return (
        // modal main container.
        // apply styles later.
        <div id="modal" className="modal-overlay"> {/* modal-overlay can be use for a darker backgroun */}
            {/* modal content */}
            <div id="modal-content">
                {/* modal title: "Edit Department" if there's initialData (with id), "Add Department" if not. */}
                <h3>{initialData?.id ? "Edit Department" : "Add Department"}</h3>

                {/* Form to add/edit a Department */}
                <form ref={formRef} onSubmit={handleSubmit}> {/* Assign the ref to the form */}
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required 
                    />

                    <label htmlFor="code">Code</label>
                    <input
                        id="code"
                        name="code"
                        type="text"
                        required
                    />

                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        required 
                    />

                    {/* modal actions (cancel and save buttons) */}
                    <div className="modal-actions">
                        <button type="button" className="cancel" onClick={onClose}>
                        Cancel
                        </button>
                        <button type="submit" className="save">
                        Save
                        </button>
                    </div>
                </form>

                {/* Close button for the modal (the 'x') */}
                <button className="close-button" onClick={onClose}>×</button>
            </div>
        </div>
    );
};

export default DepartmentModal;