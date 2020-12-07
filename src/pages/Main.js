import '../App.css';
import "@clayui/css/lib/css/atlas.css";
import Navbar from '../components/navbar';
import CardRepo from '../components/cardRepo';
import { useEffect, useState } from 'react';
import { index } from '../services/repositories';
import ClayEmptyState from '@clayui/empty-state';

export default function Main() {
    const [repositories, setRepositories] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [showModalAdd, setShowModalAdd] = useState(false);

    useEffect(() => {
        getRepositories();
    }, []);

    function getRepositories() {
        setRepositories(index());
    }

    function handleSearch(value) {
    }

    return (
        <>
            <Navbar onSearch={handleSearch} onAdd={getRepositories} />

            <div className="container full-width pt-3">
                <div className="row">
                    {repositories.map(_repository => (
                        <div key={_repository.id} className="col-4">
                            <CardRepo
                                key={_repository.id}
                                repository={_repository}
                                onHandleStar={getRepositories}
                                onDelete={getRepositories} />
                        </div>
                    ))}
                    {repositories.length < 1 && (
                        <ClayEmptyState
                            description="Add some repositories by clicking add new repository"
                            imgSrc="/empty.svg"
                            title="There is still nothing here"
                        />
                    )}
                </div>
            </div>
        </>
    )
}