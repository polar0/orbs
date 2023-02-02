import { create } from 'zustand';
import config from '@/data-config';

export default create((set) => ({
  // Get all trait types
  options: config,
  traits: config.reduce(
    (acc, trait) => {
      // Set it to a default value (the first one)
      acc[trait.type] = trait.values[0];
      return acc;
    },
    { count: 100 },
  ),
  // Set a trait type to a specific value
  setTrait: (type, values) => {
    set((state) => {
      const traits = { ...state.traits };
      traits[type] = values;
      return { traits };
    });
  },

  // Create a metadata object given traits
  getMetadataFromTraits: (traits) =>
    Object.keys(traits).reduce((acc, key) => {
      acc[key] = key === 'count' ? traits[key] : traits[key].name;
      return acc;
    }, {}),

  // Get traits properties given a metadata object
  getTraitsFromMetadata: (metadata) =>
    config.reduce(
      (acc, trait) => {
        const traitData = trait.values.find(
          (value) => value.name === metadata[trait.type],
        );
        acc[trait.type] = traitData;
        return acc;
      },
      { count: metadata.count },
    ),
}));
