import { ClassifiedsHeader } from "@/components/classifieds-header"
import { ClassifiedsFooter } from "@/components/classifieds-footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <ClassifiedsHeader />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed text-foreground mb-3">
                We collect information to provide better services to our users. The types of information we collect
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>
                  <strong>Account Information:</strong> Name, email address, phone number, and password when you
                  register
                </li>
                <li>
                  <strong>Listing Information:</strong> Details about items you post, including descriptions, images,
                  and pricing
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages exchanged between buyers and sellers through our
                  platform
                </li>
                <li>
                  <strong>Usage Information:</strong> How you interact with our platform, including pages visited and
                  features used
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type, operating system, and device
                  identifiers
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed text-foreground mb-3">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send you updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Detect, prevent, and address fraud and security issues</li>
                <li>Personalize your experience and show relevant advertisements</li>
                <li>Analyze usage patterns to improve our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="leading-relaxed text-foreground mb-3">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>
                  <strong>With Other Users:</strong> Your public profile and listings are visible to other users
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party companies that help us operate our platform (hosting,
                  analytics, payment processing)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="leading-relaxed text-foreground">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
              <p className="leading-relaxed text-foreground mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Access and update your personal information through your account settings</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Control cookie preferences through your browser settings</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
              <p className="leading-relaxed text-foreground">
                We use cookies and similar tracking technologies to collect information about your browsing activities.
                Cookies help us remember your preferences, understand how you use our platform, and improve your
                experience. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p className="leading-relaxed text-foreground">
                Our services are not intended for users under 18 years of age. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
              <p className="leading-relaxed text-foreground">
                Your information may be transferred to and processed in countries other than India. We ensure
                appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <p className="leading-relaxed text-foreground">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by
                posting the new policy on this page and updating the "Last updated" date. Your continued use of our
                services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="leading-relaxed text-foreground">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
                <br />
                Email: privacy@1800classifieds.in
                <br />
                Address: 1800 Limited, Mumbai, India
              </p>
            </section>
          </div>
        </div>
      </div>

      <ClassifiedsFooter />
    </main>
  )
}
