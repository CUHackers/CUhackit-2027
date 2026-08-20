import './HomePage.css';

const mlhBadgeSrc =
    'https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-white.svg';

const HomePage = () => {
    return (
        <div className="frame-wrap">
            <a
                id="mlh-trust-badge"
                href="https://www.mlh.com"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="badge-layer badge-cyan"
                    src={mlhBadgeSrc}
                    alt=""
                    aria-hidden="true"
                />
                <img
                    className="badge-layer badge-pink"
                    src={mlhBadgeSrc}
                    alt=""
                    aria-hidden="true"
                />
                <img
                    className="badge-layer badge-white"
                    src={mlhBadgeSrc}
                    alt="Major League Hacking 2026 Hackathon Season"
                />
            </a>
            <div className="frame-stage">
                <a
                    className="cta"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeuOLkWGfGKpmq8u2F3OFrzJ9-8Bt_IRYMV-E9Hs8y1pIrK5w/viewform?usp=preview"
                    target="_blank"
                    rel="noreferrer"
                >
                    Want to participate? Fill out the interest form.
                </a>

                <main className="frame corners">
                    <i></i>

                    <section className="terminal" aria-label="event meta">
                        <div className="row">
                            <span className="prompt">&gt;&gt;</span>{' '}
                            <span className="key">location</span>{' '}
                            <span className="arrow">-&gt;</span>{' '}
                            <span className="val">
                                <a
                                    href="https://www.clemson.edu/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    clemson university
                                </a>
                            </span>
                        </div>
                        <div className="row">
                            <span className="prompt">&gt;&gt;</span>{' '}
                            <span className="key">date</span>{' '}
                            <span className="arrow">-&gt;</span>{' '}
                            <span className="val">february 20th and 21st</span>
                        </div>
                    </section>

                    <section className="title-wrap" aria-label="cuhackit 2027">
                        <h1 className="title">
                            <span className="line cuhackit-line">
                                <span className="ghost">CUHACKIT</span>
                                <span className="layer cyan">CUHACKIT</span>
                                <span className="layer pink">CUHACKIT</span>
                                <span className="stripe stripe-pink" aria-hidden="true" />
                                <span className="stripe stripe-cyan" aria-hidden="true" />
                                <span className="stripe stripe-purple" aria-hidden="true" />
                                <span className="layer white">CUHACKIT</span>
                            </span>
                            <br />
                            <span className="line twentyseven">
                                <span className="ghost">27</span>
                                <span className="layer cyan">27</span>
                                <span className="layer white">27</span>
                                <span className="layer pink">27</span>
                            </span>
                        </h1>
                    </section>

                    <section className="loader" aria-label="loading status">
                        <div
                            className="loader-bar"
                            role="progressbar"
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        >
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block" aria-label="loading"></div>
                        </div>
                        <div className="loader-status">Loading CUhackit X...</div>
                        <div className="loader-sub">see you soon</div>
                    </section>
                </main>

                <nav className="policy-links" aria-label="event policy and contact links">
                    <a
                        href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                        target="_blank"
                        rel="noreferrer"
                    >
                        MLH Code of Conduct
                    </a>
                    <span className="policy-separator" aria-hidden="true">|</span>
                    <a href="mailto:cuhackers@clemson.edu" target="_blank" rel="noreferrer">
                        cuhackers@clemson.edu
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default HomePage;
