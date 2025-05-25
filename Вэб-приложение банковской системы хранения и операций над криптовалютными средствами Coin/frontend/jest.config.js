module.exports = {
  transform: {
    '\\.js$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Настройте типы файлов по мере необходимости
    // Для других типов файлов, таких как CSS, вы можете добавить больше сопоставлений
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Пример для модулей CSS
  },
};
