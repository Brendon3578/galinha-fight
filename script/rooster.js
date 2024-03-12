function capitalize(str) {
  const words = str.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const result = capitalizedWords.join(" ");
  return result;
}

export default class Rooster {
  name = "";
  max_health_points = 0;
  health_points = 0;
  attack = 0;
  defense = 0;
  image_url = "";

  constructor(roosterName) {
    this.name = capitalize(roosterName);
    const HP = this.#generateRandomStats(10, 5); // 5 até 10
    this.max_health_points = HP;
    this.health_points = HP;
    this.defense = this.#generateRandomStats(4); // 0 até 4
    this.attack = this.#generateRandomStats(4, 1); // 1 até 5
    this.image_url = `./assets/img/roosters/${roosterName}.png`;
  }

  getAttackDamage() {
    return Math.floor(Math.random() * this.attack);
  }
  getDefensePoints() {
    return Math.floor(Math.random() * this.defense);
  }
  setDamageOnRooster(damage) {
    this.health_points -= damage;
  }

  /**
   * Gerar stats aleatório com base em um número mínimo e um número máximo
   *
   * @param {*} maximum É o número máximo gerado |Exemplo (10), irá gerár de 0 até 10
   * @param {*} startAt É o número que será adicionado | Exemplo (10) com o máximo 10, irá gerar de no minimo 10 até 20
   * @returns {number} um stats aleatório
   */
  #generateRandomStats(maximum, startAt = 0) {
    return Math.floor(Math.random() * maximum) + startAt;
  }
}
