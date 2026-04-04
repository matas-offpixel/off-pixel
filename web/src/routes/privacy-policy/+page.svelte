<script>
  import LegalPageShell from '$lib/components/LegalPageShell.svelte';

  const siteUrl = 'https://www.offpixel.co.uk';
  const pagePath = '/privacy-policy';
  const canonical = `${siteUrl}${pagePath}`;
</script>

<svelte:head>
  <title>Privacy Policy | Off/Pixel</title>
  <meta name="robots" content="noindex, follow" />
  <meta
    name="description"
    content="Privacy Policy and Cookies Statement for Off Pixel Ltd (Off/Pixel). For compliance and platform review purposes."
  />
  <link rel="canonical" href={canonical} />
  <meta property="og:title" content="Privacy Policy | Off/Pixel" />
  <meta
    property="og:description"
    content="Privacy Policy and Cookies Statement for Off Pixel Ltd (Off/Pixel)."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Privacy Policy | Off/Pixel" />
  <meta
    name="twitter:description"
    content="Privacy Policy and Cookies Statement for Off Pixel Ltd (Off/Pixel)."
  />
</svelte:head>

<LegalPageShell heading="Privacy Policy and Cookies Statement">
  <svelte:fragment slot="after-heading">
    <p class="meta-lead">This page is provided for compliance and platform review purposes.</p>
    <p class="meta-updated"><strong>Last updated:</strong> 2 April 2026</p>
    <section class="company-card" aria-label="Company details">
      <dl class="company-dl">
        <div class="company-row">
          <dt>Company name</dt>
          <dd>Off Pixel Ltd</dd>
        </div>
        <div class="company-row">
          <dt>Contact email</dt>
          <dd><a href="mailto:hello@offpixel.co.uk">hello@offpixel.co.uk</a></dd>
        </div>
        <div class="company-row">
          <dt>Website</dt>
          <dd><a href="https://www.offpixel.co.uk">www.offpixel.co.uk</a></dd>
        </div>
      </dl>
    </section>
  </svelte:fragment>

  <nav class="toc" aria-label="Table of contents">
    <h2 class="toc-title">Contents</h2>
    <ol class="toc-list">
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#our-contact-details">Our contact details</a></li>
      <li><a href="#categories-of-personal-data">The categories of personal data we collect and use</a></li>
      <li><a href="#sources-of-personal-data">Sources of personal data</a></li>
      <li><a href="#how-we-use-your-personal-data">How we use your personal data</a></li>
      <li><a href="#sharing-your-personal-data">Sharing your personal data</a></li>
      <li><a href="#how-long-do-we-keep-your-personal-data">How long do we keep your personal data?</a></li>
      <li><a href="#automated-decision-making-and-profiling">Automated decision-making and profiling</a></li>
      <li><a href="#your-rights">Your rights</a></li>
      <li><a href="#data-deletion-requests">Data deletion requests</a></li>
      <li><a href="#withdrawing-your-consent">Withdrawing your consent</a></li>
      <li><a href="#how-do-we-protect-your-personal-data">How do we protect your personal data?</a></li>
      <li><a href="#cookies-and-tracking-technologies">Cookies and tracking technologies</a></li>
      <li><a href="#international-data-transfers">International data transfers</a></li>
      <li><a href="#changes-to-our-privacy-policy-and-cookies-statement">Changes to our Privacy Policy and Cookies Statement</a></li>
    </ol>
  </nav>

  <section id="introduction" aria-labelledby="h-introduction">
    <h2 id="h-introduction">1. Introduction</h2>
    <p>
      Off Pixel Ltd (Off/Pixel, we, us, our) is committed to respecting your privacy. The purpose of this Privacy Policy is
      to explain how we will use any personal data we collect about you, the rights you have over any personal data we hold
      about you, and to describe the policies and procedures we have in place to keep your personal data secure.
    </p>
    <p>
      Off Pixel Ltd is a marketing agency specialising in performance-driven campaigns for event promoters, live music
      venues, festivals, sports events, and brands. Our services include paid social advertising, direct-to-consumer (D2C)
      marketing, creative production, and data reporting infrastructure.
    </p>
    <p>
      This Privacy Policy applies to you if you are a client or prospective client of Off Pixel Ltd, an end user whose data
      is processed as part of a marketing campaign we manage on behalf of a client, a supplier or partner, or any person who
      contacts us or interacts with us through our website, email, or social media channels (our Services).
    </p>
  </section>

  <section id="our-contact-details" aria-labelledby="h-contact">
    <h2 id="h-contact">2. Our contact details</h2>
    <p>
      If you have any comments or questions about this Privacy Policy or our data processing practices, please contact us at
      <a href="mailto:hello@offpixel.co.uk">hello@offpixel.co.uk</a> or visit our website at
      <a href="https://www.offpixel.co.uk">www.offpixel.co.uk</a>.
    </p>
  </section>

  <section id="categories-of-personal-data" aria-labelledby="h-categories">
    <h2 id="h-categories">3. The categories of personal data we collect and use</h2>
    <p>The categories of personal data we collect and use include:</p>
    <ul>
      <li>name, email address, and telephone number of clients, prospective clients, and business contacts;</li>
      <li>
        email addresses and phone numbers provided by clients for the purpose of creating marketing audiences, including
        Custom Audiences on Meta platforms (Facebook and Instagram);
      </li>
      <li>
        event registration and sign-up data collected through landing pages and D2C marketing channels operated on behalf
        of clients, including email addresses and WhatsApp contact information;
      </li>
      <li>
        advertising and campaign performance data accessed via the Meta Marketing API, including impressions, reach, clicks,
        conversions, ad spend, and audience insights;
      </li>
      <li>
        conversion event data tracked via the Meta Pixel or Meta Conversions API on client websites, such as page views,
        add-to-cart events, and ticket purchase completions;
      </li>
      <li>
        information about your interactions with electronic communications we send on behalf of clients, including whether a
        communication has been opened and whether you have clicked on any links within it;
      </li>
      <li>information you provide to us when you contact us by email, phone, or through our website or social media channels; and</li>
      <li>any other personal data you may disclose to us when using our Services at any time.</li>
    </ul>
  </section>

  <section id="sources-of-personal-data" aria-labelledby="h-sources">
    <h2 id="h-sources">4. Sources of personal data</h2>
    <p>
      We will receive your personal data when you provide it to us directly — for example when you enquire about our
      Services, sign up for a client's mailing list, or interact with a campaign we manage on a client's behalf.
    </p>
    <p>We also receive personal data from third parties, including:</p>
    <ul>
      <li>
        clients who provide us with customer data, including email and phone lists, for the purposes of running targeted
        advertising campaigns or D2C communications;
      </li>
      <li>
        Meta Platforms, Inc. (Facebook and Instagram), through the Meta Marketing API and Meta Business Suite, where we
        access advertising and audience data relating to campaigns we manage on behalf of clients; and
      </li>
      <li>
        ticketing platforms and event registration tools used by our clients, where data is transferred to us in connection
        with campaign management and audience building.
      </li>
    </ul>
    <p>
      We may combine personal data that we receive from clients, from Meta platforms, and from other sources in order to
      manage and optimise marketing campaigns and provide reporting to clients.
    </p>
  </section>

  <section id="how-we-use-your-personal-data" aria-labelledby="h-how-we-use">
    <h2 id="h-how-we-use">5. How we use your personal data</h2>
    <p>
      All personal data that we obtain about you will be used in accordance with current data protection law and this
      Privacy Policy. We, or third-party data processors acting on our behalf, will process your personal data as follows:
    </p>
    <ul>
      <li>
        As necessary, to perform a contract with you or our clients, including managing paid advertising campaigns, building
        and uploading Custom Audiences to Meta platforms, operating D2C communications on behalf of clients, delivering
        campaign reports, and issuing and processing invoices.
      </li>
      <li>
        As necessary, to comply with a legal obligation, including where you exercise your rights under data protection law and
        make requests, and to comply with any lawful request from government or law enforcement officials or as required to
        meet applicable legal requirements.
      </li>
      <li>
        As necessary, for our legitimate interests in providing the Services and ensuring they operate effectively and in a
        commercially appropriate manner, including:
        <ul>
          <li>to provide you with our Services and manage our client relationships;</li>
          <li>to manage and optimise paid advertising campaigns on Meta platforms (Facebook and Instagram) on behalf of clients;</li>
          <li>
            to build and manage Custom Audiences and Lookalike Audiences on Meta platforms using hashed customer data provided
            by clients;
          </li>
          <li>to track and report on campaign performance using the Meta Pixel, Meta Conversions API, and Meta Marketing API;</li>
          <li>
            to operate D2C marketing channels, including email communications and WhatsApp messaging, on behalf of clients to
            announce events, issue ticket alerts, and engage registered audiences;
          </li>
          <li>to verify the identity of clients and business contacts for security and fraud prevention purposes;</li>
          <li>for the good governance of our business, including maintaining financial records, processing payments, and managing client agreements;</li>
          <li>to respond to enquiries, complaints, and correspondence; and</li>
          <li>for market research, statistical analysis, and campaign performance evaluation to improve our Services.</li>
        </ul>
      </li>
      <li>Based on your consent, to send marketing communications on behalf of our clients to individuals who have opted in to receive them.</li>
    </ul>
  </section>

  <section id="sharing-your-personal-data" aria-labelledby="h-sharing">
    <h2 id="h-sharing">6. Sharing your personal data</h2>
    <p>
      We will share your personal data with the data processors that help us to provide our Services. Any data processors
      with whom we share your personal data are limited by law and by contract in their ability to use your personal data for
      any purpose other than to provide services for us. We will always ensure that any data processors with whom we share your
      personal data are subject to privacy and security obligations consistent with this Privacy Policy and applicable laws.
    </p>
    <p>
      In the course of providing our Services, we will share personal data with Meta Platforms, Inc. for the purposes of
      running advertising campaigns, creating Custom Audiences, and tracking conversions on client websites. The use of your
      personal data by Meta is governed by Meta's own privacy policy, available at
      <a href="https://www.facebook.com/privacy/policy">facebook.com/privacy/policy</a>.
    </p>
    <p>We will also disclose your personal data to third parties in the following circumstances:</p>
    <ul>
      <li>if we sell or buy any business or assets, we may disclose your personal data to the prospective seller or buyer of such business or assets;</li>
      <li>
        if we are under a duty to disclose or share your personal data in order to comply with any legal obligation, any
        lawful request from government or law enforcement officials, or as may be required to meet national security or law
        enforcement requirements or prevent illegal activity; or
      </li>
      <li>
        in order to enforce or apply our agreements or to respond to any claims, to protect our rights or the rights of a
        third party, or to protect the safety of any person or prevent any illegal activity.
      </li>
    </ul>
    <p>
      Save as expressly detailed above, we will never share, sell, or rent any of your personal data to any third party
      without notifying you and, where required, obtaining your consent.
    </p>
  </section>

  <section id="how-long-do-we-keep-your-personal-data" aria-labelledby="h-retention">
    <h2 id="h-retention">7. How long do we keep your personal data?</h2>
    <p>
      We will normally retain your personal data for as long as you use our Services and for up to two years after your last
      use of our Services or your last interaction with us — for example, the last time you engaged with a communication from
      us or contacted us directly.
    </p>
    <p>
      Custom Audience data (such as email addresses or phone numbers) provided by clients for upload to Meta platforms is
      deleted from our systems promptly following upload and is not stored beyond what is strictly necessary for that purpose.
    </p>
    <p>
      We will retain your personal data for longer if we believe it may be necessary to respond to any claims or protect our
      legal rights, or if we are required to do so in order to comply with applicable law.
    </p>
    <p>We will always retain your personal data in accordance with data protection law and never retain it for longer than is necessary.</p>
  </section>

  <section id="automated-decision-making-and-profiling" aria-labelledby="h-profiling">
    <h2 id="h-profiling">8. Automated decision-making and profiling</h2>
    <p>
      As part of our advertising services, we use data provided by clients — including past purchaser lists, event attendee
      data, and engagement data — to build audience profiles and Lookalike Audiences on Meta platforms. This involves
      comparing characteristics of known audiences with broader user populations to identify individuals likely to be interested
      in a client's event or product. This profiling is conducted for our legitimate interests and those of our clients in
      ensuring marketing is relevant and effective.
    </p>
    <p>
      We will ensure that any automated decision-making or profiling we undertake does not produce legal effects concerning
      you or similarly significantly affect you.
    </p>
  </section>

  <section id="your-rights" aria-labelledby="h-rights">
    <h2 id="h-rights">9. Your rights</h2>
    <p>You may contact us at any time at <a href="mailto:hello@offpixel.co.uk">hello@offpixel.co.uk</a> to:</p>
    <ul>
      <li>request that we provide you with a copy of the personal data which we hold about you;</li>
      <li>request that we update any personal data which is inaccurate or incomplete;</li>
      <li>request that we delete any of your personal data which we are holding;</li>
      <li>request that we restrict the way in which we process your personal data;</li>
      <li>request that we provide your personal data to you or a third-party provider of services in a structured, commonly-used, and machine-readable format;</li>
      <li>object to us processing your personal data based on our legitimate interests, including profiling; or</li>
      <li>object to us processing your personal data for direct marketing purposes.</li>
    </ul>
    <p>
      Your request should include your name and email address, and we may request proof of your identity. Please allow up to 30
      days for us to respond to your request.
    </p>
  </section>

  <section id="data-deletion-requests" aria-labelledby="h-deletion">
    <h2 id="h-deletion">10. Data deletion requests</h2>
    <p>
      To request the deletion of any personal data we hold about you, please email us at
      <a href="mailto:hello@offpixel.co.uk?subject=Data%20Deletion%20Request">hello@offpixel.co.uk</a> with the subject line
      <strong>Data Deletion Request</strong>. We will confirm deletion within 30 days of receiving your request.
    </p>
    <p>
      Where personal data has been shared with Meta Platforms, Inc. for advertising purposes, you may also submit a data
      deletion request directly to Meta using their
      <a href="https://www.facebook.com/help/contact/794535994666686">Data Deletion Request tool</a>, or adjust your
      preferences via <a href="https://www.facebook.com/adpreferences/">Meta Ad Preferences</a>.
    </p>
  </section>

  <section id="withdrawing-your-consent" aria-labelledby="h-consent">
    <h2 id="h-consent">11. Withdrawing your consent</h2>
    <p>
      Where we are processing your personal data based on your consent, you may withdraw that consent at any time without
      affecting the lawfulness of processing carried out prior to withdrawal.
    </p>
    <p>
      You can withdraw your consent to receive marketing communications by clicking the unsubscribe link in any email, by
      replying STOP to any WhatsApp message, or by contacting us directly at
      <a href="mailto:hello@offpixel.co.uk">hello@offpixel.co.uk</a>.
    </p>
  </section>

  <section id="how-do-we-protect-your-personal-data" aria-labelledby="h-protect">
    <h2 id="h-protect">12. How do we protect your personal data?</h2>
    <p>
      We use appropriate technical and organisational security measures to protect your personal data against unauthorised
      access, loss, or disclosure. Access to client accounts, campaign data, and audience information is restricted to
      authorised Off Pixel Ltd personnel and is managed via secure credentials and two-factor authentication. When transferring
      personal data to third-party platforms such as Meta, we use encrypted connections.
    </p>
    <p>
      We cannot guarantee the security of personal data transmitted to us by email or other unsecured channels. Once we have
      received your personal data, we will use appropriate procedures and security measures to prevent unauthorised access.
    </p>
  </section>

  <section id="cookies-and-tracking-technologies" aria-labelledby="h-cookies">
    <h2 id="h-cookies">13. Cookies and tracking technologies</h2>
    <p>
      Where we manage Meta Pixels or Meta Conversions API integrations on behalf of clients, these technologies may set
      cookies or collect browsing and conversion event data on client websites. Cookies and tracking technologies are used for
      the following purposes:
    </p>
    <ul>
      <li>
        to track conversions and events on client websites (for example, ticket purchases and page visits) and report these to
        Meta for campaign optimisation purposes;
      </li>
      <li>to build retargeting audiences of users who have visited a client website or taken a specific action but have not yet purchased;</li>
      <li>to analyse website traffic and campaign performance; and</li>
      <li>to enable targeted advertising on Meta platforms to audiences likely to be interested in a client's event or product.</li>
    </ul>
    <p>
      The responsibility for obtaining valid cookie consent from end users on client websites rests with the client as the data
      controller for their own website visitors. Users may manage their cookie and tracking preferences through the consent
      mechanism on the relevant website or via
      <a href="https://www.facebook.com/adpreferences/">Meta's Ad Preferences</a>.
    </p>
    <p>
      The use of tracking technologies by Meta and other third-party platforms is subject to their own privacy policies and is
      not covered by this Privacy Policy except as required by law.
    </p>
  </section>

  <section id="international-data-transfers" aria-labelledby="h-transfers">
    <h2 id="h-transfers">14. International data transfers</h2>
    <p>
      Meta Platforms, Inc. is a US-based company and data transferred to Meta in connection with advertising campaigns may be
      processed outside the United Kingdom. Such transfers are subject to Meta's applicable data transfer mechanisms, including
      Standard Contractual Clauses, consistent with the requirements of UK GDPR.
    </p>
  </section>

  <section id="changes-to-our-privacy-policy-and-cookies-statement" aria-labelledby="h-changes">
    <h2 id="h-changes">15. Changes to our Privacy Policy and Cookies Statement</h2>
    <p>
      We reserve the right to change this Privacy Policy and Cookies Statement from time to time. Any changes will be reflected
      on this page, and the "last updated" date at the top will be revised accordingly. We recommend that you consult this page
      periodically to remain informed of how we process your personal data. Your continued use of our Services shall
      constitute your acceptance of any revised Privacy Policy and Cookies Statement.
    </p>
    <p>
      You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's supervisory
      authority for data protection matters, at <a href="https://ico.org.uk">ico.org.uk</a> or by calling
      <a href="tel:+443031231113">0303 123 1113</a>.
    </p>
  </section>
