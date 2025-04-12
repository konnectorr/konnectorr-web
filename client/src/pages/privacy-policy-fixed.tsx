import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              At Konnectorr, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>
              We may collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Personal identifiers such as name, address, email address, and phone number</li>
              <li>Information about your internet connection, the equipment you use to access our website, and usage details</li>
              <li>Records of products or services you have considered or purchased through our website</li>
              <li>Your preferences and feedback related to telecommunications services</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Collect Your Information</h2>
            <p>
              We collect information:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Directly from you when you provide it to us (such as when filling out forms on our website)</li>
              <li>Automatically as you navigate through our website (using cookies, web beacons, and other tracking technologies)</li>
              <li>From third parties, such as our business partners and service providers</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Present our website and its contents to you</li>
              <li>Provide you with information, products, or services that you request from us</li>
              <li>Connect you with telecommunications service providers based on your preferences</li>
              <li>Fulfill any other purpose for which you provide it</li>
              <li>Notify you about changes to our website or any products or services we offer</li>
              <li>Improve our website, products, services, marketing, and customer relationships</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclosure of Your Information</h2>
            <p>
              We may disclose personal information that we collect:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>To our subsidiaries and affiliates</li>
              <li>To telecommunications service providers to facilitate service sign-ups or comparisons</li>
              <li>To contractors, service providers, and other third parties we use to support our business</li>
              <li>To fulfill the purpose for which you provide it</li>
              <li>For any other purpose disclosed by us when you provide the information</li>
              <li>With your consent</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information transmitted to our website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Choices About How We Use Your Information</h2>
            <p>
              We strive to provide you with choices regarding the personal information you provide to us. You can:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Opt-out of marketing communications from us by following the unsubscribe instructions in any marketing email</li>
              <li>Set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent</li>
              <li>Contact us to request access to, correct, or delete any personal information that you have provided to us</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. California Privacy Rights</h2>
            <p>
              If you are a California resident, California law may provide you with additional rights regarding our use of your personal information. To learn more about your California privacy rights, visit our California Privacy Notice.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to Our Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will post the new privacy policy on this page with a notice that the privacy policy has been updated.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <p>Konnectorr</p>
              <p>Email: privacy@konnectorr.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Telecom Way, Suite 456, Dover, DE 19901</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;