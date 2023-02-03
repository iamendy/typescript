var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["WINDOW"] = 0] = "WINDOW";
    SeatChoice[SeatChoice["AISLE"] = 1] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 2] = "MIDDLE";
})(SeatChoice || (SeatChoice = {}));
var selectedSeat = SeatChoice.WINDOW;
console.log(selectedSeat);
