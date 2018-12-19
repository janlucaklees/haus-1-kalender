const a4 = {
  width: 210,
  height: 297,
}

const bordered = {
  border: {
    width: '1px',
    style: 'solid',
    color: 'black',
  }
};

const headerHeight = 35;
const dayRowHeight = ( a4.height - headerHeight ) / 31;
const dayFontSizeScale = 0.55;

const dayCell = {
  padding: `${ ( dayRowHeight * ( 1 - dayFontSizeScale ) ) / 2 }mm`,
}

const styles = {
  page: {
    width: `${ a4.width }mm`,
    height: `${ a4.height }mm`,
    pageBreakAfter: 'always',
    boxSizing: 'content-box',
    margin: '30mm',
    backgroundColor: '#fbfdff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  header: {
    height: `${ headerHeight }mm`,
  },
  headerOption: {
    textAlign: 'center',
    verticalAlign: 'bottom',
  },
  day_6: {
    backgroundColor: '#eee',
  },
  day_0: {
    backgroundColor: '#ddd',
  },
  day: {
    height: `${ dayRowHeight }mm`,
    fontSize:  `${ dayRowHeight * dayFontSizeScale }mm`,
  },
  dayDate: {
    extend: [ bordered, dayCell ],

    width: '9.5mm',
    textAlign: 'right',
    borderRightWidth: 0,
    paddingRight: 0,
  },
  dayName: {
    extend: [ bordered, dayCell ],

    width: '10.5mm',
    borderLeftWidth: 0,
    paddingLeft: `${ dayRowHeight * dayFontSizeScale * 0.15 }mm`,
  },
  cell: {
    extend: [ bordered, dayCell ],
  }
};

export default styles;
