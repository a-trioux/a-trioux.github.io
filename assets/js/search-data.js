// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-invited-talks-amp-tutorials",
          title: "Invited talks &amp; Tutorials",
          description: "Tutorials and invited talks in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-standardization-activities",
          title: "Standardization activities",
          description: "Contributions to MPEG/JVET standardization in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/standards/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "news-paper-accepted-in-ieee-transactions-on-services-computing-special-issue-on-metaverse-services",
          title: '📘 Paper accepted in IEEE Transactions on Services Computing, Special Issue on Metaverse...',
          description: "",
          section: "News",},{id: "news-tutorial-delivered-on-generative-face-video-coding-and-avatars-selected-recent-mpeg-efforts-in-human-representation-standards-at-icme-2025",
          title: '🎤 Tutorial delivered on Generative Face Video Coding and Avatars: Selected Recent MPEG...',
          description: "",
          section: "News",},{id: "news-tutorial-delivered-on-ultra-low-bitrate-video-conferencing-with-generative-face-video-coding-from-research-to-standardization-at-vcip-2025",
          title: '🎤 Tutorial delivered on Ultra-Low Bitrate Video Conferencing with Generative Face Video Coding:...',
          description: "",
          section: "News",},{id: "news-ieee-sm",
          title: 'Ieee_sm',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/IEEE_SM/";
            },},{id: "news-two-papers-accepted-at-ieee-icme-2026",
          title: '🎉 Two papers accepted at IEEE ICME 2026.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
