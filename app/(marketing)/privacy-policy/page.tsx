import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="container mt-6 md:mt-12">
      <h1 className="text-lg font-bold">Privacy policy </h1>
      <div className="mt-6 flex flex-col gap-6">
        <div>
          <h6 className="font-bold text-base ">User Registration:</h6>
          <p className="text-sm text-foreground/60 ml-2 mt-2">
            To access our services, basic registration via Google or GitHub
            profiles is required. We store your email, password, and profile
            link securely in our database.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-base">Usage Data:</h6>
          <p className="text-sm text-foreground/60 ml-2 mt-2">
            We may collect non-personal information, such as browser type,
            device information, and website usage patterns, to enhance our
            services.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-base">Use of Information:</h6>
          <p className="text-sm text-foreground/60 ml-2 mt-2">
            Personalization: Your registration information is used to
            personalize your experience on MyIcons.tech.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-base">Information Security:</h6>
          <p className="text-sm text-foreground/60 ml-2 mt-2">
            Secure Storage: We store your registration information in a secure
            database to prevent unauthorized access.
          </p>
          <p className="text-sm text-foreground/60 ml-2 mt-2">
            Data Integrity: We take reasonable steps to ensure the accuracy and
            integrity of your information.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-base">User Content:</h6>
          <p className="text-sm text-foreground/60 ml-2 mt-2">
            Icons and Images: User-generated content, such as icons, is subject
            to our terms and conditions. We do not claim ownership of
            user-generated icons.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-base">Third-Party Links:</h6>
          <p className="text-sm text-foreground/60 ml-2 mt-2">
            External Websites: MyIcons.tech may contain links to third-party
            websites. We are not responsible for the privacy practices or
            content of these sites.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-base">Policy Changes:</h6>
          <p className="text-sm text-foreground/60 ml-2 mt-2">
            Notification: Users will may or may not notified of any material
            changes to this Privacy Policy via email or a prominent notice on
            our website.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-base">Contact Information:</h6>
          <p className="text-sm text-foreground/60 ml-2 mt-2">
            Questions and Concerns: If you have any questions or concerns about
            our Privacy Policy, please contact us at{" "}
            <Link
              className="underline text-foreground"
              href="mailto:jashandeep1659@gmail.com"
            >
              jashandeep1659@gmail.com
            </Link>
            .
          </p>
        </div>

        <p className="text-sm text-foreground/60 ml-2 mt-2">
          By using MyIcons.tech, you acknowledge and agree to the terms of this
          Privacy Policy. This policy may be updated periodically, so please
          review it regularly for any changes.
        </p>

        <p className="text-sm text-foreground/60 ml-2 mt-2">
          Effective Date: 12-01-2024
        </p>

        <p className="text-sm text-foreground/60 ml-2 mt-2">
          Thank you for choosing MyIcons.tech!
        </p>
      </div>
    </div>
  );
}
