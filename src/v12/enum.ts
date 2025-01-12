/**
 * Context Type IDs - The context in which the ad appears
 */
export const ContextType = {
  /** Content-centric context such as newsfeed, article, image gallery, video gallery */
  Content: 1,
  /** Social-centric context such as social network feed, email, chat */
  Social: 2,
  /** Product context such as product listings, details, recommendations, reviews */
  Product: 3,
} as const;

export type ContextType = (typeof ContextType)[keyof typeof ContextType];

/**
 * Context SubType IDs - Next-level context in which the ad appears
 */
export const ContextSubType = {
  /** General or mixed content */
  GeneralContent: 10,
  /** Primarily article content */
  Article: 11,
  /** Primarily video content */
  Video: 12,
  /** Primarily audio content */
  Audio: 13,
  /** Primarily image content */
  Image: 14,
  /** User-generated content - forums, comments, etc */
  UserGenerated: 15,
  /** General social content such as a general social network */
  GeneralSocial: 20,
  /** Primarily email content */
  Email: 21,
  /** Primarily chat/IM content */
  Chat: 22,
  /** Content focused on selling products */
  ProductSales: 30,
  /** Application store/marketplace */
  AppStore: 31,
  /** Product reviews site primarily */
  Reviews: 32,
} as const;

export type ContextSubType =
  (typeof ContextSubType)[keyof typeof ContextSubType];

/**
 * Placement Type IDs - The format of the ad you are purchasing
 */
export const PlacementType = {
  /** In the feed of content */
  FeedContent: 1,
  /** In the atomic unit of the content */
  AtomicContent: 2,
  /** Outside the core content */
  OutsideCore: 3,
  /** Recommendation widget */
  RecommendationWidget: 4,
} as const;

export type PlacementType = (typeof PlacementType)[keyof typeof PlacementType];

/**
 * Data Asset Types - Common asset element types of native advertising
 */
export const DataAssetType = {
  /** Sponsored By message */
  Sponsored: 1,
  /** Descriptive text */
  Desc: 2,
  /** Rating of the product */
  Rating: 3,
  /** Number of social ratings or likes */
  Likes: 4,
  /** Number of downloads/installs */
  Downloads: 5,
  /** Price for product */
  Price: 6,
  /** Sale price */
  SalePrice: 7,
  /** Phone number */
  Phone: 8,
  /** Address */
  Address: 9,
  /** Additional descriptive text */
  Desc2: 10,
  /** Display URL */
  DisplayUrl: 11,
  /** CTA description */
  CtaText: 12,
} as const;

export type DataAssetType = (typeof DataAssetType)[keyof typeof DataAssetType];

/**
 * Image Asset Types - Common image asset element types
 */
export const ImageAssetType = {
  /** Icon image for app icon, brand logo, or similar */
  Icon: 1,
  /** Large image preview for the ad */
  Main: 3,
} as const;

export type ImageAssetType =
  (typeof ImageAssetType)[keyof typeof ImageAssetType];

/**
 * Event Types - Types of events that can be tracked
 */
export const EventType = {
  /** Impression */
  Impression: 1,
  /** Visible impression using MRC definition at 50% in view for 1 second */
  ViewableMrc50: 2,
  /** 100% in view for 1 second */
  ViewableMrc100: 3,
  /** Visible impression for video using MRC definition at 50% in view for 2 seconds */
  ViewableVideo50: 4,
} as const;

export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * Event Tracking Methods - Methods available for tracking events
 */
export const EventTrackingMethod = {
  /** Image-pixel tracking */
  Img: 1,
  /** Javascript-based tracking */
  Js: 2,
} as const;

export type EventTrackingMethod =
  (typeof EventTrackingMethod)[keyof typeof EventTrackingMethod];
