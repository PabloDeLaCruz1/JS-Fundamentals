function NBAPlayer(name, team, pos) {
    this.name = name
    this.team = team
    this.pos = pos
    this.dunk2 = function () {
        console.log(this.name + " DUNKED!!");

    }
}

const player = new NBAPlayer();

player.name = "Curry"
console.log(player.name)

NBAPlayer.prototype.dunk = function () {
    console.log(this.name + " DUNKED!");
}

player.dunk()
/*
asdhad
da
sd
ad
asd
dd
das
dasds
ds
dda
da
dasdsa
*/