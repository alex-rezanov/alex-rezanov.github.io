import {
  ConclusionData,
  DesignData,
  IntroData,
  ProblemData,
  ProcessData,
  ResearchData,
  TestimonialsData,
  WorkPreviewData,
  WorkPreviewItem,
} from '../../models';
import { WorkSectionType } from '../../enums';
import { PLENTY_ONE_TESTIMONIALS } from './testimonial-items';

const LAPUNZEL_INTRO_DATA: IntroData = {
  type: WorkSectionType.INTRO,
  sideBarData: { label: 'Intro', link: WorkSectionType.INTRO },
  title: 'Lapunzel - Ukrainian pet cosmetics shop',
  description: {
    text: 'Redesign of the e-commerce experience for a Ukrainian vegan pet cosmetics brand, so that pet owners can effortlessly discover, trust, and buy products that their animals actually deserve.',
    chips: ['Website', 'E-commerce', 'Mobile-first'],
  },
  imageSection: {
    imageUrls: [
      'assets/images/selected_3_1.png',
      'assets/images/selected_3_2.png',
      'assets/images/selected_3_3.png',
      'assets/images/selected_3_4.png',
    ],
    backGroundColor: '#FCE64D',
  },
  introTableData: [
    { label: 'Product', value: 'Lapunzel, Ukrainian vegan pet cosmetics brand' },
    { label: 'Role', value: 'UX Designer (end-to-end)' },
    { label: 'Team', value: 'Design team, stakeholders (brand founder)' },
    { label: 'Target audience', value: 'Ukrainian pet owners, 25–40, mobile shoppers' },
    { label: 'Platform', value: 'Mobile-first, desktop' },
  ],
};

const LAPUNZEL_PROBLEM_DATA: ProblemData = {
  type: WorkSectionType.PROBLEM,
  sideBarData: { label: 'Problem', link: WorkSectionType.PROBLEM },
  title: {
    text: 'Problem',
    descriptions: [
      {
        text: "Despite a high traffic on the Lapunzel website, conversions remain low. Users actively visit pages but don't complete purchases. Some of the potential reasons are following:",
      },
      {
        isList: true,
        text: 'The interface felt cluttered and hard to navigate.',
      },
      {
        isList: true,
        text: "Product categories were unclear, users couldn't quickly find what they were looking for.",
      },
      {
        isList: true,
        text: "The visual design wasn't building confidence in the brand.",
      },
      {
        isList: true,
        text: "Product pages didn't give users enough information to make a purchase decision.",
      },
      {
        text: "The main challenge here wasn't awareness, but trust and usability.",
      },
    ],
  },
  problemTableData: [
    {
      label: 'Brand mission',
      value:
        '“Our mission is to create maximally natural, vegan, and hypoallergenic care for pets. The founders want pet owners to genuinely enjoy time spent with their animals.”',
    },
    {
      label: 'Current problem',
      value: '“Despite strong traffic, conversions remain low. The factors pushing users away needed to be identified and removed.”',
    },
    {
      label: 'Founder would like to',
      value:
        "“Optimise the site's UX, make categories more intuitive with fewer choices, deliver a design that builds trust and drives action.”",
    },
  ],
  tableDescription: 'Key insights from Kick-off meeting with founder',
  footerImageUrl: 'assets/images/lapunzel_problem_1.png',
};

