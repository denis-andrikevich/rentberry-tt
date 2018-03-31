import { Apartment } from './result.model';


export interface ProfilePictureThumbs {
  user_picture_100: string;
  user_picture_280: string;
}

export interface User {
  id: number;
  type: string;
  nameFirst: string;
  nameMiddle?: any;
  nameLast: string;
  username: string;
  profilePicture: string;
  phone: number;
  birthday: string;
  bio: string;
  facebookUrl?: any;
  linkedinUrl?: any;
  roles: string[];
  isActive: boolean;
  isVerified?: any;
  isRegistered: boolean;
  profilePictureThumbs: ProfilePictureThumbs;
}

export interface ImageThumbs {
  apartment_440: string;
  apartment_1000: string;
}

export interface ApartmentPicture {
  id: number;
  userId: number;
  apartmentId: number;
  image: string;
  order?: any;
  isCover: boolean;
  updatedAt: string;
  createdAt: string;
  imageThumbs: ImageThumbs;
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Geometry {
  location: Location;
}

export interface Aspect {
  rating: number;
  type: string;
}

export interface Review {
  aspects: Aspect[];
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
}

export interface Place {
  address_components: AddressComponent[];
  adr_address: string;
  formatted_address: string;
  formatted_phone_number: string;
  geometry: Geometry;
  icon: string;
  id: string;
  international_phone_number: string;
  name: string;
  place_id: string;
  price_level: number;
  rating: number;
  reference: string;
  reviews: Review[];
  scope: string;
  types: string[];
  url: string;
  user_ratings_total: number;
  utc_offset: number;
  vicinity: string;
  website: string;
  html_attributions: any[];
}

export interface Apartment {
  id: number;
  user: User;
  userId: number;
  apartmentPictures: ApartmentPicture[];
  name: string;
  address: string;
  place: Place;
  apartmentNumber: string;
  openHouse?: any;
  available?: any;
  bedrooms: number;
  baths: number;
  space: number;
  type: string;
  price: number;
  deposit: number;
  priceHighest: number;
  depositHighest: number;
  depositPet?: number;
  description: string;
  washerUnit: boolean;
  washerSite: boolean;
  parking: boolean;
  smoking: boolean;
  airConditioning: boolean;
  pets: boolean;
  heating: boolean;
  hardwoodFloors: boolean;
  pool: boolean;
  hotTub: boolean;
  elevator: boolean;
  fireplace: boolean;
  doorman: boolean;
  buzzer: boolean;
  wheelchairAccesible: boolean;
  smokeDetector: boolean;
  carbon: boolean;
  isActive: boolean;
  isDeleted: boolean;
  isRented: boolean;
  updatedAt: string;
  createdAt: string;
}

export interface ResultResponse {
  result: Apartment[];
  top: Apartment[];
}
