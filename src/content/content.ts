/**
 * Content constants for the Astro Validation Landing theme
 * Update these values to customize your landing page content
 */

export const siteConfig = {
  name: "IT INFO TECH",
  title: "IT INFO TECH",
  description:
    "",
  image: "/og-image.png",
  quickLinks: [
    // { label: "Features", href: "#features" },
    // { label: "How It Works", href: "#how-it-works" },
    // { label: "FAQ", href: "#faq" }
  ] as { label: string, href: string }[],
  legalLinks: [
    { label: "מדיניות הפרטיות", href: "/privacy" },
    // { label: "Terms of Service", href: "/terms" },
    // { label: "Contact", href: "mailto:hello@astro-validation-landing.com" }
  ]
};

export const header = {
  name: siteConfig.name,
  navLinks: siteConfig.quickLinks,
  cta: {
    label: "צור קשר",
    href: "#cta"
  }
};

export const hero = {
  headline:
    "ייעוץ ליישום פתרונות IT, תשתיות ואבטחת מידע לארגונים",
  subheadline:
    "ליווי מקצועי בתכנון, הקמה ושדרוג של מערכות מחשוב, תשתיות ואבטחת מידע — משלב האפיון ועד היישום בפועל.\n\n\nניסיון רב שנים בייעוץ אסטרטגי וארגוני, הובלת פרויקטים מורכבים ושילוב פתרונות ענן, אוטומציה ו־AI בסביבות עבודה קיימות.",
  primaryCta: {
    label: "צרו קשר",
    href: "#cta"
  },
  secondaryCta: {
    label: "עוד עלינו",
    href: "#features"
  },
  image: {
    src: "/images/hero-illustration.png",
    alt: "Hero illustration showing a validation dashboard"
  }
};

export const problem = {
  headline: "Are You Building in the Dark?",
  description:
    "Many entrepreneurs spend months or even years building the perfect product, only to discover that nobody wants it. You might be iterating on assumptions instead of validated facts. Without early market validation, you risk wasting time and resources on ideas that won't resonate with your audience."
};

export const solution = {
  headline: "Validate Your Vision, Faster & Smarter.",
  description:
    "Astro Validation Landing is your secret weapon for testing product ideas quickly and gathering real market feedback before you invest heavily in development. Our theme makes it simple to create stunning, conversion-optimized landing pages that capture interest, collect emails, and validate market demand. Launched from concept to live in hours, not weeks."
};

export const features = {
  heading: "השירותים שלנו",
  description:
    "ייעוץ מקצועי בכל תחומי המחשוב, הIT ואבטחת המידע",
  items: [
    {
      icon: "🛡️",
      headline: "אבטחת מידע ותשתיות",
      description:
        "ייעוץ להקמה של מערכות IT ואבטחת מידע בהתאמה לצורכי הארגון, תוך דגש על יציבות, אבטחה ויכולת צמיחה."
    },
    {
      icon: "☁️",
      headline: "פתרונות ענן",
      description:
        "ליווי פרויקטים של מעבר לענן או הקמת סביבות ענן חדשות, כולל תכנון ארכיטקטורה והתאמה לתשתיות קיימות."
    },
    {
      icon: "🧭",
      headline: "ייעוץ אסטרטגי להנהלה",
      description:
        "סיוע להנהלות בקבלת החלטות בתחום המחשוב ואבטחת המידע, תוך ראייה מערכתית והתאמה ליעדי הארגון.  השתתפות בועדות היגוי ובAdvisory Boards."
    },
    {
      icon: "📄",
      headline: "ליווי מכרזים ובחירת ספקים",
      description:
        "כתיבה וליווי של מסמכי RFP/RFI, בחינת פתרונות טכנולוגיים, הערכת חלופות וסיוע בבחירת ספקים מתאימים."
    },
    {
      icon: "🏢",
      headline: "יישום מערכות ליבה",
      description:
        "ייעוץ וליווי בהטמעת מערכות בתחומי שירות, שיווק, תמיכה, ביטוח ופיננסים, בהתאמה לתהליכי העבודה בארגון."
    },
    {
      icon: "🤖",
      headline: "אוטומציה, RPA ו-AI",
      description:
        "ייעוץ לשילוב כלי RPA ופתרונות AI במערכות קיימות לצורך ייעול תהליכים, חיסכון בזמן ושיפור תפעולי."
    }
  ]
};

