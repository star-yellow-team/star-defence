/**
* @author Ionut
* Definirea Turret-ului
* daca lipseste ceva va rog spuneti
*/
function turret(name, damage, range, attack_speed, projectile_type, damage_type, level, price, skin, detection, kills, requirement, footprint, portrait, description, icon)
{
this.name=name;
this.damage=damage;
this.range=range;
this.attack_speed=attack_speed;
this.projectile_type=projectile_type;
this.damage_type=damage_type;
this.level=level;
this.price=price;
this.detection=detection;
this.kills=kills;
this.skin=skin;
this.requirement=requirement;
this.icon=icon;
this.footprint=footprint;
this.description=description
//optional
this.portrait=portrait

// Aici nu stiu inca cum vom face sa atace turnul.
function attack()
{

}
/* Cred ca atacul va depinde de o functie de detectat cand inamicul intra in range */
function detect_enemy()
{

}

/* Aici mai modificam pentru ca imi trebuie variabila in care stocam banii, skin-urile pe care le va avea fiecare turret la fiecare nivel */
function upgrade()
{
money=money-price;
this.skin="newskin.jpg"
}

}

