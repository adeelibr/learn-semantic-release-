export const STAR_WAR_CHARACTER_NAMES = [
  'Almec',
  'Amee',
  'Kitster Banai',
  'Darth Bane',
  'Moradmin Bast'
];

export const onGetStarWarCharacterNames = function () {
  console.log('Some names are', STAR_WAR_CHARACTER_NAMES.join(', '));
};

export const sayChewbacaDialogues = function () {
  console.log('Raarghhh! Vaaarrk! Nowrrrrragh!');
};

export { onGetARandomVaderQuote } from './darth-vader';