const createDreamTeam = members => Array.isArray(members) ? members
  .slice()
  .filter(item => typeof item === 'string')
  .map(item => item.trim()[0].toUpperCase())
  .sort()
  .join('') :
  false;

module.exports = createDreamTeam;