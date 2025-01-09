/**
 * Context Type IDs - The context in which the ad appears
 */
export enum ContextType {
  /** Content-centric context such as newsfeed, article, image gallery, video gallery */
  Content = 1,
  /** Social-centric context such as social network feed, email, chat */
  Social = 2,
  /** Product context such as product listings, details, recommendations, reviews */
  Product = 3,
}

/**
 * Context SubType IDs - Next-level context in which the ad appears
 */
export enum ContextSubType {
  /** General or mixed content */
  GeneralContent = 10,
  /** Primarily article content */
  Article = 11,
  /** Primarily video content */
  Video = 12,
  /** Primarily audio content */
  Audio = 13,
  /** Primarily image content */
  Image = 14,
  /** User-generated content - forums, comments, etc */
  UserGenerated = 15,
  /** General social content such as a general social network */
  GeneralSocial = 20,
  /** Primarily email content */
  Email = 21,
  /** Primarily chat/IM content */
  Chat = 22,
  /** Content focused on selling products */
  ProductSales = 30,
  /** Application store/marketplace */
  AppStore = 31,
  /** Product reviews site primarily */
  Reviews = 32,
}

/**
 * Placement Type IDs - The format of the ad you are purchasing
 */
export enum PlacementType {
  /** In the feed of content */
  FeedContent = 1,
  /** In the atomic unit of the content */
  AtomicContent = 2,
  /** Outside the core content */
  OutsideCore = 3,
  /** Recommendation widget */
  RecommendationWidget = 4,
}

/**
 * Data Asset Types - Common asset element types of native advertising
 */
export enum DataAssetType {
  /** Sponsored By message */
  Sponsored = 1,
  /** Descriptive text */
  Desc = 2,
  /** Rating of the product */
  Rating = 3,
  /** Number of social ratings or likes */
  Likes = 4,
  /** Number of downloads/installs */
  Downloads = 5,
  /** Price for product */
  Price = 6,
  /** Sale price */
  SalePrice = 7,
  /** Phone number */
  Phone = 8,
  /** Address */
  Address = 9,
  /** Additional descriptive text */
  Desc2 = 10,
  /** Display URL */
  DisplayUrl = 11,
  /** CTA description */
  CtaText = 12,
}

/**
 * Image Asset Types - Common image asset element types
 */
export enum ImageAssetType {
  /** Icon image for app icon, brand logo, or similar */
  Icon = 1,
  /** Large image preview for the ad */
  Main = 3,
}

/**
 * Event Types - Types of events that can be tracked
 */
export enum EventType {
  /** Impression */
  Impression = 1,
  /** Visible impression using MRC definition at 50% in view for 1 second */
  ViewableMrc50 = 2,
  /** 100% in view for 1 second */
  ViewableMrc100 = 3,
  /** Visible impression for video using MRC definition at 50% in view for 2 seconds */
  ViewableVideo50 = 4,
}

/**
 * Event Tracking Methods - Methods available for tracking events
 */
export enum EventTrackingMethod {
  /** Image-pixel tracking */
  Img = 1,
  /** Javascript-based tracking */
  Js = 2,
}
