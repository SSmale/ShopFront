module.exports = {
  name: 'shop-front-fed',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/shop-front-fed',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
