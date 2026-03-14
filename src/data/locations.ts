export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "burton-upon-trent",
  name: "Burton upon Trent",
  countyOrRegion: "Staffordshire",
  latitude: 52.8069,
  longitude: -1.6411,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "uttoxeter",
    name: "Uttoxeter",
    countyOrRegion: "Staffordshire",
    latitude: 52.8982,
    longitude: -1.8601,
  },
  {
    slug: "swadlincote",
    name: "Swadlincote",
    countyOrRegion: "Derbyshire",
    latitude: 52.7740,
    longitude: -1.5573,
  },
  {
    slug: "lichfield",
    name: "Lichfield",
    countyOrRegion: "Staffordshire",
    latitude: 52.6818,
    longitude: -1.8272,
  },
  {
    slug: "tamworth",
    name: "Tamworth",
    countyOrRegion: "Staffordshire",
    latitude: 52.6345,
    longitude: -1.6910,
  },
  {
    slug: "derby",
    name: "Derby",
    countyOrRegion: "Derbyshire",
    latitude: 52.9225,
    longitude: -1.4746,
  },
  {
    slug: "ashby-de-la-zouch",
    name: "Ashby-de-la-Zouch",
    countyOrRegion: "Leicestershire",
    latitude: 52.7465,
    longitude: -1.4709,
  },
  {
    slug: "rugeley",
    name: "Rugeley",
    countyOrRegion: "Staffordshire",
    latitude: 52.7608,
    longitude: -1.9356,
  },
  {
    slug: "tutbury",
    name: "Tutbury",
    countyOrRegion: "Staffordshire",
    latitude: 52.8598,
    longitude: -1.6827,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
