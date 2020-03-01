module.exports = function createDreamTeam(members) {
  return (Array.isArray(members)) ? members.filter(a => typeof(a) == "string").map(a => a.replace(/\s/g, '').toUpperCase()[0]).sort().join('') : false;
};