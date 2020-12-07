import "@clayui/css/lib/css/atlas.css";
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import { isFavorite, markAsFavorite, unmarkAsFavorite } from '../utils/utils';
import { destroy } from '../services/repositories';
import ModalConfirmDelete from './modalConfirmDelete';
import { useState } from 'react';
import ClayIcon from '@clayui/icon';

export default function CardRepo({ repository, onHandleStar, onDelete }) {

    const [showModalConfirmDelete, setShowModalConfirmDelete] = useState(false);

    function handleStar() {
        isFavorite(repository.id) ? unmarkAsFavorite(repository.id) : markAsFavorite(repository.id);
        onHandleStar();
    }

    function handleDelete() {
        destroy(repository);
        onDelete();
    }

    if (!repository) return null;

    return (
        <>
            <ClayCard displayType="file">
                <ClayCard.Body>
                    <ClayCard.Row className="align-items-center justify-content-between ">
                        <ClayCard.Description displayType="title" >
                            <img className="avatar" src={repository.owner.avatar_url} />
                            {repository.full_name}
                        </ClayCard.Description>
                        <div className="row">
                            <button className="btn btn-unstyled nav-btn nav-btn-monospaced" type="button" onClick={handleStar}>
                                <ClayIcon symbol={isFavorite(repository.id)? 'star' : 'star-o'} />
                            </button>
                            <button className="btn btn-unstyled nav-btn nav-btn-monospaced" type="button" onClick={() => setShowModalConfirmDelete(true)}>
                            <ClayIcon symbol="trash" />
                            </button>
                        </div>
                    </ClayCard.Row>
                    <ClayCard.Row>
                        <div className="autofit-col autofit-col-expand">
                            <section className="autofit-section">
                                <ClayCard.Row className="align-items-center">
                                    <ClayCard.Description displayType="title" className="mr-2">Stars</ClayCard.Description>
                                    <ClayCard.Description displayType="text">{repository.stargazers_count}</ClayCard.Description>
                                </ClayCard.Row>
                                <ClayCard.Row className="align-items-center">
                                    <ClayCard.Description displayType="title" className="mr-2">Forks</ClayCard.Description>
                                    <ClayCard.Description displayType="text">{repository.forks_count}</ClayCard.Description>
                                </ClayCard.Row>
                                <ClayCard.Row className="align-items-center">
                                    <ClayCard.Description displayType="title" className="mr-2">Open Issues</ClayCard.Description>
                                    <ClayCard.Description displayType="text">{repository.open_issues_count}</ClayCard.Description>
                                </ClayCard.Row>
                                <ClayCard.Row className="align-items-center">
                                    <ClayCard.Description displayType="title" className="mr-2">Age</ClayCard.Description>
                                    <ClayCard.Description displayType="text">{repository.created_at}</ClayCard.Description>
                                </ClayCard.Row>
                                <ClayCard.Row className="align-items-center">
                                    <ClayCard.Description displayType="title" className="mr-2">Last Commit</ClayCard.Description>
                                    <ClayCard.Description displayType="text">{repository.last_commit_date}</ClayCard.Description>
                                </ClayCard.Row>
                                <ClayCard.Row className="align-items-center">
                                    <ClayCard.Description displayType="title" className="mr-2">License</ClayCard.Description>
                                    <ClayCard.Description displayType="text">{repository.license && repository.license.name}</ClayCard.Description>
                                </ClayCard.Row>
                                <ClayCard.Caption>
                                    {repository.language && <ClayLabel displayType="warning">{repository.language}</ClayLabel>}
                                </ClayCard.Caption>
                            </section>
                        </div>
                    </ClayCard.Row>
                </ClayCard.Body>
            </ClayCard>

            {
                showModalConfirmDelete && (
                    <ModalConfirmDelete
                        repository={repository}
                        onCancel={setShowModalConfirmDelete}
                        onConfirm={handleDelete} />
                )
            }
        </>
    )
}