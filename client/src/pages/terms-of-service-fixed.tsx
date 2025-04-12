import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Terms of Service</h1>
        <p className="text-muted-foreground mb-8 text-center">Last Updated: March 25, 2025</p>
        
        <Separator className="my-8" />
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Konnectorr. These Terms of Service ("Terms") govern your use of our website, services, and products (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
          </p>
          <p className="mb-4">
            Please read these Terms carefully before using our Services. If you do not agree to these Terms, you must not access or use our Services.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p className="mb-4">
            Konnectorr is a telecommunications service comparison platform that helps consumers discover, compare, and sign up for various telecommunications services including but not limited to internet, television, phone, and mobile services.
          </p>
          <p className="mb-4">
            We act as an authorized reseller and information provider for various telecommunications service providers. We do not directly provide telecommunications services, but rather facilitate connections between consumers and service providers.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="mb-4">
            Some features of our Services may require you to create an account. When you create an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          <p className="mb-4">
            You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We cannot and will not be liable for any loss or damage arising from your failure to comply with this section.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Service Sign-ups and Referrals</h2>
          <p className="mb-4">
            When you sign up for telecommunications services through our platform, you are entering into an agreement with the service provider, not with Konnectorr. You acknowledge that we act as a facilitator and that any contractual relationship is between you and the service provider.
          </p>
          <p className="mb-4">
            We may receive compensation from service providers for referrals made through our platform. This compensation does not influence our recommendations or comparisons, which are designed to be objective and based on the actual features and benefits of each service.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
          <p className="mb-4">
            Our Services may allow you to post, submit, or transmit content such as reviews, comments, or feedback. You retain ownership of any content you submit, but by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media.
          </p>
          <p className="mb-4">
            You represent and warrant that your content does not violate the rights of any third party, including intellectual property rights and privacy rights, and that it complies with all applicable laws and regulations.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
          <p className="mb-4">
            The Services and all content, features, and functionality, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the design, selection, and arrangement thereof, are owned by Konnectorr, its licensors, or other providers and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="mb-4">
            These Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as incidental to the normal use of the Services.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
          <p className="mb-4">
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p className="mb-4">
            We do not guarantee that the Services will be uninterrupted, secure, or error-free, or that defects will be corrected. We are not responsible for the accuracy, reliability, timeliness, or completeness of information provided through the Services.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL KONNECTORR, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p className="mb-4">
            We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Services thereafter.
          </p>
          <p className="mb-4">
            Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p className="mb-4">
            These Terms and your use of the Services shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without giving effect to any choice or conflict of law provision or rule.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-muted p-4 rounded-md">
            <p>Konnectorr</p>
            <p>Email: legal@konnectorr.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Telecom Way, Suite 456, Dover, DE 19901</p>
          </div>
        </section>
      </div>
    </div>
  );
}