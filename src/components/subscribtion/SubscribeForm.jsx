import React, {useState} from 'react';
import Inputs from "../UI/Inputs";
import Buttons from "../UI/Buttons";

const SubscribeForm = () => {
    const [emailValue, setEmailValue] = useState('');

    const subscribeSubmit = (e) => {
        e.preventDefault();
        if  (emailValue !== '') {
            const emailSubs = emailValue;
            setEmailValue('')
            alert('Благодарим за подписку на наш магазин!');
        }
       else alert('ВВЕДИТЕ ВАШУ ПОЧТУ');
    }

    return (
        <form className="subscribe__email-form" action="#">
            <label className="hidden" htmlFor="email">Email input</label>
            <Inputs id="email" className="subscribe__email-input" type="email"
                   placeholder="Enter Your Email" value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
            />
            <Buttons value="Subscribe" className="subscribe__email-btn" type="submit"
                    onClick={subscribeSubmit}
            >
                Subscribe
            </Buttons>
        </form>
    );
};

export default SubscribeForm;