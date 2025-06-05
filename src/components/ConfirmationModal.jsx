import React from 'react'; // Gotta import React for our component to work its magic

/**
 * Functional Component that shows a modal to add or edit departments.
 *
 * @param {Object} props - Component's properties.
 * @param {boolean} props.isOpen - Whether the modal is open or not.
 * @param {string} props.title - Title for the modal.
 * @param {string} props.message - Message for the modal.
 * @param {() => void} props.onConfirm - Function called when the confirmation is positvi.
 * @param {() => void} props.onCancel - Function called when cancelling the submition on the form.
 * @returns {JSX.Element}
 */
const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  // If 'isOpen' is false, we just return nothing. Modal disappears.
  if (!isOpen) {
    return null;
  }

  // If it *is* open, let's render the modal!
  return (
    // This is the dark overlay that covers the rest of the screen.
    // It makes the modal pop out and prevents clicks outside of it.
    <div id="confirmation-modal-overlay" className="modal-overlay">
      {/* This is the actual box for the modal content */}
      <div id="confirmation-modal-content">
        {/* The main question or title for our confirmation */}
        <h3>{title}</h3>

        {/* The more detailed message explaining what's about to happen */}
        <p>{message}</p>

        {/* The buttons that let the user decide */}
        <div className="modal-actions align-center">
            {/* 'Cancel' button: just calls the onCancel prop function */}
            <button type="button" className="cancel" onClick={onCancel}>
                Cancel
            </button>
            {/* 'Confirm' button: calls the onConfirm prop function */}
            <button type="button" className="confirm" onClick={onConfirm}>
                Confirm
            </button>
        </div>

        {/* An 'X' button to close the modal, just like the other one */}
        {/* We'll use the onCancel prop for this too, usually they do the same thing */}
        <button className="close-button" onClick={onCancel}>×</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;