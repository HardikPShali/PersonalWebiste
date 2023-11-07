import React from 'react'

const contact = () => {
    return (
        <section id="contact" className="tf__contact_2 pt_95 xs_pt_45">
            <div className="container">
                <div className="row animation">
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div
                            className="tf__contact_2_text fade_left"
                            data-trigerId="contact"
                        >
                            <span>
                                <img
                                    src="svg/voice_phone.svg"
                                    alt="contact"
                                    className="img-fluid w-100 svg" />
                            </span>
                            <h3>Phone</h3>
                            <p>
                                Personal Contact Number
                            </p>
                            <a href="callto:+919724641610">+919724641610</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div
                            className="tf__contact_2_text fade_left"
                            data-trigerId="contact"
                        >
                            <span>
                                <img
                                    src="svg/map_issue.svg"
                                    alt="contact"
                                    className="img-fluid w-100 svg" />
                            </span>
                            <h3>Location</h3>
                            <p>
                                Surat, Gujarat, India
                            </p>
                            <a target='_blank' href="https://maps.app.goo.gl/rSEnUVeNWzoEyVhP6">View on map</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div
                            className="tf__contact_2_text fade_left"
                            data-trigerId="contact"
                        >
                            <span>
                                <img
                                    src="svg/send_mail.svg"
                                    alt="contact"
                                    className="img-fluid w-100 svg" />
                            </span>
                            <h3>Monday - Sunday</h3>
                            <p>
                                Work Email
                            </p>
                            <a href="mailto:hardikshali1612@gmail.com"
                            >hardikshali1612@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="contact_form_2">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Your Name Here" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Subject" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                rows="5"
                                                placeholder="Your Message Here"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                            </div> */}
            </div>
        </section>
    )
}

export default contact
