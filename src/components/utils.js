export function exclude(source, keys) {
  return Object.getOwnPropertyNames(source)
    .reduce((filtered, name) => {
      const cashIndex = name.indexOf('$');

      if ((cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) || keys.indexOf(name) !== -1) {
        return filtered;
      }

      return { ...filtered, [name]: source[name] };
    }, {});
}

export function stringifyStyles(styles = {}) {
  return Object.getOwnPropertyNames(styles)
    .reduce((compiled, name) => ([ ...compiled, `${name}: ${styles[name]}` ]), [])
    .join('; ');
}
