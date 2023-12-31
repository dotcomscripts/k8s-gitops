// Torrent content layout: Original
// Default Torrent Management Mode: Automatic
// Default Save Path: /media/downloads/torrents/complete
// Incomplete Save Path: /media/downloads/torrents/incomplete
// External program on finished: /scripts/xseed.sh "%F"

module.exports = {
  delay: 15,
  qbittorrentUrl: "http://localhost:8080",

  torznab: [
    "http://prowlarr.media.svc.cluster.local:9696/1/api?apikey={{ .PROWLARR_API_KEY }}", // td
    "http://prowlarr.media.svc.cluster.local:9696/2/api?apikey={{ .PROWLARR_API_KEY }}", // fl
    "http://prowlarr.media.svc.cluster.local:9696/3/api?apikey={{ .PROWLARR_API_KEY }}", // tl
    "http://prowlarr.media.svc.cluster.local:9696/4/api?apikey={{ .PROWLARR_API_KEY }}", // bluT
    "http://prowlarr.media.svc.cluster.local:9696/5/api?apikey={{ .PROWLARR_API_KEY }}", // st
    "http://prowlarr.media.svc.cluster.local:9696/6/api?apikey={{ .PROWLARR_API_KEY }}", // HDT
    "http://prowlarr.media.svc.cluster.local:9696/7/api?apikey={{ .PROWLARR_API_KEY }}", // TS
  ],

  action: "inject",
  includeEpisodes: true,
  includeNonVideos: true,
  duplicateCategories: true,

  matchMode: "safe",
  skipRecheck: true,
  linkType: "hardlink",
  linkDir: "/media/downloads/torrents/complete/xseed",

  // I have sonarr, radarr, and manual categories set in qBittorrent
  // The save paths for them are set to the following:
  dataDirs: [
    "/media/downloads/torrents/complete/sonarr",
    "/media/downloads/torrents/complete/radarr",
    "/media/downloads/torrents/complete/manual",
  ],

  outputDir: "/config/xseed",
  torrentDir: "/config/qBittorrent/BT_backup",
};
