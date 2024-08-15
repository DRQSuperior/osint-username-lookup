const sites = [
    { name: 'Twitter', url: 'https://twitter.com/{username}' },
    { name: 'Facebook', url: 'https://www.facebook.com/{username}' },
    { name: 'Instagram', url: 'https://www.instagram.com/{username}' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/{username}' },
    { name: 'GitHub', url: 'https://github.com/{username}' },
    { name: 'Reddit', url: 'https://www.reddit.com/user/{username}' },
    { name: 'Pinterest', url: 'https://www.pinterest.com/{username}' },
    { name: 'Tumblr', url: 'https://{username}.tumblr.com' },
    { name: 'Medium', url: 'https://medium.com/@{username}' },
    { name: 'Flickr', url: 'https://www.flickr.com/people/{username}' },
    { name: 'YouTube', url: 'https://www.youtube.com/@{username}' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@{username}' },
    { name: 'Snapchat', url: 'https://www.snapchat.com/add/{username}' },
    { name: 'WhatsApp', url: 'https://wa.me/{username}' },
    { name: 'Telegram', url: 'https://t.me/{username}' },
    { name: 'WeChat', url: 'https://weixin.qq.com/{username}' },
    { name: 'QQ', url: 'https://user.qzone.qq.com/{username}' },
    { name: 'Weibo', url: 'https://weibo.com/{username}' },
    { name: 'VK', url: 'https://vk.com/{username}' },
    { name: 'Odnoklassniki', url: 'https://ok.ru/{username}' },
    { name: 'Quora', url: 'https://www.quora.com/profile/{username}' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/{username}' },
    { name: 'Twitch', url: 'https://www.twitch.tv/{username}' },
    { name: 'Vimeo', url: 'https://vimeo.com/{username}' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/{username}' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/{username}' },
    { name: 'Last.fm', url: 'https://www.last.fm/user/{username}' },
    { name: 'Goodreads', url: 'https://www.goodreads.com/{username}' },
    { name: 'DeviantArt', url: 'https://{username}.deviantart.com' },
    { name: 'Behance', url: 'https://www.behance.net/{username}' },
    { name: 'Dribbble', url: 'https://dribbble.com/{username}' },
    { name: '500px', url: 'https://500px.com/{username}' },
    { name: 'Etsy', url: 'https://www.etsy.com/shop/{username}' },
    { name: 'Patreon', url: 'https://www.patreon.com/{username}' },
    { name: 'Kickstarter', url: 'https://www.kickstarter.com/profile/{username}' },
    { name: 'AngelList', url: 'https://angel.co/{username}' },
    { name: 'Product Hunt', url: 'https://www.producthunt.com/@{username}' },
    { name: 'Hacker News', url: 'https://news.ycombinator.com/user?id={username}' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/{username}' },
    { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/{username}' },
    { name: 'Academia.edu', url: 'https://independent.academia.edu/{username}' },
    { name: 'ORCID', url: 'https://orcid.org/{username}' },
    { name: 'Slideshare', url: 'https://www.slideshare.net/{username}' },
    { name: 'Scribd', url: 'https://www.scribd.com/{username}' },
    { name: 'Issuu', url: 'https://issuu.com/{username}' },
    { name: 'Prezi', url: 'https://prezi.com/{username}' },
    { name: 'Canva', url: 'https://www.canva.com/@{username}' },
    { name: 'Figma', url: 'https://www.figma.com/@{username}' },
    { name: 'Notion', url: 'https://{username}.notion.site' },
    { name: 'Trello', url: 'https://trello.com/{username}' },
    { name: 'Asana', url: 'https://app.asana.com/-/{username}' },
    { name: 'Slack', url: 'https://{username}.slack.com' },
    { name: 'Discord', url: 'https://discord.com/users/{username}' },
    { name: 'Zoom', url: 'https://zoom.us/j/{username}' },
    { name: 'Google Meet', url: 'https://meet.google.com/{username}' },
    { name: 'Microsoft Teams', url: 'https://teams.microsoft.com/_#{username}' },
    { name: 'Clubhouse', url: 'https://www.clubhouse.com/@{username}' },
    { name: 'Mastodon', url: 'https://mastodon.social/@{username}' },
    { name: 'Gab', url: 'https://gab.com/{username}' },
    { name: 'Parler', url: 'https://parler.com/{username}' },
    { name: 'MeWe', url: 'https://mewe.com/{username}' },
    { name: 'Minds', url: 'https://www.minds.com/{username}' },
    { name: 'Diaspora', url: 'https://diasp.org/people/{username}' },
    { name: 'Steemit', url: 'https://steemit.com/@{username}' },
    { name: 'Hive', url: 'https://hive.blog/@{username}' },
    { name: 'Peepeth', url: 'https://peepeth.com/{username}' },
    { name: 'Minds', url: 'https://www.minds.com/{username}' },
    { name: 'Ello', url: 'https://ello.co/{username}' },
    { name: 'Vero', url: 'https://vero.co/{username}' },
    { name: 'Flipboard', url: 'https://flipboard.com/@{username}' },
    { name: 'Mix', url: 'https://mix.com/{username}' },
    { name: 'Digg', url: 'https://digg.com/@{username}' },
    { name: 'StumbleUpon', url: 'https://www.stumbleupon.com/stumbler/{username}' },
    { name: 'Delicious', url: 'https://del.icio.us/{username}' },
    { name: 'Pocket', url: 'https://getpocket.com/@{username}' },
    { name: 'Instapaper', url: 'https://www.instapaper.com/p/{username}' },
    { name: 'Feedly', url: 'https://feedly.com/{username}' },
    { name: 'Bloglovin', url: 'https://www.bloglovin.com/@{username}' },
    { name: 'Blogger', url: 'https://{username}.blogspot.com' },
    { name: 'WordPress', url: 'https://{username}.wordpress.com' },
    { name: 'Medium', url: 'https://medium.com/@{username}' },
    { name: 'Ghost', url: 'https://{username}.ghost.io' },
    { name: 'Substack', url: 'https://{username}.substack.com' },
    { name: 'Wix', url: 'https://{username}.wixsite.com' },
    { name: 'Squarespace', url: 'https://{username}.squarespace.com' },
    { name: 'Weebly', url: 'https://{username}.weebly.com' },
    { name: 'Jimdo', url: 'https://{username}.jimdosite.com' },
    { name: 'Webflow', url: 'https://{username}.webflow.io' },
    { name: 'Carrd', url: 'https://{username}.carrd.co' },
    { name: 'About.me', url: 'https://about.me/{username}' },
    { name: 'Linktree', url: 'https://linktr.ee/{username}' },
    { name: 'Bitly', url: 'https://bitly.com/{username}' },
    { name: 'Rebrandly', url: 'https://rebrand.ly/{username}' },
    { name: 'Ow.ly', url: 'https://ow.ly/{username}' },
    { name: 'TinyURL', url: 'https://tinyurl.com/{username}' },
    { name: 'Gravatar', url: 'https://en.gravatar.com/{username}' },
    { name: 'Disqus', url: 'https://disqus.com/by/{username}' },
    { name: 'Livefyre', url: 'https://www.livefyre.com/profile/{username}' },
    { name: 'IntenseDebate', url: 'https://intensedebate.com/people/{username}' },
    { name: 'Hypothes.is', url: 'https://hypothes.is/users/{username}' },
    { name: 'Genius', url: 'https://genius.com/{username}' },
]; // BASIC LIST

// Grabbed from Sherlock https://github.com/sherlock-project/sherlock/blob/573ae6c4889ddc4f37f4f5ffd4a3ea07bd1f581b/sherlock_project/resources/data.json
// [
//     {
//       "name": "1337x",
//       "url": "https://www.1337x.to/user/{username}/"
//     },
//     {
//       "name": "2Dimensions",
//       "url": "https://2Dimensions.com/a/{username}"
//     },
//     {
//       "name": "3dnews",
//       "url": "http://forum.3dnews.ru/member.php?username={username}"
//     },
//     {
//       "name": "7Cups",
//       "url": "https://www.7cups.com/@{username}"
//     },
//     {
//       "name": "8tracks",
//       "url": "https://8tracks.com/{username}"
//     },
//     {
//       "name": "9GAG",
//       "url": "https://www.9gag.com/u/{username}"
//     },
//     {
//       "name": "APClips",
//       "url": "https://apclips.com/{username}"
//     },
//     {
//       "name": "About.me",
//       "url": "https://about.me/{username}"
//     },
//     {
//       "name": "Academia.edu",
//       "url": "https://independent.academia.edu/{username}"
//     },
//     {
//       "name": "AdmireMe.Vip",
//       "url": "https://admireme.vip/{username}"
//     },
//     {
//       "name": "Air Pilot Life",
//       "url": "https://airlinepilot.life/u/{username}"
//     },
//     {
//       "name": "Airbit",
//       "url": "https://airbit.com/{username}"
//     },
//     {
//       "name": "Airliners",
//       "url": "https://www.airliners.net/user/{username}/profile/photos"
//     },
//     {
//       "name": "All Things Worn",
//       "url": "https://www.allthingsworn.com/profile/{username}"
//     },
//     {
//       "name": "AllMyLinks",
//       "url": "https://allmylinks.com/{username}"
//     },
//     {
//       "name": "Amino",
//       "url": "https://aminoapps.com/u/{username}"
//     },
//     {
//       "name": "AniWorld",
//       "url": "https://aniworld.to/user/profil/{username}"
//     },
//     {
//       "name": "Anilist",
//       "url": "https://anilist.co/user/{username}/"
//     },
//     {
//       "name": "Apple Developer",
//       "url": "https://developer.apple.com/forums/profile/{username}"
//     },
//     {
//       "name": "Apple Discussions",
//       "url": "https://discussions.apple.com/profile/{username}"
//     },
//     {
//       "name": "Archive of Our Own",
//       "url": "https://archiveofourown.org/users/{username}"
//     },
//     {
//       "name": "Archive.org",
//       "url": "https://archive.org/details/@{username}"
//     },
//     {
//       "name": "ArtStation",
//       "url": "https://www.artstation.com/{username}"
//     },
//     {
//       "name": "Asciinema",
//       "url": "https://asciinema.org/~{username}"
//     },
//     {
//       "name": "Ask Fedora",
//       "url": "https://ask.fedoraproject.org/u/{username}"
//     },
//     {
//       "name": "AskFM",
//       "url": "https://ask.fm/{username}"
//     },
//     {
//       "name": "Audiojungle",
//       "url": "https://audiojungle.net/user/{username}"
//     },
//     {
//       "name": "Autofrage",
//       "url": "https://www.autofrage.net/nutzer/{username}"
//     },
//     {
//       "name": "Avizo",
//       "url": "https://www.avizo.cz/{username}/"
//     },
//     {
//       "name": "BLIP.fm",
//       "url": "https://blip.fm/{username}"
//     },
//     {
//       "name": "BOOTH",
//       "url": "https://{username}.booth.pm/"
//     },
//     {
//       "name": "Bandcamp",
//       "url": "https://www.bandcamp.com/{username}"
//     },
//     {
//       "name": "Bazar.cz",
//       "url": "https://www.bazar.cz/{username}/"
//     },
//     {
//       "name": "Behance",
//       "url": "https://www.behance.net/{username}"
//     },
//     {
//       "name": "Bezuzyteczna",
//       "url": "https://bezuzyteczna.pl/uzytkownicy/{username}"
//     },
//     {
//       "name": "BiggerPockets",
//       "url": "https://www.biggerpockets.com/users/{username}"
//     },
//     {
//       "name": "Bikemap",
//       "url": "https://www.bikemap.net/en/u/{username}/routes/created/"
//     },
//     {
//       "name": "BioHacking",
//       "url": "https://forum.dangerousthings.com/u/{username}"
//     },
//     {
//       "name": "BitBucket",
//       "url": "https://bitbucket.org/{username}/"
//     },
//     {
//       "name": "Bitwarden Forum",
//       "url": "https://community.bitwarden.com/u/{username}/summary"
//     },
//     {
//       "name": "Blipfoto",
//       "url": "https://www.blipfoto.com/{username}"
//     },
//     {
//       "name": "Blogger",
//       "url": "https://{username}.blogspot.com"
//     },
//     {
//       "name": "BodyBuilding",
//       "url": "https://bodyspace.bodybuilding.com/{username}"
//     },
//     {
//       "name": "BongaCams",
//       "url": "https://pt.bongacams.com/profile/{username}"
//     },
//     {
//       "name": "Bookcrossing",
//       "url": "https://www.bookcrossing.com/mybookshelf/{username}/"
//     },
//     {
//       "name": "BraveCommunity",
//       "url": "https://community.brave.com/u/{username}/"
//     },
//     {
//       "name": "BugCrowd",
//       "url": "https://bugcrowd.com/{username}"
//     },
//     {
//       "name": "BuyMeACoffee",
//       "url": "https://buymeacoff.ee/{username}"
//     },
//     {
//       "name": "BuzzFeed",
//       "url": "https://buzzfeed.com/{username}"
//     },
//     {
//       "name": "CGTrader",
//       "url": "https://www.cgtrader.com/{username}"
//     },
//     {
//       "name": "CNET",
//       "url": "https://www.cnet.com/profiles/{username}/"
//     },
//     {
//       "name": "CSSBattle",
//       "url": "https://cssbattle.dev/player/{username}"
//     },
//     {
//       "name": "CTAN",
//       "url": "https://ctan.org/author/{username}"
//     },
//     {
//       "name": "Caddy Community",
//       "url": "https://caddy.community/u/{username}/summary"
//     },
//     {
//       "name": "Car Talk Community",
//       "url": "https://community.cartalk.com/u/{username}/summary"
//     },
//     {
//       "name": "Carbonmade",
//       "url": "https://{username}.carbonmade.com"
//     },
//     {
//       "name": "Career.habr",
//       "url": "https://career.habr.com/{username}"
//     },
//     {
//       "name": "Championat",
//       "url": "https://www.championat.com/user/{username}"
//     },
//     {
//       "name": "Chaos",
//       "url": "https://chaos.social/@{username}"
//     },
//     {
//       "name": "Chatujme.cz",
//       "url": "https://profil.chatujme.cz/{username}"
//     },
//     {
//       "name": "ChaturBate",
//       "url": "https://chaturbate.com/{username}"
//     },
//     {
//       "name": "Chess",
//       "url": "https://www.chess.com/member/{username}"
//     },
//     {
//       "name": "Choice Community",
//       "url": "https://choice.community/u/{username}/summary"
//     },
//     {
//       "name": "Clapper",
//       "url": "https://clapperapp.com/{username}"
//     },
//     {
//       "name": "CloudflareCommunity",
//       "url": "https://community.cloudflare.com/u/{username}"
//     },
//     {
//       "name": "Clozemaster",
//       "url": "https://www.clozemaster.com/players/{username}"
//     },
//     {
//       "name": "Clubhouse",
//       "url": "https://www.clubhouse.com/@{username}"
//     },
//     {
//       "name": "Code Snippet Wiki",
//       "url": "https://codesnippets.fandom.com/wiki/User:{username}"
//     },
//     {
//       "name": "Codeberg",
//       "url": "https://codeberg.org/{username}"
//     },
//     {
//       "name": "Codecademy",
//       "url": "https://www.codecademy.com/profiles/{username}"
//     },
//     {
//       "name": "Codechef",
//       "url": "https://www.codechef.com/users/{username}"
//     },
//     {
//       "name": "Codeforces",
//       "url": "https://codeforces.com/profile/{username}"
//     },
//     {
//       "name": "Codepen",
//       "url": "https://codepen.io/{username}"
//     },
//     {
//       "name": "Coders Rank",
//       "url": "https://profile.codersrank.io/user/{username}/"
//     },
//     {
//       "name": "Coderwall",
//       "url": "https://coderwall.com/{username}"
//     },
//     {
//       "name": "Codewars",
//       "url": "https://www.codewars.com/users/{username}"
//     },
//     {
//       "name": "Coinvote",
//       "url": "https://coinvote.cc/profile/{username}"
//     },
//     {
//       "name": "ColourLovers",
//       "url": "https://www.colourlovers.com/lover/{username}"
//     },
//     {
//       "name": "Contently",
//       "url": "https://{username}.contently.com/"
//     },
//     {
//       "name": "Coroflot",
//       "url": "https://www.coroflot.com/{username}"
//     },
//     {
//       "name": "Cracked",
//       "url": "https://www.cracked.com/members/{username}/"
//     },
//     {
//       "name": "Crevado",
//       "url": "https://{username}.crevado.com"
//     },
//     {
//       "name": "Crowdin",
//       "url": "https://crowdin.com/profile/{username}"
//     },
//     {
//       "name": "Cryptomator Forum",
//       "url": "https://community.cryptomator.org/u/{username}"
//     },
//     {
//       "name": "Cults3D",
//       "url": "https://cults3d.com/en/users/{username}/creations"
//     },
//     {
//       "name": "CyberDefenders",
//       "url": "https://cyberdefenders.org/p/{username}"
//     },
//     {
//       "name": "DEV Community",
//       "url": "https://dev.to/{username}"
//     },
//     {
//       "name": "DMOJ",
//       "url": "https://dmoj.ca/user/{username}"
//     },
//     {
//       "name": "DailyMotion",
//       "url": "https://www.dailymotion.com/{username}"
//     },
//     {
//       "name": "Dealabs",
//       "url": "https://www.dealabs.com/profile/{username}"
//     },
//     {
//       "name": "DeviantART",
//       "url": "https://{username}.deviantart.com"
//     },
//     {
//       "name": "Discogs",
//       "url": "https://www.discogs.com/user/{username}"
//     },
//     {
//       "name": "Discord",
//       "url": "https://discord.com"
//     },
//     {
//       "name": "Discuss.Elastic.co",
//       "url": "https://discuss.elastic.co/u/{username}"
//     },
//     {
//       "name": "Disqus",
//       "url": "https://disqus.com/{username}"
//     },
//     {
//       "name": "Docker Hub",
//       "url": "https://hub.docker.com/u/{username}/"
//     },
//     {
//       "name": "Dribbble",
//       "url": "https://dribbble.com/{username}"
//     },
//     {
//       "name": "Duolingo",
//       "url": "https://www.duolingo.com/profile/{username}"
//     },
//     {
//       "name": "Eintracht Frankfurt Forum",
//       "url": "https://community.eintracht.de/fans/{username}"
//     },
//     {
//       "name": "Envato Forum",
//       "url": "https://forums.envato.com/u/{username}"
//     },
//     {
//       "name": "Erome",
//       "url": "https://www.erome.com/{username}"
//     },
//     {
//       "name": "Exposure",
//       "url": "https://{username}.exposure.co/"
//     },
//     {
//       "name": "EyeEm",
//       "url": "https://www.eyeem.com/u/{username}"
//     },
//     {
//       "name": "F3.cool",
//       "url": "https://f3.cool/{username}/"
//     },
//     {
//       "name": "Fameswap",
//       "url": "https://fameswap.com/user/{username}"
//     },
//     {
//       "name": "Fandom",
//       "url": "https://www.fandom.com/u/{username}"
//     },
//     {
//       "name": "Finanzfrage",
//       "url": "https://www.finanzfrage.net/nutzer/{username}"
//     },
//     {
//       "name": "Fiverr",
//       "url": "https://www.fiverr.com/{username}"
//     },
//     {
//       "name": "Flickr",
//       "url": "https://www.flickr.com/people/{username}"
//     },
//     {
//       "name": "Flightradar24",
//       "url": "https://my.flightradar24.com/{username}"
//     },
//     {
//       "name": "Flipboard",
//       "url": "https://flipboard.com/@{username}"
//     },
//     {
//       "name": "Football",
//       "url": "https://www.rusfootball.info/user/{username}/"
//     },
//     {
//       "name": "FortniteTracker",
//       "url": "https://fortnitetracker.com/profile/all/{username}"
//     },
//     {
//       "name": "Forum Ophilia",
//       "url": "https://www.forumophilia.com/profile.php?mode=viewprofile&u={username}"
//     },
//     {
//       "name": "Fosstodon",
//       "url": "https://fosstodon.org/@{username}"
//     },
//     {
//       "name": "Freelance.habr",
//       "url": "https://freelance.habr.com/freelancers/{username}"
//     },
//     {
//       "name": "Freelancer",
//       "url": "https://www.freelancer.com/u/{username}"
//     },
//     {
//       "name": "Freesound",
//       "url": "https://freesound.org/people/{username}/"
//     },
//     {
//       "name": "GNOME VCS",
//       "url": "https://gitlab.gnome.org/{username}"
//     },
//     {
//       "name": "GaiaOnline",
//       "url": "https://www.gaiaonline.com/profiles/{username}"
//     },
//     {
//       "name": "Gamespot",
//       "url": "https://www.gamespot.com/profile/{username}/"
//     },
//     {
//       "name": "GeeksforGeeks",
//       "url": "https://auth.geeksforgeeks.org/user/{username}"
//     },
//     {
//       "name": "Genius (Artists)",
//       "url": "https://genius.com/artists/{username}"
//     },
//     {
//       "name": "Genius (Users)",
//       "url": "https://genius.com/{username}"
//     },
//     {
//       "name": "Gesundheitsfrage",
//       "url": "https://www.gesundheitsfrage.net/nutzer/{username}"
//     },
//     {
//       "name": "GetMyUni",
//       "url": "https://www.getmyuni.com/user/{username}"
//     },
//     {
//       "name": "Giant Bomb",
//       "url": "https://www.giantbomb.com/profile/{username}/"
//     },
//     {
//       "name": "Giphy",
//       "url": "https://giphy.com/{username}"
//     },
//     {
//       "name": "GitBook",
//       "url": "https://{username}.gitbook.io/"
//     },
//     {
//       "name": "GitHub",
//       "url": "https://www.github.com/{username}"
//     },
//     {
//       "name": "GitLab",
//       "url": "https://gitlab.com/{username}"
//     },
//     {
//       "name": "Gitee",
//       "url": "https://gitee.com/{username}"
//     },
//     {
//       "name": "GoodReads",
//       "url": "https://www.goodreads.com/{username}"
//     },
//     {
//       "name": "Google Play",
//       "url": "https://play.google.com/store/apps/developer?id={username}"
//     },
//     {
//       "name": "Gradle",
//       "url": "https://plugins.gradle.org/u/{username}"
//     },
//     {
//       "name": "Grailed",
//       "url": "https://www.grailed.com/{username}"
//     },
//     {
//       "name": "Gravatar",
//       "url": "http://en.gravatar.com/{username}"
//     },
//     {
//       "name": "Gumroad",
//       "url": "https://www.gumroad.com/{username}"
//     },
//     {
//       "name": "Gutefrage",
//       "url": "https://www.gutefrage.net/nutzer/{username}"
//     },
//     {
//       "name": "HackTheBox",
//       "url": "https://forum.hackthebox.eu/profile/{username}"
//     },
//     {
//       "name": "Hackaday",
//       "url": "https://hackaday.io/{username}"
//     },
//     {
//       "name": "HackenProof (Hackers)",
//       "url": "https://hackenproof.com/hackers/{username}"
//     },
//     {
//       "name": "HackerEarth",
//       "url": "https://hackerearth.com/@{username}"
//     },
//     {
//       "name": "HackerNews",
//       "url": "https://news.ycombinator.com/user?id={username}"
//     },
//     {
//       "name": "HackerOne",
//       "url": "https://hackerone.com/{username}"
//     },
//     {
//       "name": "HackerRank",
//       "url": "https://hackerrank.com/{username}"
//     },
//     {
//       "name": "Harvard Scholar",
//       "url": "https://scholar.harvard.edu/{username}"
//     },
//     {
//       "name": "Hashnode",
//       "url": "https://hashnode.com/@{username}"
//     },
//     {
//       "name": "Heavy-R",
//       "url": "https://www.heavy-r.com/user/{username}"
//     },
//     {
//       "name": "Holopin",
//       "url": "https://holopin.io/@{username}"
//     },
//     {
//       "name": "Houzz",
//       "url": "https://houzz.com/user/{username}"
//     },
//     {
//       "name": "HubPages",
//       "url": "https://hubpages.com/@{username}"
//     },
//     {
//       "name": "Hubski",
//       "url": "https://hubski.com/user/{username}"
//     },
//     {
//       "name": "HudsonRock",
//       "url": "https://cavalier.hudsonrock.com/api/json/v2/osint-tools/search-by-username?username={username}"
//     },
//     {
//       "name": "ICQ",
//       "url": "https://icq.im/{username}/en"
//     },
//     {
//       "name": "IFTTT",
//       "url": "https://www.ifttt.com/p/{username}"
//     },
//     {
//       "name": "IRC-Galleria",
//       "url": "https://irc-galleria.net/user/{username}"
//     },
//     {
//       "name": "Icons8 Community",
//       "url": "https://community.icons8.com/u/{username}/summary"
//     },
//     {
//       "name": "Image Fap",
//       "url": "https://www.imagefap.com/profile/{username}"
//     },
//     {
//       "name": "ImgUp.cz",
//       "url": "https://imgup.cz/{username}"
//     },
//     {
//       "name": "Imgur",
//       "url": "https://imgur.com/user/{username}"
//     },
//     {
//       "name": "Instagram",
//       "url": "https://instagram.com/{username}"
//     },
//     {
//       "name": "Instructables",
//       "url": "https://www.instructables.com/member/{username}"
//     },
//     {
//       "name": "Intigriti",
//       "url": "https://app.intigriti.com/profile/{username}"
//     },
//     {
//       "name": "Ionic Forum",
//       "url": "https://forum.ionicframework.com/u/{username}"
//     },
//     {
//       "name": "Issuu",
//       "url": "https://issuu.com/{username}"
//     },
//     {
//       "name": "Itch.io",
//       "url": "https://{username}.itch.io/"
//     },
//     {
//       "name": "Itemfix",
//       "url": "https://www.itemfix.com/c/{username}"
//     },
//     {
//       "name": "Jellyfin Weblate",
//       "url": "https://translate.jellyfin.org/user/{username}/"
//     },
//     {
//       "name": "Jimdo",
//       "url": "https://{username}.jimdosite.com"
//     },
//     {
//       "name": "Joplin Forum",
//       "url": "https://discourse.joplinapp.org/u/{username}"
//     },
//     {
//       "name": "KEAKR",
//       "url": "https://www.keakr.com/en/profile/{username}"
//     },
//     {
//       "name": "Kaggle",
//       "url": "https://www.kaggle.com/{username}"
//     },
//     {
//       "name": "Keybase",
//       "url": "https://keybase.io/{username}"
//     },
//     {
//       "name": "Kick",
//       "url": "https://kick.com/{username}"
//     },
//     {
//       "name": "Kik",
//       "url": "https://kik.me/{username}"
//     },
//     {
//       "name": "Kongregate",
//       "url": "https://www.kongregate.com/accounts/{username}"
//     },
//     {
//       "name": "LOR",
//       "url": "https://www.linux.org.ru/people/{username}/profile"
//     },
//     {
//       "name": "Launchpad",
//       "url": "https://launchpad.net/~{username}"
//     },
//     {
//       "name": "LeetCode",
//       "url": "https://leetcode.com/{username}"
//     },
//     {
//       "name": "LessWrong",
//       "url": "https://www.lesswrong.com/users/@{username}"
//     },
//     {
//       "name": "Letterboxd",
//       "url": "https://letterboxd.com/{username}"
//     },
//     {
//       "name": "LibraryThing",
//       "url": "https://www.librarything.com/profile/{username}"
//     },
//     {
//       "name": "Lichess",
//       "url": "https://lichess.org/@/{username}"
//     },
//     {
//       "name": "LinkedIn",
//       "url": "https://linkedin.com/in/{username}"
//     },
//     {
//       "name": "Linktree",
//       "url": "https://linktr.ee/{username}"
//     },
//     {
//       "name": "Listed",
//       "url": "https://listed.to/@{username}"
//     },
//     {
//       "name": "LiveJournal",
//       "url": "https://{username}.livejournal.com"
//     },
//     {
//       "name": "Lobsters",
//       "url": "https://lobste.rs/u/{username}"
//     },
//     {
//       "name": "LottieFiles",
//       "url": "https://lottiefiles.com/{username}"
//     },
//     {
//       "name": "LushStories",
//       "url": "https://www.lushstories.com/profile/{username}"
//     },
//     {
//       "name": "MMORPG Forum",
//       "url": "https://forums.mmorpg.com/profile/{username}"
//     },
//     {
//       "name": "Mapify",
//       "url": "https://mapify.travel/{username}"
//     },
//     {
//       "name": "Medium",
//       "url": "https://medium.com/@{username}"
//     },
//     {
//       "name": "Memrise",
//       "url": "https://www.memrise.com/user/{username}/"
//     },
//     {
//       "name": "Minecraft",
//       "url": "https://api.mojang.com/users/profiles/minecraft/{username}"
//     },
//     {
//       "name": "MixCloud",
//       "url": "https://www.mixcloud.com/{username}/"
//     },
//     {
//       "name": "Monkeytype",
//       "url": "https://monkeytype.com/profile/{username}"
//     },
//     {
//       "name": "Motherless",
//       "url": "https://motherless.com/m/{username}"
//     },
//     {
//       "name": "Motorradfrage",
//       "url": "https://www.motorradfrage.net/nutzer/{username}"
//     },
//     {
//       "name": "MyAnimeList",
//       "url": "https://myanimelist.net/profile/{username}"
//     },
//     {
//       "name": "MyMiniFactory",
//       "url": "https://www.myminifactory.com/users/{username}"
//     },
//     {
//       "name": "Mydramalist",
//       "url": "https://www.mydramalist.com/profile/{username}"
//     },
//     {
//       "name": "Myspace",
//       "url": "https://myspace.com/{username}"
//     },
//     {
//       "name": "NICommunityForum",
//       "url": "https://community.native-instruments.com/profile/{username}"
//     },
//     {
//       "name": "NationStates Nation",
//       "url": "https://nationstates.net/nation={username}"
//     },
//     {
//       "name": "NationStates Region",
//       "url": "https://nationstates.net/region={username}"
//     },
//     {
//       "name": "Naver",
//       "url": "https://blog.naver.com/{username}"
//     },
//     {
//       "name": "Needrom",
//       "url": "https://www.needrom.com/author/{username}/"
//     },
//     {
//       "name": "Newgrounds",
//       "url": "https://{username}.newgrounds.com"
//     },
//     {
//       "name": "Nextcloud Forum",
//       "url": "https://help.nextcloud.com/u/{username}/summary"
//     },
//     {
//       "name": "Nightbot",
//       "url": "https://nightbot.tv/t/{username}/commands"
//     },
//     {
//       "name": "Ninja Kiwi",
//       "url": "https://ninjakiwi.com/profile/{username}"
//     },
//     {
//       "name": "NintendoLife",
//       "url": "https://www.nintendolife.com/users/{username}"
//     },
//     {
//       "name": "NitroType",
//       "url": "https://www.nitrotype.com/racer/{username}"
//     },
//     {
//       "name": "NotABug.org",
//       "url": "https://notabug.org/{username}"
//     },
//     {
//       "name": "Nyaa.si",
//       "url": "https://nyaa.si/user/{username}"
//     },
//     {
//       "name": "OGUsers",
//       "url": "https://ogu.gg/{username}"
//     },
//     {
//       "name": "OpenStreetMap",
//       "url": "https://www.openstreetmap.org/user/{username}"
//     },
//     {
//       "name": "Opensource",
//       "url": "https://opensource.com/users/{username}"
//     },
//     {
//       "name": "OurDJTalk",
//       "url": "https://ourdjtalk.com/members?username={username}"
//     },
//     {
//       "name": "PCGamer",
//       "url": "https://forums.pcgamer.com/members/?username={username}"
//     },
//     {
//       "name": "PSNProfiles.com",
//       "url": "https://psnprofiles.com/{username}"
//     },
//     {
//       "name": "Packagist",
//       "url": "https://packagist.org/packages/{username}/"
//     },
//     {
//       "name": "Pastebin",
//       "url": "https://pastebin.com/u/{username}"
//     },
//     {
//       "name": "Patreon",
//       "url": "https://www.patreon.com/{username}"
//     },
//     {
//       "name": "PentesterLab",
//       "url": "https://pentesterlab.com/profile/{username}"
//     },
//     {
//       "name": "PepperIT",
//       "url": "https://www.pepper.it/profile/{username}/overview"
//     },
//     {
//       "name": "Periscope",
//       "url": "https://www.periscope.tv/{username}/"
//     },
//     {
//       "name": "Pinkbike",
//       "url": "https://www.pinkbike.com/u/{username}/"
//     },
//     {
//       "name": "PlayStore",
//       "url": "https://play.google.com/store/apps/developer?id={username}"
//     },
//     {
//       "name": "PocketStars",
//       "url": "https://pocketstars.com/{username}"
//     },
//     {
//       "name": "Pokemon Showdown",
//       "url": "https://pokemonshowdown.com/users/{username}"
//     },
//     {
//       "name": "Polarsteps",
//       "url": "https://polarsteps.com/{username}"
//     },
//     {
//       "name": "Polygon",
//       "url": "https://www.polygon.com/users/{username}"
//     },
//     {
//       "name": "Polymart",
//       "url": "https://polymart.org/user/{username}"
//     },
//     {
//       "name": "Pornhub",
//       "url": "https://pornhub.com/users/{username}"
//     },
//     {
//       "name": "ProductHunt",
//       "url": "https://www.producthunt.com/@{username}"
//     },
//     {
//       "name": "PromoDJ",
//       "url": "http://promodj.com/{username}"
//     },
//     {
//       "name": "PyPi",
//       "url": "https://pypi.org/user/{username}"
//     },
//     {
//       "name": "Rajce.net",
//       "url": "https://{username}.rajce.idnes.cz/"
//     },
//     {
//       "name": "Rate Your Music",
//       "url": "https://rateyourmusic.com/~{username}"
//     },
//     {
//       "name": "Rclone Forum",
//       "url": "https://forum.rclone.org/u/{username}"
//     },
//     {
//       "name": "RedTube",
//       "url": "https://www.redtube.com/users/{username}"
//     },
//     {
//       "name": "Redbubble",
//       "url": "https://www.redbubble.com/people/{username}"
//     },
//     {
//       "name": "Reddit",
//       "url": "https://www.reddit.com/user/{username}"
//     },
//     {
//       "name": "Reisefrage",
//       "url": "https://www.reisefrage.net/nutzer/{username}"
//     },
//     {
//       "name": "Replit.com",
//       "url": "https://replit.com/@{username}"
//     },
//     {
//       "name": "ResearchGate",
//       "url": "https://www.researchgate.net/profile/{username}"
//     },
//     {
//       "name": "ReverbNation",
//       "url": "https://www.reverbnation.com/{username}"
//     },
//     {
//       "name": "Roblox",
//       "url": "https://www.roblox.com/user.aspx?username={username}"
//     },
//     {
//       "name": "RocketTube",
//       "url": "https://www.rockettube.com/{username}"
//     },
//     {
//       "name": "RoyalCams",
//       "url": "https://royalcams.com/profile/{username}"
//     },
//     {
//       "name": "RubyGems",
//       "url": "https://rubygems.org/profiles/{username}"
//     },
//     {
//       "name": "Rumble",
//       "url": "https://rumble.com/user/{username}"
//     },
//     {
//       "name": "RuneScape",
//       "url": "https://apps.runescape.com/runemetrics/app/overview/player/{username}"
//     },
//     {
//       "name": "SWAPD",
//       "url": "https://swapd.co/u/{username}"
//     },
//     {
//       "name": "Sbazar.cz",
//       "url": "https://www.sbazar.cz/{username}"
//     },
//     {
//       "name": "Scratch",
//       "url": "https://scratch.mit.edu/users/{username}"
//     },
//     {
//       "name": "Scribd",
//       "url": "https://www.scribd.com/{username}"
//     },
//     {
//       "name": "ShitpostBot5000",
//       "url": "https://www.shitpostbot.com/user/{username}"
//     },
//     {
//       "name": "Shpock",
//       "url": "https://www.shpock.com/shop/{username}/items"
//     },
//     {
//       "name": "Signal",
//       "url": "https://community.signalusers.org/u/{username}"
//     },
//     {
//       "name": "Sketchfab",
//       "url": "https://sketchfab.com/{username}"
//     },
//     {
//       "name": "Slack",
//       "url": "https://{username}.slack.com"
//     },
//     {
//       "name": "Slant",
//       "url": "https://www.slant.co/users/{username}"
//     },
//     {
//       "name": "Slashdot",
//       "url": "https://slashdot.org/~{username}"
//     },
//     {
//       "name": "SlideShare",
//       "url": "https://slideshare.net/{username}"
//     },
//     {
//       "name": "Slides",
//       "url": "https://slides.com/{username}"
//     },
//     {
//       "name": "SmugMug",
//       "url": "https://{username}.smugmug.com"
//     },
//     {
//       "name": "Smule",
//       "url": "https://www.smule.com/{username}"
//     },
//     {
//       "name": "Snapchat",
//       "url": "https://www.snapchat.com/add/{username}"
//     },
//     {
//       "name": "SoundCloud",
//       "url": "https://soundcloud.com/{username}"
//     },
//     {
//       "name": "SourceForge",
//       "url": "https://sourceforge.net/u/{username}"
//     },
//     {
//       "name": "SoylentNews",
//       "url": "https://soylentnews.org/~{username}"
//     },
//     {
//       "name": "Speedrun.com",
//       "url": "https://speedrun.com/user/{username}"
//     },
//     {
//       "name": "Spells8",
//       "url": "https://forum.spells8.com/u/{username}"
//     },
//     {
//       "name": "Splice",
//       "url": "https://splice.com/{username}"
//     },
//     {
//       "name": "Splits.io",
//       "url": "https://splits.io/users/{username}"
//     },
//     {
//       "name": "Sporcle",
//       "url": "https://www.sporcle.com/user/{username}/people"
//     },
//     {
//       "name": "Sportlerfrage",
//       "url": "https://www.sportlerfrage.net/nutzer/{username}"
//     },
//     {
//       "name": "SportsRU",
//       "url": "https://www.sports.ru/profile/{username}/"
//     },
//     {
//       "name": "Spotify",
//       "url": "https://open.spotify.com/user/{username}"
//     },
//     {
//       "name": "Star Citizen",
//       "url": "https://robertsspaceindustries.com/citizens/{username}"
//     },
//     {
//       "name": "Steam Community (Group)",
//       "url": "https://steamcommunity.com/groups/{username}"
//     },
//     {
//       "name": "Steam Community (User)",
//       "url": "https://steamcommunity.com/id/{username}/"
//     },
//     {
//       "name": "Strava",
//       "url": "https://www.strava.com/athletes/{username}"
//     },
//     {
//       "name": "SublimeForum",
//       "url": "https://forum.sublimetext.com/u/{username}"
//     },
//     {
//       "name": "TETR.IO",
//       "url": "https://ch.tetr.io/u/{username}"
//     },
//     {
//       "name": "TLDR Legal",
//       "url": "https://tldrlegal.com/users/{username}/"
//     },
//     {
//       "name": "TRAKTRAIN",
//       "url": "https://traktrain.com/{username}"
//     },
//     {
//       "name": "Telegram",
//       "url": "https://t.me/{username}"
//     },
//     {
//       "name": "Tellonym.me",
//       "url": "https://tellonym.me/{username}"
//     },
//     {
//       "name": "Tenor",
//       "url": "https://tenor.com/users/{username}"
//     },
//     {
//       "name": "ThemeForest",
//       "url": "https://themeforest.net/user/{username}"
//     },
//     {
//       "name": "TnAFlix",
//       "url": "https://www.tnaflix.com/profile/{username}"
//     },
//     {
//       "name": "TorrentGalaxy",
//       "url": "https://torrentgalaxy.to/profile/{username}"
//     },
//     {
//       "name": "TradingView",
//       "url": "https://www.tradingview.com/u/{username}/"
//     },
//     {
//       "name": "Trakt",
//       "url": "https://www.trakt.tv/users/{username}"
//     },
//     {
//       "name": "TrashboxRU",
//       "url": "https://trashbox.ru/users/{username}"
//     },
//     {
//       "name": "Trawelling",
//       "url": "https://traewelling.de/@{username}"
//     },
//     {
//       "name": "Trello",
//       "url": "https://trello.com/{username}"
//     },
//     {
//       "name": "TryHackMe",
//       "url": "https://tryhackme.com/p/{username}"
//     },
//     {
//       "name": "Tuna",
//       "url": "https://tuna.voicemod.net/user/{username}"
//     },
//     {
//       "name": "Tweakers",
//       "url": "https://tweakers.net/gallery/{username}"
//     },
//     {
//       "name": "Twitch",
//       "url": "https://www.twitch.tv/{username}"
//     },
//     {
//       "name": "Twitter",
//       "url": "https://x.com/{username}"
//     },
//     {
//       "name": "Typeracer",
//       "url": "https://data.typeracer.com/pit/profile?user={username}"
//     },
//     {
//       "name": "Ultimate-Guitar",
//       "url": "https://ultimate-guitar.com/u/{username}"
//     },
//     {
//       "name": "Unsplash",
//       "url": "https://unsplash.com/@{username}"
//     },
//     {
//       "name": "Untappd",
//       "url": "https://untappd.com/user/{username}"
//     },
//     {
//       "name": "VK",
//       "url": "https://vk.com/{username}"
//     },
//     {
//       "name": "VSCO",
//       "url": "https://vsco.co/{username}"
//     },
//     {
//       "name": "Velomania",
//       "url": "https://forum.velomania.ru/member.php?username={username}"
//     },
//     {
//       "name": "Venmo",
//       "url": "https://account.venmo.com/u/{username}"
//     },
//     {
//       "name": "Vero",
//       "url": "https://vero.co/{username}"
//     },
//     {
//       "name": "Vimeo",
//       "url": "https://vimeo.com/{username}"
//     },
//     {
//       "name": "VirusTotal",
//       "url": "https://www.virustotal.com/gui/user/{username}"
//     },
//     {
//       "name": "WICG Forum",
//       "url": "https://discourse.wicg.io/u/{username}/summary"
//     },
//     {
//       "name": "Warrior Forum",
//       "url": "https://www.warriorforum.com/members/{username}.html"
//     },
//     {
//       "name": "Wattpad",
//       "url": "https://www.wattpad.com/user/{username}"
//     },
//     {
//       "name": "WebNode",
//       "url": "https://{username}.webnode.cz/"
//     },
//     {
//       "name": "Weblate",
//       "url": "https://hosted.weblate.org/user/{username}/"
//     },
//     {
//       "name": "Weebly",
//       "url": "https://{username}.weebly.com/"
//     },
//     {
//       "name": "Wikidot",
//       "url": "http://www.wikidot.com/user:info/{username}"
//     },
//     {
//       "name": "Wikipedia",
//       "url": "https://en.wikipedia.org/wiki/Special:CentralAuth/{username}?uselang=qqx"
//     },
//     {
//       "name": "Windy",
//       "url": "https://community.windy.com/user/{username}"
//     },
//     {
//       "name": "Wix",
//       "url": "https://{username}.wix.com"
//     },
//     {
//       "name": "WolframalphaForum",
//       "url": "https://community.wolfram.com/web/{username}/home"
//     },
//     {
//       "name": "WordPress",
//       "url": "https://{username}.wordpress.com/"
//     },
//     {
//       "name": "WordPressOrg",
//       "url": "https://profiles.wordpress.org/{username}/"
//     },
//     {
//       "name": "Wordnik",
//       "url": "https://www.wordnik.com/users/{username}"
//     },
//     {
//       "name": "Wykop",
//       "url": "https://www.wykop.pl/ludzie/{username}"
//     },
//     {
//       "name": "Xbox Gamertag",
//       "url": "https://xboxgamertag.com/search/{username}"
//     },
//     {
//       "name": "Xvideos",
//       "url": "https://xvideos.com/profiles/{username}"
//     },
//     {
//       "name": "YandexMusic",
//       "url": "https://music.yandex/users/{username}/playlists"
//     },
//     {
//       "name": "YouNow",
//       "url": "https://www.younow.com/{username}/"
//     },
//     {
//       "name": "YouPic",
//       "url": "https://youpic.com/photographer/{username}/"
//     },
//     {
//       "name": "YouPorn",
//       "url": "https://youporn.com/uservids/{username}"
//     },
//     {
//       "name": "YouTube",
//       "url": "https://www.youtube.com/@{username}"
//     },
//     {
//       "name": "akniga",
//       "url": "https://akniga.org/profile/{username}"
//     },
//     {
//       "name": "authorSTREAM",
//       "url": "http://www.authorstream.com/{username}/"
//     },
//     {
//       "name": "babyRU",
//       "url": "https://www.baby.ru/u/{username}/"
//     },
//     {
//       "name": "babyblogRU",
//       "url": "https://www.babyblog.ru/user/{username}"
//     },
//     {
//       "name": "chaos.social",
//       "url": "https://chaos.social/@{username}"
//     },
//     {
//       "name": "couchsurfing",
//       "url": "https://www.couchsurfing.com/people/{username}"
//     },
//     {
//       "name": "d3RU",
//       "url": "https://d3.ru/user/{username}/posts"
//     },
//     {
//       "name": "dailykos",
//       "url": "https://www.dailykos.com/user/{username}"
//     },
//     {
//       "name": "datingRU",
//       "url": "http://dating.ru/{username}"
//     },
//     {
//       "name": "devRant",
//       "url": "https://devrant.com/users/{username}"
//     },
//     {
//       "name": "drive2",
//       "url": "https://www.drive2.ru/users/{username}"
//     },
//     {
//       "name": "eGPU",
//       "url": "https://egpu.io/forums/profile/{username}/"
//     },
//     {
//       "name": "eintracht",
//       "url": "https://community.eintracht.de/fans/{username}"
//     },
//     {
//       "name": "fixya",
//       "url": "https://www.fixya.com/users/{username}"
//     },
//     {
//       "name": "fl",
//       "url": "https://www.fl.ru/users/{username}"
//     },
//     {
//       "name": "forum_guns",
//       "url": "https://forum.guns.ru/forummisc/blog/{username}"
//     },
//     {
//       "name": "freecodecamp",
//       "url": "https://www.freecodecamp.org/{username}"
//     },
//     {
//       "name": "furaffinity",
//       "url": "https://www.furaffinity.net/user/{username}"
//     },
//     {
//       "name": "geocaching",
//       "url": "https://www.geocaching.com/p/default.aspx?u={username}"
//     },
//     {
//       "name": "gfycat",
//       "url": "https://gfycat.com/@{username}"
//     },
//     {
//       "name": "habr",
//       "url": "https://habr.com/ru/users/{username}"
//     },
//     {
//       "name": "hackster",
//       "url": "https://www.hackster.io/{username}"
//     },
//     {
//       "name": "hunting",
//       "url": "https://www.hunting.ru/forum/members/?username={username}"
//     },
//     {
//       "name": "iMGSRC.RU",
//       "url": "https://imgsrc.ru/main/user.php?user={username}"
//     },
//     {
//       "name": "igromania",
//       "url": "http://forum.igromania.ru/member.php?username={username}"
//     },
//     {
//       "name": "interpals",
//       "url": "https://www.interpals.net/{username}"
//     },
//     {
//       "name": "irecommend",
//       "url": "https://irecommend.ru/users/{username}"
//     },
//     {
//       "name": "jbzd.com.pl",
//       "url": "https://jbzd.com.pl/uzytkownik/{username}"
//     },
//     {
//       "name": "jeuxvideo",
//       "url": "https://www.jeuxvideo.com/profil/{username}"
//     },
//     {
//       "name": "kofi",
//       "url": "https://ko-fi.com/{username}"
//     },
//     {
//       "name": "kwork",
//       "url": "https://kwork.ru/user/{username}"
//     },
//     {
//       "name": "last.fm",
//       "url": "https://last.fm/user/{username}"
//     },
//     {
//       "name": "leasehackr",
//       "url": "https://forum.leasehackr.com/u/{username}/summary/"
//     },
//     {
//       "name": "livelib",
//       "url": "https://www.livelib.ru/reader/{username}"
//     },
//     {
//       "name": "mastodon.cloud",
//       "url": "https://mastodon.cloud/@{username}"
//     },
//     {
//       "name": "mastodon.social",
//       "url": "https://mastodon.social/@{username}"
//     },
//     {
//       "name": "mastodon.technology",
//       "url": "https://mastodon.technology/@{username}"
//     },
//     {
//       "name": "mastodon.xyz",
//       "url": "https://mastodon.xyz/@{username}"
//     },
//     {
//       "name": "mercadolivre",
//       "url": "https://www.mercadolivre.com.br/perfil/{username}"
//     },
//     {
//       "name": "minds",
//       "url": "https://www.minds.com/{username}/"
//     },
//     {
//       "name": "moikrug",
//       "url": "https://moikrug.ru/{username}"
//     },
//     {
//       "name": "mstdn.io",
//       "url": "https://mstdn.io/@{username}"
//     },
//     {
//       "name": "nairaland.com",
//       "url": "https://www.nairaland.com/{username}"
//     },
//     {
//       "name": "nnRU",
//       "url": "https://{username}.www.nn.ru/"
//     },
//     {
//       "name": "note",
//       "url": "https://note.com/{username}"
//     },
//     {
//       "name": "npm",
//       "url": "https://www.npmjs.com/~{username}"
//     },
//     {
//       "name": "opennet",
//       "url": "https://www.opennet.ru/~{username}"
//     },
//     {
//       "name": "osu!",
//       "url": "https://osu.ppy.sh/users/{username}"
//     },
//     {
//       "name": "phpRU",
//       "url": "https://php.ru/forum/members/?username={username}"
//     },
//     {
//       "name": "pikabu",
//       "url": "https://pikabu.ru/@{username}"
//     },
//     {
//       "name": "pr0gramm",
//       "url": "https://pr0gramm.com/user/{username}"
//     },
//     {
//       "name": "prog.hu",
//       "url": "https://prog.hu/azonosito/info/{username}"
//     },
//     {
//       "name": "queer.af",
//       "url": "https://queer.af/@{username}"
//     },
//     {
//       "name": "satsisRU",
//       "url": "https://satsis.info/user/{username}"
//     },
//     {
//       "name": "sessionize",
//       "url": "https://sessionize.com/{username}"
//     },
//     {
//       "name": "skyrock",
//       "url": "https://{username}.skyrock.com/"
//     },
//     {
//       "name": "social.tchncs.de",
//       "url": "https://social.tchncs.de/@{username}"
//     },
//     {
//       "name": "spletnik",
//       "url": "https://spletnik.ru/user/{username}"
//     },
//     {
//       "name": "svidbook",
//       "url": "https://www.svidbook.ru/user/{username}"
//     },
//     {
//       "name": "threads",
//       "url": "https://www.threads.net/@{username}"
//     },
//     {
//       "name": "toster",
//       "url": "https://www.toster.ru/user/{username}/answers"
//     },
//     {
//       "name": "uid",
//       "url": "http://uid.me/{username}"
//     },
//     {
//       "name": "wiki.vg",
//       "url": "https://wiki.vg/User:{username}"
//     },
//     {
//       "name": "xHamster",
//       "url": "https://xhamster.com/users/{username}"
//     },
//     {
//       "name": "znanylekarz.pl",
//       "url": "https://www.znanylekarz.pl/{username}"
//     }
//   ]