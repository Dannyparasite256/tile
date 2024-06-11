document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate-btn").addEventListener("click", function() {
        calculateTiles();
    });
});

function calculateTiles() {
    var roomLengthFeet = parseFloat(document.getElementById("room-length").value);
    var roomWidthFeet = parseFloat(document.getElementById("room-width").value);
    var roomAreaSqFeet = roomLengthFeet * roomWidthFeet;

    var tileLengthCm = parseFloat(document.getElementById("tile-length").value);
    var tileWidthCm = parseFloat(document.getElementById("tile-width").value);

    // Convert tile dimensions from cm to feet
    var tileLengthFeet = tileLengthCm / 30.48;
    var tileWidthFeet = tileWidthCm / 30.48;

    var tileAreaSqFeet = tileLengthFeet * tileWidthFeet;

    var tilesPerBox = parseInt(document.getElementById("tiles-per-box").value);

    var totalTilesNeeded = roomAreaSqFeet / tileAreaSqFeet;
    var totalBoxesNeeded = Math.round(totalTilesNeeded / tilesPerBox);

    document.getElementById("result").innerText = "Total Boxes Needed: " + totalBoxesNeeded;
}
