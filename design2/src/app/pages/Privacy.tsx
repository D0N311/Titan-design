import { motion } from "motion/react";

export function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Last updated:</strong> February 3, 2026
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Introduction
            </h2>
            <p>
              The Trustee for Titan Freight Trust ABN: 84 588 648 603 ("we",
              "us", "our", or "Titan Freight") is committed to protecting your
              privacy and personal information. This Privacy Policy explains how
              we collect, use, disclose, and protect your information when you
              use our freight and logistics services or visit our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.1 Personal Information
            </h3>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Name and contact details (email address, phone number, postal
                address)
              </li>
              <li>Business information (company name, ABN, position)</li>
              <li>Payment and billing information</li>
              <li>Delivery and pickup addresses</li>
              <li>Identification documents when required</li>
              <li>Communications with us (emails, phone calls, messages)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.2 Automatically Collected Information
            </h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing freight and logistics services</li>
              <li>Processing bookings and managing deliveries</li>
              <li>Billing and payment processing</li>
              <li>Customer support and communication</li>
              <li>Compliance with legal and regulatory requirements</li>
              <li>Improving our services and website functionality</li>
              <li>Marketing communications (with your consent)</li>
              <li>Fraud prevention and security purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p>We may share your personal information with:</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              4.1 Service Providers
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subcontractors and transport partners</li>
              <li>Payment processors and financial institutions</li>
              <li>IT service providers and technology partners</li>
              <li>Insurance providers</li>
              <li>Professional advisors (lawyers, accountants, auditors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              4.2 Legal Requirements
            </h3>
            <p>
              We may disclose your information when required by law, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Government agencies and regulatory bodies</li>
              <li>Law enforcement agencies</li>
              <li>Courts and legal proceedings</li>
              <li>Customs and border control authorities</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Secure data transmission protocols</li>
              <li>Access controls and user authentication</li>
              <li>Regular security assessments and updates</li>
              <li>Staff training on privacy and security practices</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected, comply with
              legal obligations, resolve disputes, and enforce our agreements.
              Specific retention periods include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customer records: 7 years after service completion</li>
              <li>
                Financial records: 7 years as required by Australian tax law
              </li>
              <li>Insurance claims: 7 years after claim resolution</li>
              <li>
                Marketing communications: Until you opt-out or withdraw consent
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Your Rights
            </h2>
            <p>Under Australian privacy laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information we hold</li>
              <li>Request correction of inaccurate information</li>
              <li>
                Request deletion of your personal information (subject to legal
                requirements)
              </li>
              <li>Opt-out of marketing communications</li>
              <li>
                Lodge a complaint with the Australian Privacy Commissioner
              </li>
              <li>
                Request information about how we handle your personal
                information
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Cookies and Website Analytics
            </h2>
            <p>
              Our website uses cookies and similar technologies to improve
              functionality and user experience. You can control cookie settings
              through your browser, but disabling cookies may affect website
              functionality.
            </p>

            <p>
              We use analytics services to understand website usage and improve
              our services. These services may collect information about your
              visits to our and other websites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies before providing
              any personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. International Data Transfers
            </h2>
            <p>
              We may transfer your personal information to countries outside
              Australia for business purposes. When we do so, we ensure
              appropriate safeguards are in place to protect your information in
              accordance with Australian privacy laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Children's Privacy
            </h2>
            <p>
              Our services are not directed at individuals under 18 years of
              age. We do not knowingly collect personal information from
              children. If you believe we have collected information from a
              child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on our website with an updated "Last updated" date.
              Continued use of our services after changes indicates acceptance
              of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              13. Contact Information
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please contact us:
            </p>

            <div className="mt-6 p-6 bg-gray-50 rounded-lg border">
              <p className="text-sm text-gray-600">
                <strong>Privacy Officer</strong>
                <br />
                The Trustee for Titan Freight Trust
                <br />
                ABN: 84 588 648 603
                <br />
                Email: privacy@titanfreight.com.au
                <br />
                Phone: +61 2 3456 7890
                <br />
                Address: Sydney Metro Area, NSW, Australia
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              14. Complaints
            </h2>
            <p>
              If you have a complaint about how we handle your personal
              information, please contact our Privacy Officer first. If you are
              not satisfied with our response, you may lodge a complaint with
              the Office of the Australian Information Commissioner (OAIC):
            </p>

            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400">
              <p className="text-sm text-blue-800">
                <strong>
                  Office of the Australian Information Commissioner
                </strong>
                <br />
                Website: www.oaic.gov.au
                <br />
                Phone: 1300 363 992
                <br />
                Email: enquiries@oaic.gov.au
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
