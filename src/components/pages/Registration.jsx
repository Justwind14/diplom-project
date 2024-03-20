import React from 'react';
import RegistrationLoyalty from "../registration/RegistrationLoyalty";
import RegistrationForm from "../registration/RegistrationForm";

const Registration = () => {
    return (
        <>
            <h1 className="hidden">REGISTRATION</h1>
            <section className="second-header center">
                <h2 className="second-header__title">REGISTRATION</h2>
            </section>
            <section className="registration center">
                <div className="registration-form">
                    <RegistrationForm/>
                </div>
                <RegistrationLoyalty/>
            </section>
        </>
    );
};

export default Registration;