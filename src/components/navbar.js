import "@clayui/css/lib/css/atlas.css";
import ClayIcon, { ClayIconSpriteContext } from '@clayui/icon';

const spritemap = "https://cdn.jsdelivr.net/npm/@clayui/css/lib/images/icons/icons.svg";

export default function Navbar() {
    return (
        <nav class="application-bar application-bar-light bg-white navbar navbar-expand-md">
            <div class="container-fluid container-fluid-max-xl">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <img src="https://img.icons8.com/fluent-systems-regular/24/000000/github.png" />
                        <p>Github Compares</p>
                    </li>
                    <li class="nav-item">
                        <button
                            class="btn btn-unstyled nav-btn nav-btn-monospaced"
                            type="button"
                        >
                            <svg
                                class="lexicon-icon lexicon-icon-angle-left"
                                focusable="false"
                                role="presentation"
                            >
                                <use href="/images/icons/icons.svg#angle-left"></use>
                            </svg>
                        </button>
                    </li>
                </ul>
                <div class="navbar-title navbar-text-truncate">My Application Name</div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button
                            class="btn btn-unstyled nav-btn nav-btn-monospaced"
                            type="button"
                        >
                            <svg
                                class="lexicon-icon lexicon-icon-cog"
                                focusable="false"
                                role="presentation"
                            >
                                <use href="/images/icons/icons.svg#cog"></use>
                            </svg>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button
                            class="btn btn-unstyled nav-btn nav-btn-monospaced"
                            type="button"
                        >
                            <svg
                                class="lexicon-icon lexicon-icon-plus"
                                focusable="false"
                                role="presentation"
                            >
                                <use href="/images/icons/icons.svg#plus"></use>
                            </svg>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button
                            class="btn btn-unstyled nav-btn nav-btn-monospaced"
                            type="button"
                        >
                            <svg
                                class="lexicon-icon lexicon-icon-simulation-menu-closed"
                                focusable="false"
                                role="presentation"
                            >
                                <use
                                    href="/images/icons/icons.svg#simulation-menu-closed"
                                ></use>
                            </svg>
                        </button>
                    </li>
                    <li class="dropdown nav-item">
                        <button
                            aria-expanded="false"
                            aria-haspopup="true"
                            class="btn btn-unstyled dropdown-toggle nav-btn nav-btn-monospaced"
                            data-toggle="dropdown"
                            type="button"
                        >
                            <svg
                                class="lexicon-icon lexicon-icon-ellipsis-v"
                                focusable="false"
                                role="presentation"
                            >
                                <use href="/images/icons/icons.svg#ellipsis-v"></use>
                            </svg>
                        </button>
                        <ul
                            aria-labelledby="navbarDropdownMenuLink"
                            class="dropdown-menu dropdown-menu-right"
                        >
                            <li><a class="dropdown-item" href="#1">Action</a></li>
                            <li>
                                <a class="dropdown-item" href="#1">Another action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#1"
                                >Something else here</a
                                >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item" href="#1">Separated link</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}