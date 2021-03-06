import "@clayui/css/lib/css/atlas.css";
import ClayDropDown from '@clayui/drop-down';
import { useState } from 'react';
import { ClayInput } from '@clayui/form';
import AddRepository from './AddRepository';
import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';

export default function Navbar({ search, setSearch, onAdd, onFilterByFavorite, onSort, onListModeChange }) {
    const [menuListModeActive, setMenuListModeActive] = useState(false);
    const [menuSortActive, setMenuSortActive] = useState(false);
    const [menuAddActive, setMenuAddActive] = useState(false);
    const [filterByFavorite, setFilterByFavorite] = useState(false);
    const [listMode, setListMode] = useState('grid');

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    function handleFilterByFavorite() {
        const value = !filterByFavorite;
        setFilterByFavorite(value);
        onFilterByFavorite(value);
    }

    function handleSort(menuOption) {
        onSort(menuOption.param);
        setMenuSortActive(false);
    }

    function handleListMode(mode) {
        setListMode(mode);
        onListModeChange(mode);
        setMenuListModeActive(false);
    }

    return (
        <nav className="application-bar application-bar-light bg-white navbar navbar-expand-md">
            <div className="container-fluid container-fluid-max-xl">
                <ul className="navbar-nav">
                    <li className="nav-item mr-3">
                        <img src="https://img.icons8.com/fluent-systems-filled/24/000000/github.png" />
                    </li>
                    <li className="nav-item mr-3">
                        <div className="navbar-title navbar-text-truncate">Github Compare</div>
                    </li>
                    <li className="nav-item">
                        <ClayDropDown
                            trigger={<button className="btn">
                                Filter and order
                                <ClayIcon symbol="caret-bottom" className="ml-2" />
                            </button>}
                            active={menuSortActive}
                            onActiveChange={setMenuSortActive}
                        >
                            <ClayDropDown.Group header="Order">
                                <ClayDropDown.ItemList>
                                    {
                                        [
                                            { param: 'stargazers_count', title: 'Stars' },
                                            { param: 'forks_count', title: 'Forks' },
                                            { param: 'open_issues_count', title: 'Open Issues' },
                                            { param: 'created_at', title: 'Age' },
                                            { param: 'last_commit_date', title: 'Last commit' }
                                        ].map(_menuOption => (
                                            <ClayDropDown.Item key={_menuOption.param} onClick={() => handleSort(_menuOption)}>
                                                {_menuOption.title}
                                            </ClayDropDown.Item>
                                        ))
                                    }
                                </ClayDropDown.ItemList>
                            </ClayDropDown.Group>
                        </ClayDropDown>
                    </li>

                </ul>
                <ul className="navbar-nav full-width mx-2">
                    <li className="nav-item full-width">
                        <ClayManagementToolbar.Search>
                            <ClayInput.Group>
                                <ClayInput.GroupItem>
                                    <ClayInput
                                        aria-label="Search"
                                        className="form-control input-group-inset input-group-inset-after"
                                        type="text"
                                        defaultValue={search}
                                        value={search}
                                        onChange={handleSearch}
                                        id="searchInput"
                                        placeholder="Search"
                                    />
                                    <ClayInput.GroupInsetItem after tag="span">
                                        <ClayButton
                                            displayType="unstyled"
                                            type="submit"
                                        >
                                            <ClayIcon symbol="search" />
                                        </ClayButton>
                                    </ClayInput.GroupInsetItem>
                                </ClayInput.GroupItem>
                            </ClayInput.Group>
                        </ClayManagementToolbar.Search>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn btn-unstyled nav-btn nav-btn-monospaced mx-2" type="button">
                            <ClayIcon symbol="adjust" />
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-unstyled nav-btn nav-btn-monospaced mx-2" type="button" onClick={handleFilterByFavorite}>
                            <ClayIcon symbol={filterByFavorite ? 'star' : 'star-o'} />
                        </button>
                    </li>
                    <li className="dropdown nav-item">
                        <ClayDropDown
                            trigger={<button className="btn btn-unstyled nav-btn nav-btn-monospaced mx-2">
                                <ClayIcon symbol={listMode === 'grid' ? 'cards2' : 'cards-full'} />
                            </button>}
                            active={menuListModeActive}
                            onActiveChange={setMenuListModeActive}
                        >
                            <ClayDropDown.ItemList>
                                <ClayDropDown.Item onClick={() => handleListMode('grid')}>
                                    <ClayIcon symbol="cards2" className="mr-2" />
                                    Cards
                                </ClayDropDown.Item>
                                <ClayDropDown.Item onClick={() => handleListMode('list')}>
                                    <ClayIcon symbol="cards-full" className="mr-2" />
                                    List
                                </ClayDropDown.Item>
                            </ClayDropDown.ItemList>
                        </ClayDropDown>
                    </li>
                    <li className="nav-item">
                        <ClayDropDown
                            trigger={
                                <button className="btn btn-primary btn-monospaced ml-3" type="button">
                                    <ClayIcon symbol="plus" />
                                </button>
                            }
                            active={menuAddActive}
                            onActiveChange={setMenuAddActive}
                            className="modal-add-repository-dropdown"
                        >
                            <AddRepository
                                onCancel={setMenuAddActive}
                                onAdd={() => {
                                    onAdd();
                                    setMenuAddActive(false);
                                }} />
                        </ClayDropDown>
                    </li>
                </ul>
            </div>
        </nav>
    )
}