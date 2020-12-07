import "@clayui/css/lib/css/atlas.css";
import ClayModal, { useModal } from '@clayui/modal';
import ClayButton from '@clayui/button';
import { useState } from 'react';

export default function ModalConfirmDelete({ repository, onConfirm, onCancel }) {
    const { observer, onClose } = useModal({
        onClose: () => {onCancel() }
    });

    function handleConfirm() {
        onConfirm();
    }

    return (
        <>
            <ClayModal
                observer={observer}
                size="sm"
                status="info"
                center={true}
                className="modal-warning"
            >
                <ClayModal.Header>Delete repository</ClayModal.Header>
                <ClayModal.Body>
                    <p>Are you sure to delete the <strong>{repository.full_name}</strong> repository?</p>
                </ClayModal.Body>
                <ClayModal.Footer
                    last={
                        <ClayButton.Group spaced>
                            <ClayButton onClick={onClose} displayType="secondary">Cancel</ClayButton>
                            <ClayButton onClick={handleConfirm} displayType="secondary" className="text-white bg-warning">Delete</ClayButton>
                        </ClayButton.Group>
                    }
                />
            </ClayModal>
        </>
    )
}