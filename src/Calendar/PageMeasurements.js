export default class PageMeasurements {
  constructor( measurements = {
    width,
    height,
    padding: {
      top,
      right,
      bottom,
      left,
    },
    borderWidth,
    headerHeight,
    optionsHeight,
  } ) {
    this.measurements = measurements;
    this.measurements.inner = getPageInnermeasurements( measurements );
  }
  getWidth() { return this.measurements.width; }
  getHeight() { return this.measurements.height; }
  getPadding() { return this.measurements.padding; }
  getPaddingTop() { return this.measurements.padding.top; }
  getPaddingRight() { return this.measurements.padding.right; }
  getPaddingBottom() { return this.measurements.padding.bottom; }
  getPaddingLeft() { return this.measurements.padding.left; }
  getInnerWidth() { return this.measurements.inner.width; }
  getInnerHeight() { return this.measurements.inner.height; }
  getBorderWidth() { return this.measurements.borderWidth; }
  getHeaderHeight() { return this.measurements.headerHeight; }
  getOptionsHeight() { return this.measurements.optionsHeight; }
  getDayHeight() {
    return ( this.getInnerHeight() - this.getHeaderHeight() - this.getOptionsHeight() ) / 31;
  }
  getInnerDayHeight() {
    return this.getDayHeight() - 2 * this.getBorderWidth();
  }
}

export class A4Measurements extends PageMeasurements {
  constructor( measurements = {
    padding: {
      top,
      right,
      bottom,
      left,
    },
    borderWidth,
    headerHeight,
    optionsHeight,
  } ) {
    super( {
      width: 210,
      height: 297,
      ...measurements
    } );
  }
}

function getPageInnermeasurements( {
  width,
  height,
  padding: {
    top,
    right,
    bottom,
    left,
  }
} ) {
  return {
    width: width - left - right,
    height: height - top - bottom,
  }
}
