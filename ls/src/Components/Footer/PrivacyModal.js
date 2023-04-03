import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './Footer.css'
import styled from "styled-components";


const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p className="ptext">
            Thank you for visiting our website and for considering our products. At The Lazy Shop, we value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your personal information when you visit our website, purchase our products, or communicate with us.
<br/>
1. Information We Collect
<br/>

We collect personal information that you provide to us when you visit our website, create an account, place an order, or communicate with us. This information may include your name, address, email address, phone number, payment information, and any other information you choose to provide.

We may also collect information automatically when you visit our website, such as your IP address, browser type, device type, and operating system. We use cookies and similar technologies to collect this information and to personalize your experience on our website.
<br/>
2. How We Use Your Information
<br/>
We use your personal information to fulfill your orders, communicate with you about your orders, and provide you with customer service. We may also use your information to send you marketing communications about our products and services, but you can opt-out of these communications at any time.

We may share your personal information with our service providers and business partners who help us process your orders and provide you with our products and services. We may also share your information as required by law or as necessary to protect our rights and interests.
<br/>
3. Your Choices
<br/>
You have choices about how we use and disclose your personal information. You can choose not to provide certain information to us, but this may limit your ability to use some features of our website or to place orders for our products.

You can also opt-out of receiving marketing communications from us by following the instructions in our emails or by contacting us directly.
<br/>
4. Security
<br/>
We take reasonable measures to protect your personal information from unauthorized access, disclosure, or use. However, no data transmission over the internet or any other network can be guaranteed to be 100% secure. We cannot guarantee the security of your information and are not responsible for any unauthorized access to or use of your information.
<br/>
5. Children's Privacy
<br/>
Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under the age of 18. If we become aware that we have collected personal information from a child under the age of 18, we will take steps to delete the information as soon as possible.
<br/>
6. Changes to This Privacy Policy
<br/>
We may update this privacy policy from time to time. Any changes we make will be posted on this page. We encourage you to review this privacy policy periodically to stay informed about how we are protecting your personal information.
<br/>
7. Contact Us
<br/>
If you have any questions or concerns about this privacy policy or our privacy practices, please contact us using the form in our contact page.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal classNames={styled.textcontainer} open={open} onClose={() => setOpen(false)} center>
                <div className="textcontainer">
                <h2 className="ptext">Privacy Policy</h2>
                {policyText}
                </div>
            </Modal>
        </>
    );
};

export default PrivacyModal;