const LAPUNZEL_RESEARCH_DATA: ResearchData = {
  type: WorkSectionType.RESEARCH,
  sideBarData: { label: 'Research', link: WorkSectionType.RESEARCH },
  title: {
    text: 'Research and discovery',
    descriptions: [
      {
        text: 'To approach this project systematically, we used the Double Diamond framework to explore the problem space, then converging on focused solutions. The process unfolded across four stages over 3 weeks.',
      },
      {
        text: 'To understand the root causes behind low conversions, we combined three research methods: in-depth interviews, usability testing of the existing site, and a quantitative survey to validate findings at scale.',
      },
    ],
  },
  researchImageWithDescription: {
    imageUrl: 'assets/images/lapunzel_research_1.png',
    description:
      'Interview responses were documented and synthesized using affinity mapping, revealing four key theme clusters: product selection criteria, discovery behavior, purchase barriers, and post-purchase expectations.',
  },
  qualitativeInsights: [
    {
      headerChipTitle: 'Qualitative insights',
      headerTitle: 'In-depth Interviews & Usability Testing',
      descriptions: ['6 respondents & 5 for testing', '20+ questions', '40 min average'],
      takeaways: [
        {
          keyTakeawayTitle: 'Key insights:',
          keyTakeaway: [
            'Users prefer natural, vegan products — they see it as a safety signal',
            'Reviews and community content heavily influence purchase decisions',
            'Brand values and social activity matter when choosing where to buy',
            'Users want to know exactly which pet and breed a product is suitable for',
            'Clear product categorisation is essential for efficient browsing',
          ],
        },
        {
          keyTakeawayTitle: 'Key pain points identified:',
          keyTakeaway: [
            'Unclear categorization made product discovery difficult',
            'Absence of reviews and ratings reduced purchase confidence',
            "No unified catalog page — users couldn't browse all products at once",
            'Product descriptions were unstructured and contained unfamiliar terminology',
            'The blog lacked topic categories, making content hard to navigate',
            'Ambiguous UI elements in the header created unnecessary confusion',
          ],
        },
      ],
    },
    {
      headerChipTitle: 'Qualitative insights',
      headerTitle: 'User survey',
      descriptions: ['20+ respondents', '10 questions'],
      takeaways: [
        {
          keyTakeawayTitle: 'Main insights:',
          keyTakeaway: [
            '96% of users said categorization directly impacts how quickly they find products',
            '55% reported difficulties navigating the existing category structure',
            '55% consider reviews important when making a purchase decision',
            '94% want to see product availability status clearly displayed',
            '77% prioritize natural ingredients when choosing pet care products',
            "51% factor in a brand's social responsibility when purchasing",
            '66.7% discover pet product information through social media',
          ],
        },
      ],
    },
  ],
  conclusion:
    'As a result, we mapped the full experience for our persona Viktoria, a 27-year-old graphic designer from Kyiv with two dogs, who priorities natural and quality products. The map covers 9 stages from need discovery to post-purchase review, analysing her actions, touch points, barriers, goals, and design opportunities at each step.',
  conclusionImageWithDescription: {
    imageUrl: 'assets/images/lapunzel_lapunzel_research_2.png',
    description: 'Persona and CJM. It’s conducted in Ukrainian, since the project is done for local market.',
  },
};

