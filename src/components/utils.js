export function exclude(source, keys) {
  return Object.getOwnPropertyNames(source)
    .reduce((filtered, name) => {
      const cashIndex = name.indexOf('$');

      if (keys.indexOf(name) === -1) {
        filtered[name] = source[name];
      }

      return filtered;
    }, {});
}

export function stringifyStyles(styles = {}) {
  return Object.getOwnPropertyNames(styles)
    .reduce((compiled, name) => ([ ...compiled, `${name}: ${styles[name]}` ]), [])
    .join('; ');
}
