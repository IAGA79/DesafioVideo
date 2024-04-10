// Definición de la clase hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        // Llamada al método insertarVideo de Multimedia
        this.insertarVideo(this._id);
    }

    setInicio(tiempo) {
        const urlWithStartTime = `${this._url}?start=${tiempo}`;
        super.setInicio(); // Llamada al método de la clase padre
        this._url = urlWithStartTime;
    }
}