const LAPUNZEL_DESIGN_DATA: DesignData = {
  type: WorkSectionType.DESIGN,
  sideBarData: { label: 'Design', link: WorkSectionType.DESIGN },
  title: {
    text: 'Design decisions',
    descriptions: [
      {
        text: 'The research revealed a clear picture and every design decision we made was a direct response to a validated user problem.',
      },
      {
        text: 'The visual direction was equally intentional and they had a clear gap between branding and website. Lapunzel is a bold, modern brand with a strong identity, expressive typography, playful attitude and layouts. We designed to match that energy. When the interface feels as strong as the product, users believe in the brand and it converts.',
      },
    ],
  },
  titleImage: {
    backGroundColor: '#FCE64D',
    decisionImageUrls: [
      'assets/images/lapunzel_decisions_1_1.png',
      'assets/images/lapunzel_decisions_1_2.png',
      'assets/images/lapunzel_decisions_1_3.png',
    ],
  },
  designDecisions: [
    {
      backGroundColor: '#AB7BA7',
      decisionImageUrls: [
        'assets/images/lapunzel_decisions_2_1.png',
        'assets/images/lapunzel_decisions_2_2.png',
        'assets/images/lapunzel_decisions_2_3.png',
      ],
      title: {
        text: 'Reviews and social proof',
        descriptions: [
          {
            text: "The existing product pages had no reviews or ratings. Users were expected to trust a brand they'd just discovered with nothing to back it up.",
          },
          {
            text: "55% of users said reviews matter when making a purchase decision. For a category where people are putting something on their pet's skin, trust isn't optional.",
          },
          {
            text: 'We added star ratings and user reviews to every product page. A full reviews panel opens without leaving the page, and users can leave their own feedback directly.',
          },
        ],
      },
    },
    {
      backGroundColor: '#AB7BA7',
      decisionImageUrls: ['assets/images/lapunzel_decisions_3_1.png', 'assets/images/lapunzel_decisions_3_2.png'],
      title: {
        text: 'Categorisation and navigation',
        descriptions: [
          {
            text: 'The old navigation organised products by animal first, forcing users to dig through two identical subcategory trees. There was no search, no way to browse everything at once.',
          },
          {
            text: '96% of users said categorisation directly impacts how quickly they find products. 55% had difficulties with the existing structure.',
          },
          {
            text: 'We reorganised navigation by product type. A unified "All products" page, horizontal filter chips on the catalog and a search bar gave users multiple fast paths to what they need.',
          },
        ],
      },
    },
    {
      backGroundColor: '#AB7BA7',
      decisionImageUrls: [
        'assets/images/lapunzel_decisions_4_1.png',
        'assets/images/lapunzel_decisions_4_2.png',
        'assets/images/lapunzel_decisions_4_3.png',
      ],
      title: {
        text: 'Blog and conversion',
        descriptions: [
          {
            text: 'The existing blog was a flat list of articles with no categories, navigation and structure. Users who came looking for pet care advice left without finding what they needed. Besides, good blog is a strong SEO and conversion tool.',
          },
          {
            text: '66.7% of users find pet product information through social media. 33.3% use topic blogs, so well-structured blog was a real opportunity to capture users.',
          },
          {
            text: 'We reorganised the blog with clear topic categories and added summary with product integrations.',
          },
        ],
      },
    },
    {
      backGroundColor: '#AB7BA7',
      decisionImageUrls: [
        'assets/images/lapunzel_decisions_5_1.png',
        'assets/images/lapunzel_decisions_5_2.png',
        'assets/images/lapunzel_decisions_5_3.png',
        'assets/images/lapunzel_decisions_5_4.png',
      ],
      title: {
        text: 'Brand trust',
        descriptions: [
          {
            text: "Users didn't just want good products, they wanted to know who was behind them. Without a dedicated brand page, there was nowhere to find that information.",
          },
          {
            text: "77% of users said natural ingredients are important to them. 51% consider a brand's social responsibility when purchasing. 31% said volunteer activity influences their decision to buy.",
          },
          {
            text: 'Key trust signals are presented as dedicated sections on about us and home page, keeping the design clean and vibrant.',
          },
        ],
      },
    },
  ],
  designFlowItems: [
    {
      imageUrls: [
        'assets/images/lapunzel_decisions_1_3.png',
        'assets/images/lapunzel_flow_1_1.png',
        'assets/images/lapunzel_flow_1_2.png',
        'assets/images/lapunzel_flow_1_3.png',
        'assets/images/lapunzel_flow_1_4.png',
      ],
      imageBackgroundColor: '#FCE64D',
      imageDescription: 'Checkout flow: Cart → Checkout → Success screen.',
      descriptions: [
        'Checkout flow was designed to be as frictionless as possible. The cart gives a clear order summary with promo code input and a single prominent CTA. ',
        'The checkout is structured in 3 logical steps with progress clearly indicated so users always know where they are.',
        'Quick purchase option reduce steps for returning users. The confirmation screen closes the loop with a warm moment so that user understand the system status.',
      ],
    },
  ],
  footerImage: {
    footerImageUrls: [
      'assets/images/lapunzel_footer_1_1.png',
      'assets/images/lapunzel_footer_1_2.png',
      'assets/images/lapunzel_footer_1_3.png',
      'assets/images/lapunzel_footer_1_4.png',
    ],
    backGroundColor: '#FCE64D',
    description: 'Contact, Wishlist, FAQ, Footer.',
  },
};

