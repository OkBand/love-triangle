/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var l = preferences.length;
  var triangles = 0;
  var x, y, z, i;
  for (i = 0; i <= l; i++){
    x = preferences[i];
    y = preferences[x - 1];
    z = preferences[y - 1];
    if (z === i + 1) {
        triangles++;}
}
return Math.floor(triangles/3);
};
