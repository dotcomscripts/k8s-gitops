// Torrent content layout: Original
// Default Torrent Management Mode: Automatic
// Default Save Path: /media/downloads/torrents/complete
// Incomplete Save Path: /media/downloads/torrents/incomplete

module.exports = {
  delay: 20,
  port: process.env.PORT || 2468,
  qbittorrentUrl: "http://qbittorrent.media.svc.cluster.local:8080",

  torznab: [
    `http://prowlarr.media.svc.cluster.local:9696/10/api?apikey=$${process.env.PROWLARR_API_KEY}`, // ant
    `http://prowlarr.media.svc.cluster.local:9696/9/api?apikey=$${process.env.PROWLARR_API_KEY}`,  // at
    `http://prowlarr.media.svc.cluster.local:9696/4/api?apikey=$${process.env.PROWLARR_API_KEY}`,  // blu
    `http://prowlarr.media.svc.cluster.local:9696/2/api?apikey=$${process.env.PROWLARR_API_KEY}`,  // fl
    `http://prowlarr.media.svc.cluster.local:9696/6/api?apikey=$${process.env.PROWLARR_API_KEY}`,  // hdt
    `http://prowlarr.media.svc.cluster.local:9696/11/api?apikey=$${process.env.PROWLARR_API_KEY}`, // ipt
    `http://prowlarr.media.svc.cluster.local:9696/8/api?apikey=$${process.env.PROWLARR_API_KEY}`,  // phd
    `http://prowlarr.media.svc.cluster.local:9696/5/api?apikey=$${process.env.PROWLARR_API_KEY}`,  // st
    `http://prowlarr.media.svc.cluster.local:9696/1/api?apikey=$${process.env.PROWLARR_API_KEY}`,  // td
    `http://prowlarr.media.svc.cluster.local:9696/3/api?apikey=$${process.env.PROWLARR_API_KEY}`,  // tl
    `http://prowlarr.media.svc.cluster.local:9696/7/api?apikey=$${process.env.PROWLARR_API_KEY}`,  // ts
  ],

  apiAuth: false,
  action: "inject",
  matchMode: "safe",
  skipRecheck: true,
  duplicateCategories: true,

  includeNonVideos: true,
  includeEpisodes: true,
  includeSingleEpisodes: true,

  outputDir: "/config",
  torrentDir: "/config/qBittorrent/BT_backup",
};
