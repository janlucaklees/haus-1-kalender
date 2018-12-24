export function hexColor( props, propName, componentName ) {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(props[propName])) {
    return new Error(
      'Invalid hex color `' + props[propName] + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
};
