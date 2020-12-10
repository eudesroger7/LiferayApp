import "@clayui/css/lib/css/atlas.css";
import ClayCard from '@clayui/card';
import ClayForm, { ClayInput } from '@clayui/form';
import { useState } from 'react';
import { exist, getRepository, store } from '../services/repositories';
import { api } from '../services/api';
import ClayIcon from '@clayui/icon';

export default function AddRepository({ onAdd, onCancel }) {
    const [repositoryName, setRepositoryName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        setErrorMessage('');
        setRepositoryName(event.target.value);
    }

    async function handleSubmit() {
        try {
            const responseRepository = await getRepository(repositoryName);
            let repository = responseRepository.data;
            if (!exist(repository.id)) {
                const responseCommits = await api.get(responseRepository.data.commits_url.replace('{/sha}', ''));
                repository.last_commit = (responseCommits.data && responseCommits.data.length > 0) ? responseCommits.data[0] : {};
                repository.last_commit_date = repository.last_commit.commit ? repository.last_commit.commit.author.date : null;
                const responseLanguages = await api.get(responseRepository.data.languages_url);
                repository.languages = responseLanguages.data;
                store(repository);
                setRepositoryName('');
                onAdd();
            } else {
                setErrorMessage('Repository already exists');
            }
        } catch (error) {
            setErrorMessage(error.message.includes('404') ? 'Repository not found' : 'Api error');
        }
    }

    function handleCancel() {
        setRepositoryName('');
        setErrorMessage('');
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
                                value={repositoryName}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </ClayForm.Group>
                    </ClayCard.Row>
                    {
                        errorMessage && (
                            <ClayCard.Row className="text-danger align-items-center">
                                <ClayIcon symbol="exclamation-full" className="mr-3" fontSize="18" />
                                <h5>{errorMessage}</h5>
                            </ClayCard.Row>
                        )
                    }
                    <ClayCard.Row className="align-items-center justify-content-end ">
                        <button className="btn btn-outline-secondary" onClick={handleCancel}>Cancel</button>
                        <button
                            className="btn btn-primary ml-3"
                            disabled={errorMessage || !repositoryName.length}
                            onClick={handleSubmit}>
                            Add
                            </button>
                    </ClayCard.Row>
                </ClayCard.Body>
            </ClayCard>
        </>
    )
}