const LAPUNZEL_CONCLUSION_DATA: ConclusionData = {
  type: WorkSectionType.CONCLUSION,
  sideBarData: { label: 'Conclusion', link: WorkSectionType.CONCLUSION },
  title: 'Conclusions',
  conclusionTableData: [
    {
      title: 'Outcomes',
      descriptions: [
        'Redesign was presented as a documented, interactive prototype, covering the complete end-to-end shopping experience across mobile and desktop. Every screen from homepage to post-purchase confirmation was designed and handed off.',
        "Project addressed all validated problem areas. Visual style was built to match brand's bold identity to create a consistent, recognisable experience across all touch points. Founder received a design that finally matched the quality and personality of the products themselves.",
      ],
    },
    {
      title: 'Reflections',
      descriptions: [
        "Few things I'd do differently:",
        'More time on information architecture before jumping into UI. We moved fast, and some structural decisions required rework after usability testing.',
        'Client involvement in design reviews during the process could have shaped decisions earlier.',
        "I'd also run a second round of usability testing on the final prototype with more participants. Three was enough to catch critical issues, but more sessions would have given us more confidence before handoff. Time restrictions played a role here.",
      ],
    },
  ],
};

const LAPUNZEL_PREVIEW_DATA: WorkPreviewData = {
  navigationLink: 'lapunzel',
  sectionData: {
    intro: LAPUNZEL_INTRO_DATA,
    problem: LAPUNZEL_PROBLEM_DATA,
    research: LAPUNZEL_RESEARCH_DATA,
    design: LAPUNZEL_DESIGN_DATA,
    conclusion: LAPUNZEL_CONCLUSION_DATA,
  },
};

// const GEOSTRATEGISTS_INTRO_DATA: IntroData = {
//   type: WorkSectionType.INTRO,
//   sideBarData: { label: 'Intro', link: WorkSectionType.INTRO },
// }
//
// const GEOSTRATEGISTS_PROBLEM_DATA: ProblemData = {
//   type: WorkSectionType.PROBLEM,
//   sideBarData: { label: 'Problem', link: WorkSectionType.PROBLEM },
// }
//
// const GEOSTRATEGISTS_RESEARCH_DATA: ResearchData = {
//   type: WorkSectionType.RESEARCH,
//   sideBarData: { label: 'Research', link: WorkSectionType.RESEARCH },
// }
//
// const GEOSTRATEGISTS_DESIGN_DATA: DesignData = {
//  type: WorkSectionType.DESIGN,
//  sideBarData: { label: 'Design', link: WorkSectionType.DESIGN },
// }
//
// const GEOSTRATEGISTS_CONCLUSION_DATA: ConclusionData = {
//   type: WorkSectionType.CONCLUSION,
//   sideBarData: { label: 'Conclusion', link: WorkSectionType.CONCLUSION },
// }

const GEOSTRATEGISTS_PREVIEW_DATA: WorkPreviewData = {
  navigationLink: 'geostrategists',
  sectionData: {
    // intro: GEOSTRATEGISTS_INTRO_DATA,
    // problem: GEOSTRATEGISTS_PROBLEM_DATA,
    // research: GEOSTRATEGISTS_RESEARCH_DATA,
    // design: GEOSTRATEGISTS_DESIGN_DATA,
    // conclusion: GEOSTRATEGISTS_CONCLUSION_DATA,
  },
};

const PLENTY_ONE_INTRO_DATA: IntroData = {
  type: WorkSectionType.INTRO,
  sideBarData: { label: 'Intro', link: WorkSectionType.INTRO },
  title: 'PlentyONE / E-commerce website editor for merchants',
  description: {
    text: 'Designing the visual shop builder for an all-in-one e-commerce ERP, so that merchants can build and manage their online store without leaving their ecosystem and without writing a single line of code.',
    chips: ['E-commerce', 'ERP', 'B2B'],
  },
  imageSection: {
    imageUrls: ['assets/images/selected_1.png'],
    backGroundColor: '#062633',
  },
  introTableData: [
    {
      label: 'Product',
      value:
        "PlentyONE Shop Editor, a visual website builder built into PlentyONE, one of Germany's leading all-in-one e-commerce ERP platforms trusted by thousands of merchants and brands across Europe",
    },
    { label: 'Role', value: 'UX Designer (end-to-end)' },
    { label: 'Team', value: 'UX Designer, PMs, TLM, Developers' },
    { label: 'Target audience', value: 'E-commerce merchants building and managing their online shop' },
    { label: 'Platform', value: 'Desktop-focused, tablets' },
  ],
};

