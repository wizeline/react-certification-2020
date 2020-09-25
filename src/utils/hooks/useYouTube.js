import { useState, useEffect } from "react";

// const API_URL = "https://www.googleapis.com/youtube/v3/videos";

const useYouTubeAPI = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    async function getYouTubeVideos() {
      try {
        // const fetchVideos = await fetch(API_URL);
        // const fetchVideosResponse = await response.json();
        const response = {
          kind: "youtube#videoListResponse",
          etag: "c9-f21qh32kDl0khsZO115v7HtA",
          items: [
            {
              kind: "youtube#video",
              etag: "QVBwX_DbiDtM7ZEq-EowBXR3DUw",
              id: "_AXx2XSI4Kw",
              snippet: {
                publishedAt: "2020-09-24T13:05:37Z",
                channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
                title: "Unboxing the Apple Mask",
                description:
                  "Here it is.. The official Apple mask.\nLatercase - https://latercase.com\n\nFOLLOW ME IN THESE PLACES FOR UPDATES\r\nTwitter - http://twitter.com/unboxtherapy\r\nFacebook - http://facebook.com/lewis.hilsenteger\r\nInstagram - http://instagram.com/unboxtherapy",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/_AXx2XSI4Kw/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/_AXx2XSI4Kw/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/_AXx2XSI4Kw/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/_AXx2XSI4Kw/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/_AXx2XSI4Kw/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "Unbox Therapy",
                tags: [
                  "unbox therapy",
                  "unboxtherapy",
                  "tech",
                  "technology",
                  "gadgets",
                  "gadget",
                  "unboxing",
                  "review",
                  "unbox",
                  "therapy",
                  "new",
                  "youtube",
                  "apple",
                  "apple mask",
                  "iphone",
                  "iphone 12",
                  "apple iphone",
                  "smartphone",
                  "smartphones",
                  "2020",
                  "smartphone 2020",
                  "smartphones 2020",
                ],
                categoryId: "28",
                liveBroadcastContent: "none",
                defaultLanguage: "en",
                localized: {
                  title: "Unboxing the Apple Mask",
                  description:
                    "Here it is.. The official Apple mask.\nLatercase - https://latercase.com\n\nFOLLOW ME IN THESE PLACES FOR UPDATES\r\nTwitter - http://twitter.com/unboxtherapy\r\nFacebook - http://facebook.com/lewis.hilsenteger\r\nInstagram - http://instagram.com/unboxtherapy",
                },
                defaultAudioLanguage: "en",
              },
              contentDetails: {
                duration: "PT15M24S",
                dimension: "2d",
                definition: "hd",
                caption: "false",
                licensedContent: true,
                contentRating: {},
                projection: "rectangular",
              },
              statistics: {
                viewCount: "2312174",
                likeCount: "86888",
                dislikeCount: "6763",
                favoriteCount: "0",
                commentCount: "13653",
              },
              player: {
                embedHtml:
                  '\u003ciframe width="480" height="270" src="//www.youtube.com/embed/_AXx2XSI4Kw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\u003e\u003c/iframe\u003e',
              },
            },
            {
              kind: "youtube#video",
              etag: "8IUp7XUg9tsktFssr783-kYqkNc",
              id: "PrTMLpjVZ84",
              snippet: {
                publishedAt: "2020-09-24T18:15:47Z",
                channelId: "UCNdpD9V0PIrH1glUJ6RG4-w",
                title: "We Asked Strangers To Guess The Fake FaZe Member",
                description:
                  '🔥 NEW FaZe Clan Merch: http://fazeclan.com\n🔴 Watch us live: http://twitch.tv/team/faze\n\n👻FaZe Clan on Snapchat: https://www.snapchat.com/discover/Faze_Clan/9594979179\n💻 FaZe Clan on Twitter: http://twitter.com/FaZeClan\n📲 FaZe Clan on Instagram: http://instagram.com/fazeclan\n😄 FaZe Clan on Facebook: http://facebook.com/TheFaZeClan\n🎮 FaZe Clan Esports Update on Twitter: http://twitter.com/FaZeUpdate\n👾 FaZe Clan on Discord: https://discord.com/invite/faze\n 😂 FaZe Clan GIPHY Page  https://giphy.com/fazeclan\n\nThe Energy Drink for Gamers by GFUEL\n🥤 http://gfuel.com/faze\n🤑 Discount code: "FAZE"\n\nThe Headsets, Keyboards & Mice we use by STEELSERIES:\n💻 https://steelseries.com/esports/faze-clan\n\nThe Controllers we use by SCUF GAMING\n🎮 http://scuf.co/faze\n🤑 Discount code: "FAZE"\n\n#fazeclan #faze #faze2020',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/PrTMLpjVZ84/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/PrTMLpjVZ84/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/PrTMLpjVZ84/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/PrTMLpjVZ84/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/PrTMLpjVZ84/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "FaZe Clan",
                tags: [
                  "FaZe",
                  "FaZeClan",
                  "FaZe Clan",
                  "FaZe Rain",
                  "FaZe Apex",
                  "FaZe Jev",
                  "FaZe Banks",
                  "FaZe Adapt",
                  "FaZe Temperrr",
                  "FaZe Rug",
                  "FaZe NICKMERCS",
                  "FaZe House",
                  "FaZe Kay",
                  "faze jarvis",
                  "Faze sway",
                  "faze mongraal",
                  "faze fortnite",
                  "fazeclan fortnite",
                  "faze h1ghsky1",
                  "faze 2020",
                  "faze clan 2020",
                  "guess that faze member",
                  "faze swagg",
                  "swagg",
                  "faze clan game show",
                  "who is in faze clan",
                  "faze clan members",
                  "faze members",
                  "faze clan channel",
                  "faze youtube channel",
                  "faze youtube channels",
                  "fake faze member",
                ],
                categoryId: "20",
                liveBroadcastContent: "none",
                localized: {
                  title: "We Asked Strangers To Guess The Fake FaZe Member",
                  description:
                    '🔥 NEW FaZe Clan Merch: http://fazeclan.com\n🔴 Watch us live: http://twitch.tv/team/faze\n\n👻FaZe Clan on Snapchat: https://www.snapchat.com/discover/Faze_Clan/9594979179\n💻 FaZe Clan on Twitter: http://twitter.com/FaZeClan\n📲 FaZe Clan on Instagram: http://instagram.com/fazeclan\n😄 FaZe Clan on Facebook: http://facebook.com/TheFaZeClan\n🎮 FaZe Clan Esports Update on Twitter: http://twitter.com/FaZeUpdate\n👾 FaZe Clan on Discord: https://discord.com/invite/faze\n 😂 FaZe Clan GIPHY Page  https://giphy.com/fazeclan\n\nThe Energy Drink for Gamers by GFUEL\n🥤 http://gfuel.com/faze\n🤑 Discount code: "FAZE"\n\nThe Headsets, Keyboards & Mice we use by STEELSERIES:\n💻 https://steelseries.com/esports/faze-clan\n\nThe Controllers we use by SCUF GAMING\n🎮 http://scuf.co/faze\n🤑 Discount code: "FAZE"\n\n#fazeclan #faze #faze2020',
                },
                defaultAudioLanguage: "en",
              },
              contentDetails: {
                duration: "PT10M7S",
                dimension: "2d",
                definition: "sd",
                caption: "true",
                licensedContent: true,
                contentRating: {},
                projection: "rectangular",
              },
              statistics: {
                viewCount: "343561",
                likeCount: "27410",
                dislikeCount: "324",
                favoriteCount: "0",
                commentCount: "1337",
              },
              player: {
                embedHtml:
                  '\u003ciframe width="480" height="270" src="//www.youtube.com/embed/_AXx2XSI4Kw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\u003e\u003c/iframe\u003e',
              },
            },
            {
              kind: "youtube#video",
              etag: "wnni4wwZXsXEGyNejuLurjl3ipE",
              id: "3NRriVUjErM",
              snippet: {
                publishedAt: "2020-09-24T20:00:01Z",
                channelId: "UCjgpFI5dU-D1-kh9H1muoxQ",
                title: "REAL IRON MAN REPULSOR + GIVEAWAY!",
                description:
                  "Get Honey for FREE and start saving money today ► http://joinhoney.com/hacksmith\nThanks Honey for sponsoring this video! \nEnter the Giveaway ► https://forms.gle/ZobtfubkFzkU626AA\n\nTry Altium Designer for Free and start designing your own PCBs ► https://www.altium.com/yt/TheHacksmith\nView & share electronic designs online ►https://www.altium.com/viewer/\nOur PCB supplier ► https://jlcpcb.com/  get PCB + SMT Assembly from $2!\n\nPre-order the MK5 Helmet from Joetoys ► https://joetoyss.com/collections/iron-man-1/products/iron-man-mk5-helmet (and use Honey to get an exclusive coupon!)\n#ad\n\nCheck out Alex Lab's hydrogen based repulsor ► https://www.youtube.com/watch?v=FDVrM929s70\n\nBecome a Hacksmith member get exclusive perks! ► https://www.youtube.com/channel/UCjgpFI5dU-D1-kh9H1muoxQ/join\n►Watch videos early! \n►Project design files (solidworks)\n►Merch Discounts \n►Collaborate with us on our videos \n\nSOCIAL\nWebsite ► http://www.hacksmith.tech\nFacebook ► http://www.facebook.com/thehacksmith\nInstagram ► http://www.instagram.com/thehacksmith\nTwitter ► http://twitter.com/thehacksmith\nPatreon ► http://www.patreon.com/thehacksmith\nDiscord ► https://discordapp.com/invite/thehacksmith \nMerch ► https://www.hacksmith.store\n\nCHAPTERS:  \n0:00 Intro\n0:21 James Calls Out Elon Musk\n1:17 Build Intro\n2:41 What Is Iron Mans Gauntlet Anyway?\n3:31 James Talks High Powered Lasers\n4:57 How To Win The Iron Man Helmet\n5:50 Bogdan Designs The PCB\n7:44 James Assembles The Cooling System\n10:13 The Gauntlet Arrives\n11:08 Final Assembly\n13:24 The Finished Product\n13:54 Testing The Gauntlet\n17:18 Outro\n\nMUSIC:\nJump Jive And Sing The Elvis Schoenbergs Orchestra\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nThunder by Blakewolf\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nSirens by Your Neighbors\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nStrain by DWANINUNGKA\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nI’m Gonna Fly by Todd Herfindal\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nDefending The Future by Kelty Woods\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nSpaghetti And Rock N Roll by Your Neighbors\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nLift Me Higher by Bamtone\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nSOFTWARE:\nVideo Review / Collaboration ► http://r.frame.io/pZq3N\nVideo Editing ► Adobe Premiere \nVFX ► https://productioncrate.grsm.io/Hacksmith\nCAD ► Solidworks \nCAM ► Autodesk HSM http://bit.ly/HSMworks\n\nCAMERA GEAR:\nHighspeed Cam - Chronos 1.4 ► http://bit.ly/chronosCam\nMain shooter - Panasonic GH5s ► https://bhpho.to/2Fjd80N \nPhone - Samsung S10  ► https://bhpho.to/2N8FOh8\nCamcorder - Sony Handycam ► https://bhpho.to/2FDnq81 \nAction Cam - GoPro ► https://bhpho.to/2FxXDC4 \nSteadicam - Removu K1 ► https://bhpho.to/2N9lDQq \nMain mic - Sennheiser ► https://bhpho.to/2DsR8ec\nBendy Tripod ► https://bhpho.to/2FyLNb0 \nMain Tripods - old second hand Manfrotto tripods no longer sold. \nStudio Light - Luxli ► https://bhpho.to/2N9SPav\n\nTOOLS / MACHINES: \nCNC Waterjet Cutter ► http://bit.ly/wazerJet\nCNC Plasma Cutter ► http://bit.ly/EMTplasma\n3d Printers ► http://bit.ly/H1Printer\nCNC Mill ►  http://bit.ly/PCNC440\nCNC Lathe ► http://bit.ly/15LSlantPro\nLaser Cutter - Gweike LG900N 80W ► http://lmgtfy.com/?q=lg900n \n3d Scanner ► http://amzn.to/2pwbvTu\nDrills, drivers, grinders, saws, etc ► http://amzn.to/2p9SPJ3 \nMig Welder ► http://bit.ly/MP250iWelder\nTig Welder ► http://bit.ly/Tig200Welder\nQuiet Air Compressor ► http://bit.ly/38zVKzB\nDesktop PC ► https://youtu.be/gSbt3LK8hCs \n\nPurchases made through some store links may provide some compensation to Hacksmith.\n\nWARNING: THESE VIDEOS ARE FOR ENTERTAINMENT PURPOSES ONLY. PERSONAL USE OF VIDEO CONTENT IS AT YOUR OWN RISK. THE HACKSMITH IS A TRAINED PROFESSIONAL WHO KNOWS EXACTLY WHAT HE'S DOING. EXCEPT WHEN HE DOESN'T. DO NOT ATTEMPT TO RECREATE OR RE-ENACT ANYTHING SHOWN IN THESE VIDEOS.\n\n#makeitreal #ironman",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/3NRriVUjErM/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/3NRriVUjErM/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/3NRriVUjErM/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/3NRriVUjErM/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/3NRriVUjErM/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "the Hacksmith",
                tags: [
                  "thehacksmith",
                  "hacksmith",
                  "Ironman",
                  "stark industries",
                  "make it real",
                  "tony stark",
                  "gauntlet",
                  "superhero",
                  "iron man armour",
                  "jarvis",
                  "marvel comics",
                  "mcu",
                  "avengers",
                  "build",
                  "stark",
                  "science",
                  "laser",
                  "laser beam",
                  "real iron man gauntlet",
                  "repulser",
                  "photon beam",
                  "photon",
                  "helmet",
                  "iron man suit",
                  "arc reactor",
                  "metal",
                  "powerful laser",
                  "experiment",
                  "super powers",
                  "scientist",
                  "styropyro",
                  "real ironman helmet",
                  "armour",
                  "repulsor",
                  "muon beam",
                  "metal iron man gauntlet",
                  "iron man repulsor",
                  "real iron man suit",
                  "iron man",
                ],
                categoryId: "28",
                liveBroadcastContent: "none",
                defaultLanguage: "en",
                localized: {
                  title: "REAL IRON MAN REPULSOR + GIVEAWAY!",
                  description:
                    "Get Honey for FREE and start saving money today ► http://joinhoney.com/hacksmith\nThanks Honey for sponsoring this video! \nEnter the Giveaway ► https://forms.gle/ZobtfubkFzkU626AA\n\nTry Altium Designer for Free and start designing your own PCBs ► https://www.altium.com/yt/TheHacksmith\nView & share electronic designs online ►https://www.altium.com/viewer/\nOur PCB supplier ► https://jlcpcb.com/  get PCB + SMT Assembly from $2!\n\nPre-order the MK5 Helmet from Joetoys ► https://joetoyss.com/collections/iron-man-1/products/iron-man-mk5-helmet (and use Honey to get an exclusive coupon!)\n#ad\n\nCheck out Alex Lab's hydrogen based repulsor ► https://www.youtube.com/watch?v=FDVrM929s70\n\nBecome a Hacksmith member get exclusive perks! ► https://www.youtube.com/channel/UCjgpFI5dU-D1-kh9H1muoxQ/join\n►Watch videos early! \n►Project design files (solidworks)\n►Merch Discounts \n►Collaborate with us on our videos \n\nSOCIAL\nWebsite ► http://www.hacksmith.tech\nFacebook ► http://www.facebook.com/thehacksmith\nInstagram ► http://www.instagram.com/thehacksmith\nTwitter ► http://twitter.com/thehacksmith\nPatreon ► http://www.patreon.com/thehacksmith\nDiscord ► https://discordapp.com/invite/thehacksmith \nMerch ► https://www.hacksmith.store\n\nCHAPTERS:  \n0:00 Intro\n0:21 James Calls Out Elon Musk\n1:17 Build Intro\n2:41 What Is Iron Mans Gauntlet Anyway?\n3:31 James Talks High Powered Lasers\n4:57 How To Win The Iron Man Helmet\n5:50 Bogdan Designs The PCB\n7:44 James Assembles The Cooling System\n10:13 The Gauntlet Arrives\n11:08 Final Assembly\n13:24 The Finished Product\n13:54 Testing The Gauntlet\n17:18 Outro\n\nMUSIC:\nJump Jive And Sing The Elvis Schoenbergs Orchestra\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nThunder by Blakewolf\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nSirens by Your Neighbors\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nStrain by DWANINUNGKA\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nI’m Gonna Fly by Todd Herfindal\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nDefending The Future by Kelty Woods\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nSpaghetti And Rock N Roll by Your Neighbors\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nLift Me Higher by Bamtone\nLicensed from Triple Scoop Music ►\nhttps://triplescoopmusic.com/\n\nSOFTWARE:\nVideo Review / Collaboration ► http://r.frame.io/pZq3N\nVideo Editing ► Adobe Premiere \nVFX ► https://productioncrate.grsm.io/Hacksmith\nCAD ► Solidworks \nCAM ► Autodesk HSM http://bit.ly/HSMworks\n\nCAMERA GEAR:\nHighspeed Cam - Chronos 1.4 ► http://bit.ly/chronosCam\nMain shooter - Panasonic GH5s ► https://bhpho.to/2Fjd80N \nPhone - Samsung S10  ► https://bhpho.to/2N8FOh8\nCamcorder - Sony Handycam ► https://bhpho.to/2FDnq81 \nAction Cam - GoPro ► https://bhpho.to/2FxXDC4 \nSteadicam - Removu K1 ► https://bhpho.to/2N9lDQq \nMain mic - Sennheiser ► https://bhpho.to/2DsR8ec\nBendy Tripod ► https://bhpho.to/2FyLNb0 \nMain Tripods - old second hand Manfrotto tripods no longer sold. \nStudio Light - Luxli ► https://bhpho.to/2N9SPav\n\nTOOLS / MACHINES: \nCNC Waterjet Cutter ► http://bit.ly/wazerJet\nCNC Plasma Cutter ► http://bit.ly/EMTplasma\n3d Printers ► http://bit.ly/H1Printer\nCNC Mill ►  http://bit.ly/PCNC440\nCNC Lathe ► http://bit.ly/15LSlantPro\nLaser Cutter - Gweike LG900N 80W ► http://lmgtfy.com/?q=lg900n \n3d Scanner ► http://amzn.to/2pwbvTu\nDrills, drivers, grinders, saws, etc ► http://amzn.to/2p9SPJ3 \nMig Welder ► http://bit.ly/MP250iWelder\nTig Welder ► http://bit.ly/Tig200Welder\nQuiet Air Compressor ► http://bit.ly/38zVKzB\nDesktop PC ► https://youtu.be/gSbt3LK8hCs \n\nPurchases made through some store links may provide some compensation to Hacksmith.\n\nWARNING: THESE VIDEOS ARE FOR ENTERTAINMENT PURPOSES ONLY. PERSONAL USE OF VIDEO CONTENT IS AT YOUR OWN RISK. THE HACKSMITH IS A TRAINED PROFESSIONAL WHO KNOWS EXACTLY WHAT HE'S DOING. EXCEPT WHEN HE DOESN'T. DO NOT ATTEMPT TO RECREATE OR RE-ENACT ANYTHING SHOWN IN THESE VIDEOS.\n\n#makeitreal #ironman",
                },
                defaultAudioLanguage: "en",
              },
              contentDetails: {
                duration: "PT18M2S",
                dimension: "2d",
                definition: "hd",
                caption: "false",
                licensedContent: true,
                contentRating: {},
                projection: "rectangular",
              },
              statistics: {
                viewCount: "567970",
                likeCount: "49348",
                dislikeCount: "485",
                favoriteCount: "0",
                commentCount: "6171",
              },
              player: {
                embedHtml:
                  '\u003ciframe width="480" height="270" src="//www.youtube.com/embed/_AXx2XSI4Kw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\u003e\u003c/iframe\u003e',
              },
            },
            {
              kind: "youtube#video",
              etag: "KRuN1GZs67gaNhJuukVLdGWut-0",
              id: "ylZq4w90L8U",
              snippet: {
                publishedAt: "2020-09-24T09:41:06Z",
                channelId: "UC789h3eqw0H1HqGmIsI26OA",
                title:
                  "Israel Adesanya and Paulo Costa meet on the beach for UFC 253 Pre-Fight Press Conference:",
                description:
                  "VISIT: http://www.themaclife.com\nFOLLOW: http://instagram.com/themaclifeofficial\nFOLLOW: https://twitter.com/Maclifeofficial\nLIKE: http://facebook.com/themaclife",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/ylZq4w90L8U/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/ylZq4w90L8U/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/ylZq4w90L8U/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/ylZq4w90L8U/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/ylZq4w90L8U/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "TheMacLife",
                tags: [
                  "Conor McGregor",
                  "UFC",
                  "Dana White",
                  "MMAFighting",
                  "MMAJunkie",
                  "TheMacLife",
                  "Mac Life",
                  "UFC weigh in",
                  "ESPN MMA",
                  "Nate Diaz",
                  "Jorge Masvidal",
                  "Darren Till",
                  "Conor McGregor interview",
                  "UFC results",
                  "UFC post fight press conference",
                  "UFC Weigh-Ins",
                  "UFC weigh ins",
                  "UFC fight",
                  "UFC highlights",
                  "ufc highlights",
                  "dana white press conference",
                  "Dana White angry",
                  "ufc",
                  "Dana White funny",
                  "Conor McGregor Funny",
                  "ufc fights",
                  "ufc free fight",
                  "israel adesanya",
                  "paulo costa",
                  "ufc 253",
                  "costa adesanya",
                  "adesanya costa",
                ],
                categoryId: "17",
                liveBroadcastContent: "none",
                localized: {
                  title:
                    "Israel Adesanya and Paulo Costa meet on the beach for UFC 253 Pre-Fight Press Conference:",
                  description:
                    "VISIT: http://www.themaclife.com\nFOLLOW: http://instagram.com/themaclifeofficial\nFOLLOW: https://twitter.com/Maclifeofficial\nLIKE: http://facebook.com/themaclife",
                },
                defaultAudioLanguage: "en",
              },
              contentDetails: {
                duration: "PT17M32S",
                dimension: "2d",
                definition: "hd",
                caption: "false",
                licensedContent: true,
                contentRating: {},
                projection: "rectangular",
              },
              statistics: {
                viewCount: "1528790",
                likeCount: "33005",
                dislikeCount: "819",
                favoriteCount: "0",
                commentCount: "14952",
              },
              player: {
                embedHtml:
                  '\u003ciframe width="480" height="270" src="//www.youtube.com/embed/_AXx2XSI4Kw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\u003e\u003c/iframe\u003e',
              },
            },
            {
              kind: "youtube#video",
              etag: "LINkWSsRtrBwH_Ffckk89bW10Rg",
              id: "P_EeNGXIDa4",
              snippet: {
                publishedAt: "2020-09-23T20:33:01Z",
                channelId: "UCrdPrDuDCbG8xayk5QkRLQA",
                title:
                  "Moneybagg Yo, BIG 30, Pooh Shiesty – SRT [Official Music Video]",
                description:
                  '"Code Red" out now: http://smarturl.it/CodeRedMixtape\n\nFollow Moneybagg Yo:\nhttp://www.instagram.com/moneybaggyo/\nhttp://www.twitter.com/moneybaggyo/\nhttp://www.facebook.com/moneybaggyo/ \n\nLyrics:\nI might get talked about but don’t get touched\nGotta keep in their face it don’t take much\nIm the boss Ill never gonna take a paycut\nRoll over give her dick on the wake up\nChristyle 1K for the shapeup\nThese niggas trying to count my pockets\nBack to back with it I keep on copping\n2020 red seats Lil yachty\nI put her on freeze she wait for my call\nIm taking her down when this pill dissolves\nStatue of liberty standing tall\nIm chasing her down she running up the wall\nIm smoking boutique the flavor unique\n400 a juice 100 a quater\nShopping online next day get the order\nChanel her stroller my 1 year old daughter\nA spaceship thought they sent it\nWhole time its a gini\nWhole time I was fuckin on her saying telling I love her \nbut really didn’t mean it\nShowed them folks my setup lines\nBlack and linen. Frankenstien.\nSticky one me Porcupine. \nOut of sight out of mind\nI can not apologize\nMack em and upload. Happy vibes\n\nLittle bitch aint wanna fuck\nUntil she knew I was me\nChurch on Saturday about this clarity\nYou gonna die about these VV’s\nPussy play with you gonna get fucked with sucker free so aint shit sweet\nDont put one k behind that c one to the face to didn’t see g\nHad to wack his ass regardless give a fuck about no payment\nHe think we play like stomp the yard we steady stepping on the daily\n20 thousands inn these pockets. These Amari’s hold 80\nAnd I just left Toronto smoking dope kicking shit with t daily\nDid a favor and let you live after you went and wrote a statement\nI was lazy I cut you off and blocked you on all my pages\nCost my young nnigga his freedom got em scuffling in the cages\nSay you momma made you snitch but you the one who signed them papers\n\n#MoneybaggYo #BlacYoungsta #BIG30 #PoohShiesty #SRT #CodeRed\nMoneybagg Yo - SRT (feat. BIG30 & Pooh Shiesty) (Official Video)',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/P_EeNGXIDa4/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/P_EeNGXIDa4/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/P_EeNGXIDa4/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/P_EeNGXIDa4/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/P_EeNGXIDa4/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "MoneyBagg Yo",
                tags: [
                  "MBY",
                  "Moneybagg Yo",
                  "Money bag",
                  "Moneybag Yo",
                  "Big 30",
                  "Big30",
                  "SRT",
                ],
                categoryId: "10",
                liveBroadcastContent: "none",
                localized: {
                  title:
                    "Moneybagg Yo, BIG 30, Pooh Shiesty – SRT [Official Music Video]",
                  description:
                    '"Code Red" out now: http://smarturl.it/CodeRedMixtape\n\nFollow Moneybagg Yo:\nhttp://www.instagram.com/moneybaggyo/\nhttp://www.twitter.com/moneybaggyo/\nhttp://www.facebook.com/moneybaggyo/ \n\nLyrics:\nI might get talked about but don’t get touched\nGotta keep in their face it don’t take much\nIm the boss Ill never gonna take a paycut\nRoll over give her dick on the wake up\nChristyle 1K for the shapeup\nThese niggas trying to count my pockets\nBack to back with it I keep on copping\n2020 red seats Lil yachty\nI put her on freeze she wait for my call\nIm taking her down when this pill dissolves\nStatue of liberty standing tall\nIm chasing her down she running up the wall\nIm smoking boutique the flavor unique\n400 a juice 100 a quater\nShopping online next day get the order\nChanel her stroller my 1 year old daughter\nA spaceship thought they sent it\nWhole time its a gini\nWhole time I was fuckin on her saying telling I love her \nbut really didn’t mean it\nShowed them folks my setup lines\nBlack and linen. Frankenstien.\nSticky one me Porcupine. \nOut of sight out of mind\nI can not apologize\nMack em and upload. Happy vibes\n\nLittle bitch aint wanna fuck\nUntil she knew I was me\nChurch on Saturday about this clarity\nYou gonna die about these VV’s\nPussy play with you gonna get fucked with sucker free so aint shit sweet\nDont put one k behind that c one to the face to didn’t see g\nHad to wack his ass regardless give a fuck about no payment\nHe think we play like stomp the yard we steady stepping on the daily\n20 thousands inn these pockets. These Amari’s hold 80\nAnd I just left Toronto smoking dope kicking shit with t daily\nDid a favor and let you live after you went and wrote a statement\nI was lazy I cut you off and blocked you on all my pages\nCost my young nnigga his freedom got em scuffling in the cages\nSay you momma made you snitch but you the one who signed them papers\n\n#MoneybaggYo #BlacYoungsta #BIG30 #PoohShiesty #SRT #CodeRed\nMoneybagg Yo - SRT (feat. BIG30 & Pooh Shiesty) (Official Video)',
                },
              },
              contentDetails: {
                duration: "PT2M42S",
                dimension: "2d",
                definition: "hd",
                caption: "false",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
              },
              statistics: {
                viewCount: "680819",
                likeCount: "22864",
                dislikeCount: "1010",
                favoriteCount: "0",
                commentCount: "1959",
              },
              player: {
                embedHtml:
                  '\u003ciframe width="480" height="270" src="//www.youtube.com/embed/_AXx2XSI4Kw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\u003e\u003c/iframe\u003e',
              },
            },
          ],
          nextPageToken: "CAUQAA",
          pageInfo: {
            totalResults: 200,
            resultsPerPage: 5,
          },
        };

        setVideos(response);
      } catch (error) {
        console.error("Error doing the request: ", error);
      }
    }

    getYouTubeVideos();
  }, []);

  return { videos };
};

export { useYouTubeAPI };
