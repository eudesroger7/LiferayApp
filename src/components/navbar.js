import "@clayui/css/lib/css/atlas.css";
import ClayDropDown from '@clayui/drop-down';
import { useState } from 'react';
import { ClayInput } from '@clayui/form';
import ModalAddRepository from './modalAddRepository';
import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayButton from '@clayui/button';

export default function Navbar({ onSearch, onAdd }) {
    const [menuListTypeActive, setMenuListTypeActive] = useState(false);
    const [menuOrderActive, setMenuOrderActive] = useState(false);
    const [menuAddActive, setMenuAddActive] = useState(false);

    function handleSearch(event) {
        onSearch(event.target.value);
    }

    return (
        <nav className="application-bar application-bar-light bg-white navbar navbar-expand-md">
            <div className="container-fluid container-fluid-max-xl">
                <ul className="navbar-nav">
                    <li className="nav-item mr-3">
                        <img src="https://img.icons8.com/fluent-systems-regular/24/000000/github.png" />
                    </li>
                    <li className="nav-item mr-3">
                        <div className="navbar-title navbar-text-truncate">Github Compares</div>
                    </li>
                    <li className="nav-item">
                        <ClayDropDown
                            trigger={<button className="btn">Filter and order</button>}
                            active={menuOrderActive}
                            onActiveChange={setMenuOrderActive}
                        >
                            <ClayDropDown.ItemList>
                                <ClayDropDown.Item>
                                    Cards
                                </ClayDropDown.Item>
                                <ClayDropDown.Item>
                                    List
                                </ClayDropDown.Item>
                            </ClayDropDown.ItemList>
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
                                        defaultValue="Red"
                                        type="text"
                                    />
                                    <ClayInput.GroupInsetItem after tag="span">
                                        <ClayButton
                                            displayType="unstyled"
                                            type="submit"
                                        >
                                            <img src="https://img.icons8.com/fluent-systems-regular/24/666666/search.png"/>
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
                            <img src="https://img.icons8.com/fluent-systems-filled/24/000000/contrast--v1.png" />
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-unstyled nav-btn nav-btn-monospaced mx-2" type="button">
                            <img src="https://img.icons8.com/fluent-systems-filled/24/000000/star.png" />
                        </button>
                    </li>
                    <li className="dropdown nav-item">
                        <ClayDropDown
                            trigger={<button className="btn btn-unstyled nav-btn nav-btn-monospaced mx-2">
                                <img src="https://img.icons8.com/fluent-systems-filled/24/000000/brick-wall.png" />
                            </button>}
                            active={menuListTypeActive}
                            onActiveChange={setMenuListTypeActive}
                        >
                            <ClayDropDown.ItemList>
                                <ClayDropDown.Item>
                                    Cards
                                </ClayDropDown.Item>
                                <ClayDropDown.Item>
                                    List
                                </ClayDropDown.Item>
                            </ClayDropDown.ItemList>
                        </ClayDropDown>
                    </li>
                    <li className="nav-item">
                        <ClayDropDown
                            trigger={
                                <button className="btn btn-primary btn-monospaced ml-3" type="button">
                                    <img src="https://img.icons8.com/fluent-systems-regular/24/ffffff/plus-math.png" />
                                </button>
                            }
                            active={menuAddActive}
                            onActiveChange={setMenuAddActive}
                            className="modal-add-repository-dropdown"
                        >
                            <ModalAddRepository onAdd={() => {
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