const PLENTY_ONE_PROBLEM_DATA: ProblemData = {
  type: WorkSectionType.PROBLEM,
  sideBarData: { label: 'Problem', link: WorkSectionType.PROBLEM },
  title: {
    text: 'Problem',
    descriptions: [
      {
        text: "I had a pleasure working for PlentyONE, which is one of Germany's leading all-in-one e-commerce ERP platforms, helping thousands of merchants across Europe manage their products, orders, inventory and sales channels in one place.",
      },
      {
        text: 'Every merchant also needs an online shop. The existing ShopBuilder (legacy tool for building an online shop) had served that role for years, but it was showing its age: a cluttered and outdated interface with settings scattered across a large, complex platform.',
      },
      {
        text: 'The decision was made to replace it with a new PWA-based Shop Editor, built to deliver:',
      },
      {
        isList: true,
        text: 'Clean, intuitive, useful editing experience merchants can use independently',
      },
      {
        isList: true,
        text: 'Unified place to manage shop settings without hunting across the platform',
      },
      {
        isList: true,
        text: 'Fast and modern online shop with no-code tools for merchants and full flexibility for those who want to go further',
      },
    ],
  },
  footerImageUrl: 'assets/images/plenty_problem_1.png',
};

const PLENTY_ONE_PROCESS_DATA: ProcessData = {
  type: WorkSectionType.PROCESS,
  sideBarData: { label: 'Process', link: WorkSectionType.PROCESS },
  title: 'Process',
  processTableData: [
    {
      label: 'Kick-off',
      value:
        'Every feature started with a proper kick-off, structured discussion with the PM and key stakeholders to align on goals, define scope and identify open questions. From there I created a research plan and estimated timeline to ensure the design work aligned with the development schedule. The overall approach followed Design Thinking principles, empathising with merchants, defining problems and goals clearly, ideating solutions and validating direction before moving forward.',
    },
    {
      label: 'Research',
      value:
        'Research to every feature project was done in close collaboration with the responsible PM and typically included various activities, such as competitor analysis, CJM, merchant feedback, analysis of the existing ShopBuilder, etc. This gave us a practical understanding under time constrains of what merchants needed without slowing down the pace of delivery.',
    },
    {
      label: 'Design',
      value:
        'From research, we moved into ideation and design phase, iterating through concepts and presenting results in regular review meetings with the team. Ongoing UX consultancy was part of the process throughout, with weekly syncs and additional touch points when needed. I was responsible designer for this area, so my other important task was to look over the product quality.',
    },
    {
      label: 'Handoff',
      value:
        'Handoffs to developers were presented in a detailed way with documented/annotated Figma files with thorough flow descriptions to ensure nothing was lost in translation.',
    },
  ],
  imageSection: {
    images: [
      {
        url: 'assets/images/plenty_process_1.png',
      },
      {
        url: 'assets/images/plenty_process_2.png',
      },
      {
        url: 'assets/images/plenty_process_3.png',
      },
    ],
    description:
      'Parts of competitor analysis early on in the process, to identify the best way for adding blocks, block settings and multicolumn layout.',
  },
};

