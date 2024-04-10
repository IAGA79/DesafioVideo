// Instancias de Reproductor para cada tipo de video
const musicaPlayer = new Reproductor(
  "https://www.youtube.com/embed/c1KfDkPmB-8",
  "musica"
);
const peliculasPlayer = new Reproductor(
  "https://www.youtube.com/embed/RZtG8wEWcRo",
  "peliculas"
);
const seriesPlayer = new Reproductor(
  "https://www.youtube.com/embed/V0_Lp4xFiQA",
  "series"
);

// Invocación de los métodos
musicaPlayer.playMultimedia();
peliculasPlayer.playMultimedia();
seriesPlayer.playMultimedia();

// Modificar el tiempo de inicio en una instancia
musicaPlayer.setInicio(30); // Iniciar el video de música en el segundo 30
musicaPlayer.playMultimedia(); // Volver a reproducir el video de música con el tiempo de inicio modificado

