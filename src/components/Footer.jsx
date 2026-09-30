import { Link } from "react-router-dom";
import { footerBottom, footerTop, slugify } from "../data/data";

const Column = ({ title, items }) => (
  <div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item}>
          <Link
            to={`/careers/${slugify(item)}`}
            className="text-sm hover:text-brand hover:underline"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const StoreBadge = ({ small, big }) => (
  <a
    href="#"
    className="flex h-10 w-[8.5rem] items-center gap-2 rounded-control border border-white/40 bg-black px-3 text-white"
  >
    <span className="text-xl leading-none">{big.icon}</span>
    <span className="flex flex-col leading-tight">
      <span className="text-[0.5625rem]">{small}</span>
      <span className="text-md font-semibold">{big.label}</span>
    </span>
  </a>
);

const learnerFooterColumns = [
  {
    title: "Coursera",
    links: [
      ["About", "https://www.coursera.org/about"],
      ["What We Offer", "https://www.coursera.org/about/how-coursera-works/"],
      ["Leadership", "https://www.coursera.org/about/leadership"],
      ["Careers", "https://careers.coursera.com/"],
      ["Catalog", "https://www.coursera.org/browse"],
      ["Coursera Plus", "https://www.coursera.org/courseraplus"],
      [
        "Professional Certificates",
        "https://www.coursera.org/professional-certificates",
      ],
      ["MasterTrack® Certificates", "https://www.coursera.org/mastertrack"],
      ["Degrees", "https://www.coursera.org/degrees"],
      [
        "For Enterprise",
        "https://www.coursera.org/business?utm_campaign=website&utm_content=corp-to-home-footer-for-enterprise&utm_medium=coursera&utm_source=enterprise",
      ],
      [
        "For Government",
        "https://www.coursera.org/government?utm_campaign=website&utm_content=corp-to-home-footer-for-government&utm_medium=coursera&utm_source=enterprise",
      ],
      [
        "For Campus",
        "https://www.coursera.org/campus?utm_campaign=website&utm_content=corp-to-home-footer-for-campus&utm_medium=coursera&utm_source=enterprise",
      ],
      [
        "Become a Partner",
        "https://partnerships.coursera.org/?utm_medium=coursera&utm_source=partnerships&utm_campaign=website&utm_content=corp-to-home-footer-become-a-partner",
      ],
      ["Social Impact", "https://www.coursera.org/social-impact"],
    ],
  },
  {
    title: "Community",
    links: [
      ["Learners", "https://www.coursera.community/"],
      ["Partners", "https://www.coursera.org/partners"],
      [
        "Beta Testers",
        "https://www.coursera.support/s/article/360000152926-Become-a-Coursera-beta-tester",
      ],
      ["Blog", "https://blog.coursera.org/"],
      [
        "The Coursera Podcast",
        "https://open.spotify.com/show/58M36bneU7REOofdPZxe6A",
      ],
      ["Tech Blog", "https://medium.com/coursera-engineering"],
    ],
  },
  {
    title: "More",
    links: [
      ["Press", "https://www.coursera.org/about/press"],
      ["Investors", "https://investor.coursera.com/"],
      ["Terms", "https://www.coursera.org/about/terms"],
      ["Privacy", "https://www.coursera.org/about/privacy"],
      ["Help", "https://learner.coursera.help/hc"],
      [
        "Accessibility",
        "https://learner.coursera.help/hc/articles/360050668591-Accessibility-Statement",
      ],
      ["Contact", "https://www.coursera.org/about/contact"],
      ["Articles", "https://www.coursera.org/articles"],
      ["Directory", "https://www.coursera.org/directory"],
      ["Affiliates", "https://www.coursera.org/about/affiliates"],
      [
        "Modern Slavery Statement",
        "https://coursera_assets.s3.amazonaws.com/footer/Modern+Slavery+Statement+(June%2C+2026).pdf",
      ],
      [
        "Cookies Preference Center",
        "https://www.coursera.org/about/cookies-manage",
      ],
    ],
  },
];

const learnerSocialLinks = [
  [
    "Facebook",
    "https://www.facebook.com/Coursera",
    "https://s3.amazonaws.com/coursera_assets/footer/facebook.png",
  ],
  [
    "LinkedIn",
    "https://www.linkedin.com/company/coursera",
    "https://s3.amazonaws.com/coursera_assets/footer/linkedin.png",
  ],
  [
    "Twitter",
    "https://twitter.com/coursera",
    "https://s3.amazonaws.com/coursera_assets/footer/twitter.png",
  ],
  [
    "YouTube",
    "https://www.youtube.com/user/coursera",
    "https://s3.amazonaws.com/coursera_assets/footer/youtube.png",
  ],
  [
    "Instagram",
    "https://www.instagram.com/coursera/",
    "https://s3.amazonaws.com/coursera_assets/footer/instagram.png",
  ],
];

const LearnerFooter = () => (
  <footer className="border-t border-white/15 bg-[#0f1114] py-8 text-white">
    <div className="page-wrap">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1.2fr_0.8fr]">
        {learnerFooterColumns.map(({ title, links }) => (
          <section key={title}>
            <h2 className="mb-2.5 text-sm font-semibold text-white">{title}</h2>
            <ul className="flex flex-col gap-1.5">
              {links.map(([label, url]) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] leading-5 text-white/75 hover:text-white hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section>
          <h2 className="mb-2.5 text-sm font-semibold text-white">
            Mobile App
          </h2>
          <div className="flex flex-wrap gap-2.5 lg:flex-col">
            <a
              href="https://itunes.apple.com/app/apple-store/id736535961?pt=2334150&ct=Coursera%20Web%20Promo%20Banner&mt=8"
              target="_blank"
              rel="noreferrer"
              aria-label="Download on the App Store"
              className="inline-flex overflow-hidden rounded-md border border-white/30"
            >
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&dpr=1&w=152&h=45&q=40"
                alt="Download on the App Store"
                className="h-[45px] w-[152px]"
              />
            </a>
            <a
              href="http://play.google.com/store/apps/details?id=org.coursera.android"
              target="_blank"
              rel="noreferrer"
              aria-label="Get it on Google Play"
              className="inline-flex overflow-hidden rounded-md border border-white/30"
            >
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&dpr=1&w=152&h=45&q=40"
                alt="Get it on Google Play"
                className="h-[45px] w-[152px]"
              />
            </a>
          </div>
        </section>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-white/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-white/65">
          © 2026 Coursera Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {learnerSocialLinks.map(([label, url, image]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Coursera ${label}`}
            >
              <img
                src={image}
                alt={`Coursera ${label}`}
                className="size-6 brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const Footer = ({ simplified = false }) => {
  if (simplified) return <LearnerFooter />;

  return (
    <footer className="mt-16 bg-footer py-12">
      <div className="page-wrap">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerTop.map((c) => (
            <Column key={c.title} {...c} />
          ))}
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerBottom.map((c) => (
            <Column key={c.title} {...c} />
          ))}
          <div className="flex flex-col gap-10">
            <StoreBadge
              small="Download on the"
              big={{ icon: "", label: "App Store" }}
            />
            <StoreBadge
              small="GET IT ON"
              big={{ icon: "▶", label: "Google Play" }}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-sm text-muted">
            © 2026 Coursera Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm font-semibold text-muted">
            <a href="#" className="hover:text-brand">
              Facebook
            </a>
            <a href="#" className="hover:text-brand">
              LinkedIn
            </a>
            <a href="#" className="hover:text-brand">
              Instagram
            </a>
            <a href="#" className="hover:text-brand">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