const PLENTY_ONE_DESIGN_DATA: DesignData = {
  type: WorkSectionType.DESIGN,
  sideBarData: { label: 'Design', link: WorkSectionType.DESIGN },
  title: {
    text: 'Design decisions',
    descriptions: [
      {
        text: 'Shop Editor was being built from scratch, which meant every interaction pattern and panel, every flow needed to be designed and validated from the ground up with ability to scale further. Below is a selection of some selected features I worked on throughout the project. ',
      },
    ],
  },
  designDecisions: [
    {
      backGroundColor: '#E3E3E3',
      decisionImageUrls: ['assets/images/plenty_decisions_1_1.png', 'assets/images/plenty_decisions_1_2.png'],
      title: {
        text: 'Adding blocks and multicolumn layout',
        descriptions: [
          {
            text: 'For merchants building their shop, adding content to a page should feel effortless. The block system is the foundation of that experience, giving merchants access to a library of pre-designed content templates they can browse, select and place on any page without technical knowledge.',
          },
          {
            text: 'Block picker was designed to make available templates immediately visible and easy to compare, with the system designed to scale as new blocks are added over time.',
          },
          {
            text: 'Multicolumn support extended this further, giving merchants the ability to place blocks side by side and create richer, more flexible page layouts. Designing this without native drag and drop required a considered workaround that kept the experience intuitive despite the technical constraints.',
          },
        ],
      },
    },
    {
      backGroundColor: '#E3E3E3',
      decisionImageUrls: ['assets/images/plenty_decisions_2_1.png', 'assets/images/plenty_decisions_2_2.png'],
      title: {
        text: 'Editing blocks and selecting images',
        descriptions: [
          {
            text: 'Before, merchants who wanted to edit block content had to work directly with JSON that most merchants had no experience with and no interest in learning.',
          },
          {
            text: 'The block settings panel replaced that entirely. Triggered by clicking the edit button on any block toolbar, a side panel opens with an intuitive input form tailored to the content of that specific block. ',
          },
          {
            text: 'Merchants can manipulate various settings, such as edit and align text, manage images (including uploading directly from their device or selecting from media library), configure buttons and control spacing through margin/padding controls, etc.',
          },
          {
            text: 'The goal was to give merchants full control over their content without exposing a single line of code.',
          },
        ],
      },
    },
    {
      backGroundColor: '#E3E3E3',
      decisionImageUrls: ['assets/images/plenty_decisions_3_1.png', 'assets/images/plenty_decisions_3_2.png'],
      title: {
        text: 'Product category and detail pages',
        descriptions: [
          {
            text: "Product category and detail pages are the most business-critical part of any online shop, they're where merchants present their products and where purchase decisions are made. Making them editable inside the Shop Editor was one of the most complex features of the project.",
          },
          {
            text: "Merchants can now customise their category pages (adjusting filters, sorting options, product card presentation) and their product detail pages (configuring item cards, images and the arrangement of key product information). Elements can be rearranged, switched on or off and tailored to match the merchant's brand and priorities.",
          },
          {
            text: 'Crucially, all of this stays in sync with the data merchants have already configured inside terra. No duplication or manual re-entry, the ERP and the shop editor are connected. And the design was built with future depth in mind, leaving room for even more granular customisation as the product evolves.',
          },
        ],
      },
    },
    {
      backGroundColor: '#E3E3E3',
      decisionImageUrls: ['assets/images/plenty_decisions_4_1.png', 'assets/images/plenty_decisions_4_2.png'],
      title: {
        text: 'Pages and settings',
        descriptions: [
          {
            text: 'Managing a shop means more than designing individual pages, merchants need a clear way to oversee their entire site structure and control global configurations in one place.',
          },
          {
            text: 'Pages section gives merchants a dedicated space to manage all pages on their website, e.g. navigating between them, creating new ones and configuring page-specific settings including SEO directly within the editor.',
          },
          {
            text: 'Settings panel presented a real information architecture challenge. With a large number of configurable options covering both visual and functional aspects of the shop, the main design work was in finding a logical structure that made everything discoverable without overwhelming the merchant.',
          },
        ],
      },
    },
    {
      backGroundColor: '#E3E3E3',
      decisionImageUrls: ['assets/images/plenty_decisions_5_1.png', 'assets/images/plenty_decisions_5_2.png'],
      title: {
        text: 'Custom code',
        descriptions: [
          {
            text: 'Not every merchant needs to write code, but some do. Custom code is the feature that bridges the gap between the no-code editor and developer flexibility.',
          },
          {
            text: 'Merchants and developers can add CSS and JavaScript snippets directly within the editor, as well as manage custom meta tags and external scripts and styles. ',
          },
          {
            text: 'Each snippet can be individually activated or deactivated for the shop, giving users precise control without touching the core codebase.',
          },
          {
            text: 'While most of the Shop Editor is built for merchants with no technical background, custom code was designed with a more technical audience in mind, agencies and developers who need that extra layer of control without leaving the platform.',
          },
        ],
      },
    },
  ],
};

const PLENTY_ONE_TESTIMONIALS_DATA: TestimonialsData = {
  type: WorkSectionType.TESTIMONIALS,
  sideBarData: { label: 'Design', link: WorkSectionType.TESTIMONIALS },
  title: 'Testimonials',
  testimonials: PLENTY_ONE_TESTIMONIALS,
};

