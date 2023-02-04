const developmentChains = ['hardhat', 'localhost'];

// Attributes
const attributes = [
  [
    'Oceanic Blaze, Sunset Haze',
    'Velvet Nightfall, Verdant Whisper',
    'Blushing Petals, Serene Waves',
    'Sunset Symphony, Azure Skies',
    'Celestial Haze, Ethereal Fog',
    'Amber Sunset, Jade Depths',
    'Royal Amethyst, Misty Gray',
    'Gold Sands, Sapphire Dreams',
  ],
  [
    'Midnight Mystery',
    'Dark Charcoal',
    'Deep Space',
    'Celestial Silver',
    'Ethereal Glow',
    'Dreamy Cloud',
  ],
  [
    'Whirling Vortices',
    'Radiant Blossom',
    'Dancing Fireflies',
    'Celestial Swirl',
    'Spiraling Nebula',
    'Celestial Waltz',
    'Glowing Orbs',
    'Radiant Sun',
  ],
  [
    'Shapeshift',
    'Sky Currents',
    'Crystal Ripples',
    'Arctic Mirage',
    'Void Whispers',
    'Dream Drifts',
    'City Seraph',
    'Abyss',
  ],
];

// ERC721
const name = 'Orbs';
const symbol = 'ORBS';
const maxSupply = 1_000;
const maxSupplyMock = 10;
const price = ethers.utils.parseEther('0.01');
const mintLimit = 0;

// Base metadata
const description =
  'An enigma of light, figure, and atmosphere, a singular spectrum frozen in time.';
const backgroundColor = 101010;
const externalUrl = 'https://makesuretofinishwithslash/';
const animationUrl = 'https://samehere/';

// Systems
const expansionCooldown = 60 * 60 * 24;

const BASE_EXPANSION = 100;
const MAX_EXPANSION = 10_000;

module.exports = {
  developmentChains,
  attributes,
  name,
  symbol,
  maxSupply,
  maxSupplyMock,
  price,
  mintLimit,
  description,
  backgroundColor,
  externalUrl,
  animationUrl,
  expansionCooldown,
  BASE_EXPANSION,
  MAX_EXPANSION,
};
