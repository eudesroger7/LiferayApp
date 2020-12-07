import "@clayui/css/lib/css/atlas.css";
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';

const spritemap = "https://cdn.jsdelivr.net/npm/@clayui/css/lib/images/icons/icons.svg";

export default function CardRepo() {
    return (
        <>
            <div className="col-md-4">
                <ClayCard displayType="file">
                    <ClayCard.Body>
                        <ClayCard.Row className="align-items-center justify-content-between ">
                            <ClayCard.Description displayType="title" >
                                <img className="avatar" src="https://avatars1.githubusercontent.com/u/131436?s=200&v=4" />
                                {"deliverable.doc"}
                            </ClayCard.Description>
                            <div className="row">
                                <button class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button"                            >
                                    <img src="https://img.icons8.com/fluent-systems-regular/24/000000/star.png" />
                                </button>
                                <button class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button"                            >
                                    <img src="https://img.icons8.com/fluent-systems-regular/24/000000/delete.png" />
                                </button>
                            </div>
                        </ClayCard.Row>
                        <ClayCard.Row>
                            <div className="autofit-col autofit-col-expand">
                                <section className="autofit-section">
                                    <ClayCard.Row className="align-items-center">
                                        <ClayCard.Description displayType="title" className="mr-2">
                                            Stars
                                        </ClayCard.Description>
                                        <ClayCard.Description displayType="text">
                                            100
                                        </ClayCard.Description>
                                    </ClayCard.Row>
                                    <ClayCard.Description displayType="subtitle">
                                        {"Stevie Ray Vaughn"}
                                    </ClayCard.Description>
                                    <ClayCard.Caption>
                                        <ClayLabel displayType="success">{"Approved"}</ClayLabel>
                                    </ClayCard.Caption>
                                </section>
                            </div>
                        </ClayCard.Row>
                    </ClayCard.Body>
                </ClayCard>
            </div>
        </>
    )
}