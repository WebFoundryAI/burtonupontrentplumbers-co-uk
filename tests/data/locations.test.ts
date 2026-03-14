import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 9 locations', () => {
      expect(LOCATIONS).toHaveLength(9);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "burton-upon-trent"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('burton-upon-trent');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 9 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(9);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('burton-upon-trent');
      expect(slugs).toContain('uttoxeter');
      expect(slugs).toContain('swadlincote');
      expect(slugs).toContain('lichfield');
      expect(slugs).toContain('tamworth');
      expect(slugs).toContain('derby');
      expect(slugs).toContain('ashby-de-la-zouch');
      expect(slugs).toContain('rugeley');
      expect(slugs).toContain('tutbury');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "burton-upon-trent"', () => {
      const loc = getLocationBySlug('burton-upon-trent');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Burton upon Trent');
    });

    it('returns correct location for "uttoxeter"', () => {
      const loc = getLocationBySlug('uttoxeter');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Uttoxeter');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
