import { HeroHeader } from "@/components/hero8-header";

export default function PrivacyPolicyPage() {
  return (
    <>
    
      <HeroHeader />
      <section className="min-h-screen bg-background py-20 px-4">
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-foreground mb-4 border-b border-border pb-4">
          Privacy Policy for Email Template Editor
        </h1>

        <p className="text-muted-foreground mb-2">
          <strong className="text-foreground">Effective Date:</strong> July 31, 2025
        </p>
        <p className="text-muted-foreground mb-2">
          <strong className="text-foreground">Extension Name:</strong> AI Email Template Editor
        </p>
        <p className="text-muted-foreground mb-8">
          <strong className="text-foreground">Contact Us:</strong> shuklakrishna.kris@gmail.com
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. Introduction</h2>
        <p className="text-muted-foreground mb-6">
          Welcome to the Email Template Editor. We are committed to protecting your privacy. This Privacy Policy explains what information our extension handles and why, so you can feel confident and secure while using our tool.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. Information We Handle</h2>
        <p className="text-muted-foreground mb-4">
          Our extension is designed to work with two main types of content to provide its core functionality:
        </p>
        <ul className="text-muted-foreground list-disc pl-5 mb-6">
          <li className="mb-2">
            <strong className="text-foreground">Content of Your Email Drafts:</strong> This includes the text, HTML, and other content you are actively writing in the Gmail compose window.
          </li>
          <li className="mb-2">
            <strong className="text-foreground">Your AI Prompts:</strong> This includes the text instructions you type into the AI Assistant chat window.
          </li>
          <li className="mb-2">
            <strong className="text-foreground">Your Saved Templates:</strong> This is the HTML content of templates you explicitly name and save within the extension.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">3. How and Why We Use Your Information</h2>
        <p className="text-muted-foreground mb-4">
          We handle your information for the sole purpose of making the extension work as intended. We do not sell your data.
        </p>
        <h3 className="text-xl font-medium text-foreground mb-3">For Extension Functionality:</h3>
        <ul className="text-muted-foreground list-disc pl-5 mb-6">
          <li className="mb-2">
            <strong className="text-foreground">To Sync Your Work ("Mirroring"):</strong> When you open the editor, the extension reads the current content from your Gmail compose box. This is done to ensure that any edits you've already made are "mirrored" in the editor for a seamless experience.
          </li>
          <li className="mb-2">
            <strong className="text-foreground">To Apply Templates:</strong> When you click "Apply," the HTML code from the editor is inserted into the Gmail compose window, modifying the page content to display your template.
          </li>
          <li className="mb-2">
            <strong className="text-foreground">To Power the AI Assistant:</strong> When you ask the AI to create or modify a template, the current content of your email draft and your text prompt are sent to our secure backend server. This provides the necessary context for the AI to make relevant and helpful edits.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">4. Data Storage and Security</h2>
        <h3 className="text-xl font-medium text-foreground mb-3">Saved Templates and Unsaved Work:</h3>
        <p className="text-muted-foreground mb-4">
          Templates that you explicitly save, as well as any unsaved work-in-progress, are stored <strong className="text-foreground">locally on your computer</strong> using the secure <code className="text-muted-foreground bg-muted px-1 rounded">chrome.storage.local</code> API. This data <strong className="text-foreground">never leaves your machine</strong> and is never transmitted to our servers or any third parties.
        </p>
        <h3 className="text-xl font-medium text-foreground mb-3">AI Communications:</h3>
        <p className="text-muted-foreground mb-6">
          The content of your email draft and your AI prompts are sent to our secure backend function, which is hosted on Vercel. This data is processed <strong className="text-foreground">ephemerally</strong> (in-memory) for the sole purpose of fulfilling your AI request. This data is <strong className="text-foreground">never logged, saved, or stored</strong> on our backend server. It is passed directly to our AI providers and then discarded immediately after the request is complete.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">5. Third-Party Services</h2>
        <p className="text-muted-foreground mb-4">
          To provide the AI functionality, we securely transmit your prompts and email context to third-party AI services. Our backend is designed to be resilient and may use one or more of the following providers to process requests:
        </p>
        <ul className="text-muted-foreground list-disc pl-5 mb-6">
          <li className="mb-2">Vercel (for hosting our secure backend function)</li>
          <li className="mb-2">Groq</li>
          <li className="mb-2">OpenRouter</li>
          <li className="mb-2">Google Gemini</li>
        </ul>
        <p className="text-muted-foreground mb-6">
          Our secret API keys for these services are kept secure on our backend and are never exposed in the extension. We do not share any personally identifiable information with these services.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">6. Changes to This Privacy Policy</h2>
        <p className="text-muted-foreground mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">7. Contact Us</h2>
        <p className="text-muted-foreground">
          If you have any questions about this Privacy Policy, please contact us at: shuklakrishna.kris@gmail.com
        </p>
      </main>
      </section>
    </>
  );
}