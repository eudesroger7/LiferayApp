import "@clayui/css/lib/css/atlas.css";
import ClayCard from '@clayui/card';
import ClayForm, { ClayInput } from '@clayui/form';
import { useState } from 'react';
import { getRepository, store } from '../services/repositories';
import { api } from '../services/api';

export default function AddRepository({ onAdd, onCancel }) {
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [repositoryName, setRepositoryName] = useState(true);

    function handleChange(event) {
        if (event.target.value.length >= 1) {
            setBtnDisabled(false);
            setRepositoryName(event.target.value);
        } else {
            setBtnDisabled(true);
        }
    }

    async function handleSubmit() {
        try {
            const responseRepository = await getRepository(repositoryName);
            let repository = responseRepository.data;
            const responseCommits = await api.get(responseRepository.data.commits_url.replace('{/sha}', ''));
            repository.last_commit = (responseCommits.data && responseCommits.data.length > 0) ? responseCommits.data[0] : {};
            repository.last_commit_date = repository.last_commit.commit ? repository.last_commit.commit.author.date : null;
            store(repository);
            setRepositoryName('');
            onAdd();
        } catch (error) {
            console.log(error.message);
        }
    }

    function handleCancel() {
        setRepositoryName('');
        onCancel();
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
                        <button className="btn btn-outline-secondary" onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-primary ml-3" disabled={btnDisabled} onClick={handleSubmit}>Add</button>
                    </ClayCard.Row>
                </ClayCard.Body>
            </ClayCard>
        </>
    )
}