import React from 'react';

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>

        <div className="mt-6 prose prose-blue prose-lg text-gray-700">
          <p>This Privacy Policy describes how we collect, use, and disclose your personal information when you use our website.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>We may collect various types of information when you interact with our website, including:</p>
          <ul className="list-disc ml-8">
            <li>Personal Information: such as your name, email address, and contact details.</li>
            <li>Usage Data: information about how you interact with our website, such as pages visited, time spent on each page, and referring pages.</li>
            <li>Device Information: details about the device you use to access our website, including device type, operating system, and browser type.</li>
            <li>Cookies: small text files stored on your device that track your browsing behavior and preferences.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul className="list-disc ml-8">
            <li>Providing and maintaining our website.</li>
            <li>Improving and personalizing your user experience.</li>
            <li>Analyzing trends and usage patterns to optimize our website.</li>
            <li>Communicating with you, including responding to inquiries and providing support.</li>
            <li>Marketing and advertising our products and services.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">Information Sharing and Disclosure</h2>
          <p>We may share your information with third-party service providers to perform functions on our behalf, such as hosting, data analysis, and marketing. We may also disclose your information in response to legal requests or to protect our rights and interests.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Your Rights and Choices</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us. Please contact us if you wish to exercise any of these rights.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Updates to This Policy</h2>
          <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any significant changes and obtain your consent if required by law.</p>

          <p>By using our website, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