</LegalPageShell>

<style>
  .meta-lead {
    font-size: 0.9375rem;
    line-height: 1.6;
    margin: 1rem 0 0.5rem;
    max-width: 42rem;
    opacity: 0.9;
  }

  .meta-updated {
    font-size: 0.8125rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 0 0 1.5rem;
    opacity: 0.65;
  }

  .company-card {
    padding: 1.25rem 1.5rem;
    margin-bottom: 2rem;
    background: rgba(30, 24, 16, 0.05);
    border: 1px solid rgba(30, 24, 16, 0.12);
    max-width: 42rem;
  }

  .company-dl {
    margin: 0;
  }

  .company-row {
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 0.75rem 1.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(30, 24, 16, 0.08);
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  .company-row:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .company-row:first-child {
    padding-top: 0;
  }

  .company-dl dt {
    margin: 0;
    font-weight: 600;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.55;
  }

  .company-dl dd {
    margin: 0;
  }

  .company-dl a {
    color: #1e1810;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  .company-dl a:hover {
    opacity: 0.75;
  }

  .toc {
    margin-bottom: 2.5rem;
    padding: 1.5rem 1.5rem 1.25rem;
    max-width: 42rem;
    border: 1px solid rgba(30, 24, 16, 0.12);
    background: rgba(30, 24, 16, 0.03);
  }

  .toc-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.12em;
    margin: 0 0 1rem;
    font-weight: 400;
  }

  .toc-list {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.875rem;
    line-height: 1.55;
  }

  .toc-list li {
    margin-bottom: 0.4rem;
  }

  .toc-list a {
    color: #1e1810;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  .toc-list a:hover {
    opacity: 0.75;
  }

  @media (max-width: 520px) {
    .company-row {
      grid-template-columns: 1fr;
      gap: 0.25rem;
    }
  }
</style>
