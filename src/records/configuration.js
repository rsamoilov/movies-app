class Configuration {
  setConfiguration(apiConfig) {
    this.imageBaseUrl = apiConfig.images.base_url;
    this.posterSizes = apiConfig.images.poster_sizes;
  }

  getImageUrl(imagePath, sizeIndex = 3) {
    return `${this.imageBaseUrl}${this.posterSizes[sizeIndex]}${imagePath}`;
  }
}

export default new Configuration();
