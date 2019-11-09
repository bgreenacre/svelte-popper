export function exclude(source, keys) {
  return Object.getOwnPropertyNames(source)
    .reduce((filtered, name) => {
      if (keys.indexOf(name) !== -1) {
        return filtered;
      }

      return { ...filtered, [name]: source[name] };
    }, {});
}