const PLENTY_ONE_CONCLUSION_DATA: ConclusionData = {
  type: WorkSectionType.CONCLUSION,
  sideBarData: { label: 'Conclusion', link: WorkSectionType.CONCLUSION },
  title: 'Conclusions',
  conclusionTableData: [
    {
      title: 'Outcomes',
      descriptions: [
        'Shop Editor shipped and is now live, used by many merchants across Europe, including well-known brands that trust PlentyONE as the backbone of their e-commerce operations.',
        'Adoption has been strong since launch, with merchants across different technical backgrounds successfully building and managing their online shops independently within the platform. And I believe that’s only beginning of a successful story.',
        'The work covered the full editor experience from the ground up and each feature was designed to work as part of a coherent whole, giving merchants a tool that grows with their needs. ',
        "Despite significant technical, resource and time constraints, the team managed to deliver product that merchants genuinely find useful (and that's what matters most).",
      ],
    },
    {
      title: 'Reflections',
      descriptions: [
        "A few things I'd do differently.",
        "- More direct contact with merchants throughout the process would have strengthened the work. More usability testing and direct user conversations would have surfaced edge cases earlier and given us more confidence before handoff. Lack of time was the decisive factor that limited this and it's something I'd push harder to protect in future projects",
        "- I'd also invest more time upfront in defining the exact scope for each feature. Working in a large product with many moving parts, scope had a tendency to shift, so clearer boundaries set earlier would have made both the design and development process smoother.",
        "- I'd push for a dedicated post-project retro, structured moment for the team to reflect together on what worked, what didn't and what to carry into the next project. That kind of shared reflection tends to compound over time.",
      ],
    },
  ],
};

const PLENTY_ONE_PREVIEW_DATA: WorkPreviewData = {
  navigationLink: 'plenty_one',
  sectionData: {
    intro: PLENTY_ONE_INTRO_DATA,
    problem: PLENTY_ONE_PROBLEM_DATA,
    process: PLENTY_ONE_PROCESS_DATA,
    design: PLENTY_ONE_DESIGN_DATA,
    testimonial: PLENTY_ONE_TESTIMONIALS_DATA,
    conclusion: PLENTY_ONE_CONCLUSION_DATA,
  },
};

export const WORK_ITEMS: WorkPreviewItem[] = [
  {
    title: 'PlentyONE - All-in-one ERP for e-commerce',
    description:
      'Mobile platform designed to bridge the gap between shelter dogs and new home. Main objectives that I set to myself was to streamline dog discovery, adoption journey and donation process, maintain a well-polished UI.',
    backgroundColor: '#062633',
    imageUrls: [
      {
        url: 'assets/images/selected_1.png',
      },
    ],
    chips: ['App', 'Social good', 'Practice'],
    previewData: PLENTY_ONE_PREVIEW_DATA,
  },
  {
    title: 'Geostrategists - Platform for geopolitical experts',
    description:
      'Mobile platform designed to bridge the gap between shelter dogs and new home. Main objectives that I set to myself was to streamline dog discovery, adoption journey and donation process, maintain a well-polished UI.',
    backgroundColor: '#166054',
    imageUrls: [
      {
        url: 'assets/images/selected_2_1.png',
      },
      {
        url: 'assets/images/selected_2_2.png',
      },
    ],
    chips: ['App', 'Social good', 'Practice'],
    previewData: GEOSTRATEGISTS_PREVIEW_DATA,
  },
  {
    title: 'Lapunzel - Ukrainian pet cosmetics shop',
    description:
      'Mobile platform designed to bridge the gap between shelter dogs and new home. Main objectives that I set to myself was to streamline dog discovery, adoption journey and donation process, maintain a well-polished UI.',
    backgroundColor: '#FCE64D',
    imageUrls: [
      {
        url: 'assets/images/selected_3_1.png',
      },
      {
        url: 'assets/images/selected_3_2.png',
      },
      {
        url: 'assets/images/selected_3_3.png',
      },
      {
        url: 'assets/images/selected_3_4.png',
      },
    ],
    chips: ['Website', 'E-commerce', 'Mobile-first'],
    previewData: LAPUNZEL_PREVIEW_DATA,
  },
];

export const WORK_ITEMS_MAP = new Map<string, WorkPreviewItem>(WORK_ITEMS.map(item => [item.previewData.navigationLink, item]));