export const howItWorks = {
  heading: "מקצוענות רבת שנים בתחום הIT",
  description:
    "",
  items: [
    {
      number: "1",
      headline: "ייעוץ ארגוני בהקמת מערכות תשתיות מחשוב, IT, ואבטחת מידע",
      description:
        ""
    },
    {
      number: "2",
      headline: "ייעוץ אסטרטגי להנהלה בהקמת מערכי מחשוב ואבטחת מידע",
      description:
        ""
    },
    {
      number: "3",
      headline: "ייעוץ ארגוני בתחום יישום מערכות ליבה בתחומים של שיווק, שירות, תמיכה, ביטוח ופיננסים",
      description:
        ""
    },
    {
      number: "4",
      headline: "עריכה וליווי בבחירת פתרונות ספקים, סיוע בכתיבת RFP/I - הערכת אלטרנטיבות ומסמך בחירה",
      description: ""
    },
    {
      number: "5",
      headline: "ייזום, גיבוש וליווי פרויקטים בתחום, תוך עמידה בחוזרים הנדרשים ברגולציה, IT ואבטחת מידע",
      description: ""
    },
    {
      number: "6",
      headline: "יישום וליווי פרויקטים להעברה / הקמה בענן",
      description: ""
    },
    {
      number: "7",
      headline: "שילוב RPA וכלי AI במערכות קיימות",
      description: ""
    },
  ]
};

export const testimonials = {
  heading: "What Early Adopters Are Saying",
  description:
    "Real founders share their success stories using Astro Validation Landing.",
  items: [
    {
      quote:
        "We validated our SaaS idea in 48 hours using Astro Validation Landing. Got 200+ email signups from day one. This tool is a game-changer.",
      author: "Sarah Chen",
      company: "Product Manager at TechStartup",
      avatar: "SC",
      image: "/images/avatar-1.jpg"
    },
    {
      quote:
        "As a non-technical founder, I was skeptical. But this made launching a validation page easier than I expected. Highly recommended!",
      author: "Marcus Johnson",
      company: "Founder, AI Solutions Co.",
      avatar: "MJ",
      image: "/images/avatar-2.jpg"
    },
    {
      quote:
        "The conversion optimization built into this theme is incredible. Our CTR is 3x higher than typical landing page templates.",
      author: "Elena Rodriguez",
      company: "Growth Lead, FinTech Ventures",
      avatar: "ER",
      image: "/images/avatar-3.jpg"
    }
  ]
};

export const cta = {
  headline: "צור קשר לקבלת פרטים נוספים",
  description:
    "",
  button: {
    label: "שלח",
    href: "#email-signup"
  },
  disclaimer: ""
};

export const faq = {
  heading: "Got Questions? We've Got Answers.",
  description: "Everything you need to know about Astro Validation Landing.",
  items: [
    {
      question: "What products can I validate?",
      answer:
        "You can validate any product or service idea—SaaS, mobile apps, physical products, online courses, consulting services, and more. If you have an idea and want to test market demand, this theme is for you."
    },
    {
      question: "Do I need coding skills?",
      answer:
        "No! Astro Validation Landing is designed for non-technical founders and entrepreneurs. You can customize colors, copy, and layout through simple configuration. For advanced customization, basic HTML/CSS knowledge helps."
    },
    {
      question: "How do I collect emails?",
      answer:
        "The theme includes placeholder forms that integrate with popular email platforms like Mailchimp, ConvertKit, and Brevo. We also support custom webhooks for any service you use."
    },
    {
      question: "Is it mobile-responsive?",
      answer:
        "Absolutely! Every component is built mobile-first and tested across all devices. Your landing page will look perfect on phones, tablets, and desktops."
    },
    {
      question: "What support is available?",
      answer:
        "We offer email support, an active community forum, and comprehensive documentation. Plus, the source code is yours to modify as needed."
    }
  ]
};

export const footer = {
  sections: {
    quickLinks: {
      title: "Quick Links",
      links: siteConfig.quickLinks
    },
    legal: {
      title: "משפטי",
      links: siteConfig.legalLinks
    }
  },
  copyright: `© ${new Date().getFullYear()} Astro Validation Landing. All rights reserved.`,
  social: [
    { name: "Twitter", icon: "twitter", url: "https://twitter.com" },
    { name: "GitHub", icon: "github", url: "https://github.com" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" }
  ]
};
