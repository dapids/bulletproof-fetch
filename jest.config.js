module.exports = {
  automock: false,
  collectCoverage: false,
  collectCoverageFrom: ['src/*.{js}'],
  coverageReporters: ['html'],
  setupFiles: ['./setupTests.js'],
}
