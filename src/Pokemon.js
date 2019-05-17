class Pokemon {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.sprite = String(data.sprites.front_default);
		this.type = data.types[0].type.name;
		this.stats = 
		console.log(data.stats)
	}
}

export default Pokemon;