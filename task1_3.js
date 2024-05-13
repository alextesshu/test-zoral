function projectObject(source, prototype) {
  if (prototype === undefined || prototype === null) {
      return source;
  }

  const result = {};

  const prototypeKeys = Object.keys(prototype);

  prototypeKeys.forEach(key => {
      if (source.hasOwnProperty(key)) {
          if (typeof prototype[key] === 'object' && typeof source[key] === 'object' && source[key] !== null) {
              result[key] = projectObject(source[key], prototype[key]);
          } else {
              result[key] = source[key];
          }
      }
  });

  return result;
}

module.exports = projectObject;
