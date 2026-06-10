import './HomePage.css';

const HomePage = () => {
    return (
        <div className="frame-wrap">
            <img
                className="trust-badge"
                src="/trust-badge-blue.svg"
                alt="MLH official member badge for the 2027 season"
            />
            <div className="frame-stage">
                <a
                    className="cta"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeuOLkWGfGKpmq8u2F3OFrzJ9-8Bt_IRYMV-E9Hs8y1pIrK5w/viewform?usp=preview"
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
                                <a href="https://www.clemson.edu/">clemson university</a>
                            </span>
                        </div>
                        <div className="row">
                            <span className="prompt">&gt;&gt;</span>{' '}
                            <span className="key">date</span>{' '}
                            <span className="arrow">-&gt;</span>{' '}
                            <span className="val">february 27th and 28th</span>
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
            </div>
        </div>
    );
};

export default HomePage;
