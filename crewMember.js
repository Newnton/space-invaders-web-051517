class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  verifyCrew(){
    if (this.currentShip != "Looking for a Rig") {return true}
    else {return false}
  }

  hadNoEffect(){return 'had no effect'}

  engageWarpDrive(){
    if (this.verifyCrew()){
      if (this.position === 'Pilot'){this.currentShip.warpDrive = 'engaged!'}
      else{return this.hadNoEffect()}
    } else{return this.hadNoEffect()}
  }

  setsInvisibility(){
    if (this.verifyCrew()){
      if (this.position === 'Defender'){this.currentShip.cloaked = true}
      else{return this.hadNoEffect()}
    } else{return this.hadNoEffect()}
  }

  chargePhasers(){
    if (this.verifyCrew()){
      if (this.position === 'Gunner'){this.currentShip.phasersCharge = 'charged!'}
      else{return this.hadNoEffect()}
    } else {return this.hadNoEffect()}
  }
}
