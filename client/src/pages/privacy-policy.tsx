import React from "react";
import { PageLayout } from "@/components/layout/page-layout";

const PrivacyPolicy: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Introduction</h2>
              <p>
                Weinberg Global Inc., doing business as TelecomXpertz ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website telecomxpertz.com (the "Site").
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, your choice is not to use our Site.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, email address, telephone number, and home address, that you voluntarily give to us when you choose to participate in various activities related to the Site. These activities include submitting a form, participating in contests, promotions, surveys, or other site features.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you viewed directly before and after accessing the Site.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Financial Data</h3>
              <p>
                Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, or reserve products or services from the Site. We store only very limited, if any, financial information that we collect.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cookies and Web Beacons</h3>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. For more information on how we use cookies, please refer to our Cookie Policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Create and manage your account.</li>
                <li>Process your transactions.</li>
                <li>Send you emails about our products and services.</li>
                <li>Send you administrative communications, such as administrative emails, confirmation emails, technical notices, updates on policies, or security alerts.</li>
                <li>Respond to your comments or inquiries.</li>
                <li>Provide you with user support.</li>
                <li>Maintain and improve the Site.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                <li>Request feedback and contact you about your use of the Site.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Marketing Communications</h3>
              <p>
                With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Affiliates</h3>
              <p>
                We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Business Partners</h3>
              <p>
                We may share your information with our business partners to offer you certain products, services, or promotions.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Your Rights Regarding Your Data</h2>
              <p>You have certain rights regarding your personal data, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>The right to access personal data we hold about you</li>
                <li>The right to request that we correct any personal data if it is found to be inaccurate or out of date</li>
                <li>The right to request that your personal data is erased where it is no longer necessary for us to retain such data</li>
                <li>The right to withdraw your consent to the processing at any time</li>
                <li>The right to request that we provide you with your personal data and where possible, to transmit that data directly to another data controller</li>
                <li>The right, where there is a dispute in relation to the accuracy or processing of your personal data, to request a restriction is placed on further processing</li>
                <li>The right to object to the processing of personal data</li>
                <li>The right to lodge a complaint with a supervisory authority</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">California Privacy Rights</h2>
              <p>
                California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Children's Privacy</h2>
              <p>
                The Site is not directed to anyone under the age of 13. We do not knowingly collect or solicit information from anyone under the age of 13. If we learn that we have collected personal information from a child under age 13, we will delete that information as quickly as possible.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Updates to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mb-6">
                <p className="font-semibold">Weinberg Global Inc.</p>
                <p>1021 E Lincolnway Suite 5747</p>
                <p>Cheyenne, WY 82001</p>
                <p>Phone: <a href="tel:8887886930" className="text-primary hover:underline">888-788-6930</a></p>
                <p>Email: <a href="mailto:info@telecomxpertz.com" className="text-primary hover:underline">info@telecomxpertz.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;