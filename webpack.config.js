const path = require('path');

module.exports = {
  entry: './src/main.ts',  // Punto de entrada de Angular
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.html', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader', // Usamos ts-loader para manejar archivos TypeScript
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader', // Para cargar plantillas HTML
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Para cargar estilos CSS
      },
    ],
  },
  devtool: 'source-map', // Ayuda a depurar el código
};
