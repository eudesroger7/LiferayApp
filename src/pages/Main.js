import '../App.css';
import "@clayui/css/lib/css/atlas.css";
import Navbar from '../components/navbar';
import CardRepo from '../components/cardRepository';
import { useEffect, useState } from 'react';
import { index } from '../services/repositories';
import ClayEmptyState from '@clayui/empty-state';
import { isFavorite } from '../utils/utils';
import ClayButton from '@clayui/button';

export default function Main() {
    const [repositories, setRepositories] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [filterByFavorite, setFilterByFavorite] = useState(false);
    const [listMode, setListMode] = useState('grid');

    useEffect(() => {
        getRepositories();
    }, [search, filterByFavorite, sort]);

    function getRepositories() {
        let data = index();
        if (filterByFavorite) {
            data = data.filter(_repository => isFavorite(_repository.id));
        }
        if (search) {
            const term = search.toLowerCase();
            data = data.filter(_repository => _repository.full_name && _repository.full_name.toLowerCase().includes(term));
        }
        if (sort) {
            data = data.sort((a, b) => a[sort] < b[sort] ? 1 : -1);
        }
        setRepositories(data);
    }

    function handleSearch(value) {
        setSearch(value);
    }

    async function handleFilterByFavorite(value) {
        setFilterByFavorite(value);
    }

    function handleClearFilter() {
        setSearch('');
        setSort('');
    }

    function handleSort(value) {
        setSort(value);
    }

    function handleListMode(mode) {
        setListMode(mode);
    }

    return (
        <>
            <Navbar
                search={search}
                onSearch={handleSearch}
                onAdd={getRepositories}
                onSort={handleSort}
                onListModeChange={handleListMode}
                onFilterByFavorite={handleFilterByFavorite} />

            <div className="container full-width pt-3">
                <div className="row">
                    {repositories.map(_repository => (
                        <div key={_repository.id} className={listMode == 'list' ? 'col-12' : 'col-4'}>
                            <CardRepo
                                key={_repository.id}
                                type={listMode}
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
                        >
                            <ClayButton displayType="secondary" onClick={handleClearFilter}>Clear Filter</ClayButton>
                        </ClayEmptyState>
                    )}
                </div>
            </div>
        </>
    )
}