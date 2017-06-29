class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    if (this.crew.length != 0) {
      console.log(this.crew)
      this.docked = false
      this.crew.forEach((crewMember) => {crewMember.currentShip = this})
    } else {this.docked = true}
  }
}
