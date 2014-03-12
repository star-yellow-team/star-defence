/**
 * @name Auxiliary
 * 
 * @description Clasa definita pentru 
 * elemente de decor in cadrul hartii
 * */

function Auxiliary(x, y, sprite, spriteSize, rate) {
    this.x          = x;
    this.y          = y;
    this.sprite     = sprite;
    this.spriteSize = spriteSize;
    this.frameNumber= 0;
    this.rate       = rate;
    this.rateNumber = 0;
}

var NUMBER_OF_AUXILIARIES = 5;
