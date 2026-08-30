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
        },{id: "news-one-paper-accepted-at-ieee-dcc-2025",
          title: '🎉 One paper accepted at IEEE DCC 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-at-ieee-icassp-2025",
          title: '🎉 One paper accepted at IEEE ICASSP 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-at-ieee-icme-2025",
          title: '🎉 One paper accepted at IEEE ICME 2025.',
          description: "",
          section: "News",},{id: "news-tutorial-delivered-on-generative-face-video-coding-and-avatars-selected-recent-mpeg-efforts-in-human-representation-standards-at-icme-2025",
          title: '🎤 Tutorial delivered on Generative Face Video Coding and Avatars: Selected Recent MPEG...',
          description: "",
          section: "News",},{id: "news-️-elected-as-a-member-of-the-ieee-circuits-and-systems-society-cas-multimedia-systems-and-applications-technical-committee-msa-tc",
          title: '🎖️ Elected as a member of the IEEE Circuits and Systems Society (CAS)...',
          description: "",
          section: "News",},{id: "news-invited-talk-delivered-on-avatars-in-motion-representation-compression-and-quality-evaluation-at-mmsp-2025-thematic-school",
          title: '🎤 Invited talk delivered on Avatars in Motion: Representation, Compression and Quality Evaluation...',
          description: "",
          section: "News",},{id: "news-invited-talk-delivered-from-paper-to-posters-designing-and-presenting-effective-scientific-posters-at-mmsp-2025-thematic-school",
          title: '🎤 Invited talk delivered From Paper to Posters: Designing and Presenting Effective Scientific...',
          description: "",
          section: "News",},{id: "news-️-elected-as-a-member-of-the-ieee-circuits-and-systems-society-cas-multimedia-systems-and-applications-technical-committee-msa-tc",
          title: '🎖️ Elected as a member of the IEEE Circuits and Systems Society (CAS)...',
          description: "",
          section: "News",},{id: "news-tutorial-delivered-on-ultra-low-bitrate-video-conferencing-with-generative-face-video-coding-from-research-to-standardization-at-vcip-2025",
          title: '🎤 Tutorial delivered on Ultra-Low Bitrate Video Conferencing with Generative Face Video Coding:...',
          description: "",
          section: "News",},{id: "news-️-elected-as-a-member-of-the-ieee-circuits-and-systems-society-cas-visual-signal-processing-and-communications-technical-committee-vspc-tc",
          title: '🎖️ Elected as a member of the IEEE Circuits and Systems Society (CAS)...',
          description: "",
          section: "News",},{id: "news-️-elevated-to-the-grade-of-ieee-senior-member",
          title: '🎖️ Elevated to the grade of IEEE Senior Member.',
          description: "",
          section: "News",},{id: "news-paper-accepted-in-ieee-transactions-on-services-computing-special-issue-on-metaverse-services",
          title: '📘 Paper accepted in IEEE Transactions on Services Computing, Special Issue on Metaverse...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-ieee-icme-2026",
          title: '🎉 Two papers accepted at IEEE ICME 2026.',
          description: "",
          section: "News",},{id: "news-paper-accepted-in-ieee-computer-graphics-amp-amp-applications-special-issue-on-state-of-the-art-in-computer-graphics-and-applications-in-the-asia-pacific-region",
          title: '📘 Paper accepted in IEEE Computer Graphics &amp;amp;amp; Applications, Special Issue on State...',
          description: "",
          section: "News",},{id: "news-paper-accepted-in-ieee-computer-graphics-amp-amp-applications-special-issue-on-3d-web-technologies",
          title: '📘 Paper accepted in IEEE Computer Graphics &amp;amp;amp; Applications, Special Issue on 3D...',
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
