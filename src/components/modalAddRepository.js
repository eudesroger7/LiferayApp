import "@clayui/css/lib/css/atlas.css";
import ClayCard from '@clayui/card';
import ClayForm, { ClayInput } from '@clayui/form';
import { useState } from 'react';
import { getRepository, store } from '../services/repositories';

export default function ModalAddRepository({ onAdd }) {
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [repository, setRepository] = useState(true);

    function handleChange(event) {
        if (event.target.value.length >= 1) {
            setBtnDisabled(false);
            setRepository(event.target.value);
        } else {
            setBtnDisabled(true);
        }
    }

    async function handleSubmit() {
        try {
            const response = await getRepository(repository);
            store(response.data);
            onAdd();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <ClayCard className="modal-add-repository">
                <ClayCard.Body>
                    <ClayCard.Row className="align-items-center justify-content-between ">
                        <h3>New Repository</h3>
                    </ClayCard.Row>
                    <ClayCard.Row className="align-items-center justify-content-between mt-3 mb-4">
                        <ClayForm.Group className="full-width">
                            <label htmlFor="repositoryInput">Repository*</label>
                            <ClayInput
                                id="repositoryInput"
                                type="text"
                                onKeyUp={handleChange}
                                required
                            />
                        </ClayForm.Group>
                    </ClayCard.Row>
                    <ClayCard.Row className="align-items-center justify-content-end ">
                        <button className="btn btn-outline-secondary">Cancel</button>
                        <button className="btn btn-primary ml-3" disabled={btnDisabled} onClick={handleSubmit}>Add</button>
                    </ClayCard.Row>
                </ClayCard.Body>
            </ClayCard>
        </>
    )
}