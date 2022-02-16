const axios = require("axios");

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {}
  get paramsMapbox() {
    return {
      access_token: process.env.Mapbox || "",

      limit: 5,
      language: "es",
    };
  }
  async ciudad(lugar = "") {
    const instance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
      params: this.paramsMapbox,
    });
    const resp = await instance.get();
    return resp.data.features.map((lugar) => ({
      id: lugar.id,
      nombre: lugar.place_name,
      lng: lugar.center[0],
      lat: lugar.center[1],
    }));
  }
}

module.exports = Busquedas;
