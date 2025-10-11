// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["github.com", "delightrewards.com"],
  },
  async redirects() {
    return [
      {
        source: '/twitch',
        destination: 'https://twitch.tv/roxcodes',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/jctwcBa',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/roxworks',
        permanent: true,
      },
      {
        source: '/merch',
        destination: 'https://merch.streamelements.com/roxkstar74',
        permanent: true,
      },
      {
        source: '/ideas',
        destination: 'https://vintage-smile-604.notion.site/Goal-Actually-making-20k-in-December-249dee93d7974e5389f8f3e25e70802c',
        permanent: true,
      },
      {
        source: '/today',
        destination: 'https://sharing.clickup.com/b/h/6-170900334-2/e7dcf84a22263ae',
        permanent: true,
      },
      {
        source: '/status',
        destination: 'https://trello.com/b/wDGlphGP/project-status',
        permanent: true,
      },
      {
        source: '/extension',
        destination: 'https://chrome.google.com/webstore/detail/rox-mandatory-friendship/ikcfiihgdijejljabhocppgnpkjcmdic',
        permanent: true,
      },
      {
        source: '/umso',
        destination: 'https://www.umso.com/?via=rox',
        permanent: true,
      },
      {
        source: '/daily',
        destination: 'https://sharing.clickup.com/b/h/6-170900334-2/e7dcf84a22263ae',
        permanent: true,
      },
      {
        source: '/goals',
        destination: 'https://www.youtube.com/watch?v=oaIWDUsxx6Y',
        permanent: true,
      },
      {
        source: '/tiktok',
        destination: 'https://tiktok.com/@roxcodes',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/roxcodes',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/roxcodes',
        permanent: true,
      },
      {
        source: '/ig',
        destination: 'https://instagram.com/roxcodes',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://youtube.com/@roxcodes',
        permanent: true,
      },
      {
        source: '/yt',
        destination: 'https://youtube.com/@roxcodes',
        permanent: true,
      },
      {
        source: '/future',
        destination: 'https://www.youtube.com/watch?v=CIsrhoVSc4',
        permanent: true,
      },
      {
        source: '/leaving',
        destination: 'https://youtu.be/xP3m27Pl5eU',
        permanent: true,
      },
      {
        source: '/strawberry',
        destination: 'https://www.reddit.com/r/ProgrammerHumor/comments/q0ejpv/strawberry_js_best_js/',
        permanent: true,
      },
      {
        source: '/clickup',
        destination: 'https://clickup.com?fp_ref=rox39',
        permanent: true,
      },
      {
        source: '/clipbot-clickup',
        destination: 'https://sharing.clickup.com/b/h/6-122357101-2/3ffdfd2ce933268',
        permanent: true,
      },
      {
        source: '/start-live-coding',
        destination: 'https://www.youtube.com/watch?v=-G3bpS5zJ6g',
        permanent: true,
      },
      {
        source: '/playlists',
        destination: 'https://open.spotify.com/user/22hq7oyd3taofvqk26w4socna/playlists',
        permanent: true,
      },
      {
        source: '/betterso',
        destination: 'https://www.reddit.com/r/Twitch/comments/pwegd8/better_so_for_nightbot/',
        permanent: true,
      },
      {
        source: '/chat',
        destination: 'https://cal.com/roxcodes/secret',
        permanent: true,
      },
      {
        source: '/call',
        destination: 'https://app.usemotion.com/meet/rox-codes/chat',
        permanent: true,
      },
      {
        source: '/important',
        destination: 'https://usemotion.com/meet/rox-codes/important',
        permanent: true,
      },
      {
        source: '/anytime',
        destination: 'https://usemotion.com/meet/rox-codes/anytime',
        permanent: true,
      },
      {
        source: '/baserow',
        destination: 'https://bit.ly/3O5LBPO',
        permanent: true,
      },
      {
        source: '/payble',
        destination: 'https://play.google.com/store/apps/details?id=com.payble.payble',
        permanent: true,
      },
      {
        source: '/fusion',
        destination: 'https://fusionauth.io/download?utm_source=Twitch&utm_medium=roxkstar74&utm_campaign=Streaming+Campaign&utm_content=Manual+Conversion',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/roxkstar74',
        permanent: true,
      },
      {
        source: '/jenni',
        destination: 'https://jenni.ai/?utm_source=rox',
        permanent: true,
      },
      {
        source: '/book',
        destination: 'https://www.amazon.com/dp/B0BPPRG3K8/ref=sr_1_7?crid=22W5A1KCI5OMT&keywords=The+Summit+of+shadows&qid=1670699320&sprefix=the+summit+of+shadows%2Caps%2C596&sr=8-7&tag=roxkstar74-20',
        permanent: true,
      },
      {
        source: '/buildmyideas',
        destination: 'https://tally.so/r/wbZJL0',
        permanent: true,
      },
      {
        source: '/ultimatefriendship',
        destination: 'https://app.thumbnailtest.com/?checkout_id=override',
        permanent: true,
      },
      {
        source: '/screenstudio',
        destination: 'https://screenstudio.lemonsqueezy.com/?aff=LEDJV',
        permanent: true,
      },
      {
        source: '/call',
        destination: 'https://cal.com/roxcodes/secret',
        permanent: true,
      },
      {
        source: '/testvid',
        destination: 'https://www.youtube.com/shorts/vM4yExC4wuQ',
        permanent: true,
      },
      {
        source: '/podcast',
        destination: 'https://anchor.fm/s/f3804e24/podcast/rss',
        permanent: true,
      },
      {
        source: '/pod',
        destination: 'https://anchor.fm/s/f3804e24/podcast/rss',
        permanent: true,
      },
      {
        source: '/fantasy',
        destination: 'https://www.youtube.com/watch?v=fMRIX9ydDeo',
        permanent: true,
      },
      {
        source: '/dnd',
        destination: 'https://www.youtube.com/watch?v=fMRIX9ydDeo',
        permanent: true,
      },
      {
        source: '/music',
        destination: 'https://www.youtube.com/watch?v=fMRIX9ydDeo',
        permanent: true,
      },
      {
        source: '/forbiddenisland',
        destination: 'https://www.youtube.com/watch?v=fMRIX9ydDeo',
        permanent: true,
      },
      {
        source: '/frontendTest',
        destination: 'https://vintage-smile-604.notion.site/Rox-frontend-test-f18d522e15fb4adc81090470cbf17450?pvs=4',
        permanent: true,
      },
      {
        source: '/pme',
        destination: 'https://docs.google.com/spreadsheets/d/1yzZrraZTImvHsp7HfgQqHlmbiGnPX7GR9PPVcjYNle0/edit?gid=0#gid=0',
        permanent: true,
      },
      {
        source: '/flightcast-demo',
        destination: 'https://www.loom.com/share/85b79ba14ce644a5a056f662da53ce8c',
        // oldDestination: 'https://www.loom.com/share/0aa03aa036db4d7d881affba276d5b1a',
        permanent: true,
      },
      {
        source: '/fc-demo',
        destination: 'https://www.loom.com/share/85b79ba14ce644a5a056f662da53ce8c',
        // destination: 'https://www.loom.com/share/004c6b92762947838c877ecec2fd878f',
        // destination: 'https://www.loom.com/share/d8db2960fa404258a444c2d9b9a91d56',
        //oldDestination: 'https://www.loom.com/share/0aa03aa036db4d7d881affba276d5b1a',
        permanent: true,
      },
      
      {
        source: '/fc-demo-short',
        destination: 'https://www.loom.com/share/004c6b92762947838c877ecec2fd878f',
        permanent: true,
      },
      {
        source: '/fc-demo-old',
        destination: 'https://www.loom.com/share/0aa03aa036db4d7d881affba276d5b1a',
        permanent: true,
      },
      {
        source: '/pm',
        destination: 'https://cal.com/roxcodes/pm-chat',
        //oldDestination: 'https://www.loom.com/share/0aa03aa036db4d7d881affba276d5b1a',
        permanent: true,
      }
    ]
  },
};
export default config;
