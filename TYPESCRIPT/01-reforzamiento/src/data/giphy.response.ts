export interface GiphyRandomResponse {
    data: Gif;
    meta: Meta;
}

export interface Gif {
    type:                     string;
    id:                       string;
    url:                      string;
    slug:                     string;
    bitlyGIFURL:              string;
    bitlyURL:                 string;
    embedURL:                 string;
    username:                 string;
    source:                   string;
    title:                    string;
    rating:                   string;
    contentURL:               string;
    sourceTLD:                string;
    sourcePostURL:            string;
    isSticker:                number;
    importDatetime:           Date;
    trendingDatetime:         string;
    images:                   Images;
    user:                     User;
    analyticsResponsePayload: string;
    analytics:                Analytics;
    altText:                  string;
    isLowContrast:            boolean;
}

export interface Analytics {
    onload:  Onclick;
    onclick: Onclick;
    onsent:  Onclick;
}

export interface Onclick {
    url: string;
}

export interface Images {
    original:               FixedHeight;
    downsized:              The480_WStill;
    downsizedLarge:         The480_WStill;
    downsizedMedium:        The480_WStill;
    downsizedSmall:         DownsizedSmall;
    downsizedStill:         The480_WStill;
    fixedHeight:            FixedHeight;
    fixedHeightDownsampled: FixedHeight;
    fixedHeightSmall:       FixedHeight;
    fixedHeightSmallStill:  The480_WStill;
    fixedHeightStill:       The480_WStill;
    fixedWidth:             FixedHeight;
    fixedWidthDownsampled:  FixedHeight;
    fixedWidthSmall:        FixedHeight;
    fixedWidthSmallStill:   The480_WStill;
    fixedWidthStill:        The480_WStill;
    looping:                Looping;
    originalStill:          The480_WStill;
    originalMp4:            DownsizedSmall;
    preview:                DownsizedSmall;
    previewGIF:             The480_WStill;
    previewWebp:            The480_WStill;
    the480WStill:           The480_WStill;
}

export interface The480_WStill {
    height: string;
    width:  string;
    size:   string;
    url:    string;
}

export interface DownsizedSmall {
    height:  string;
    width:   string;
    mp4Size: string;
    mp4:     string;
}

export interface FixedHeight {
    height:   string;
    width:    string;
    size:     string;
    url:      string;
    mp4Size?: string;
    mp4?:     string;
    webpSize: string;
    webp:     string;
    frames?:  string;
    hash?:    string;
}

export interface Looping {
    mp4Size: string;
    mp4:     string;
}

export interface User {
    avatarURL:    string;
    bannerImage:  string;
    bannerURL:    string;
    profileURL:   string;
    username:     string;
    displayName:  string;
    description:  string;
    instagramURL: string;
    websiteURL:   string;
    isVerified:   boolean;
}

export interface Meta {
    status:     number;
    msg:        string;
    responseID: string;
}
