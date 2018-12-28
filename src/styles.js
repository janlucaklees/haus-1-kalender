const page = {
  width: 210,
  height: 297,
  padding: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  }
};

const canvas = getPageInnerDimensions( page );

const borderWidth = 0.2;

const rowHeaderHeight = 12;
const rowOptionsHeight = 12;
const rowDayHeight = ( canvas.height - rowHeaderHeight - rowOptionsHeight ) / 31;
const rowDayInnerHeight = rowDayHeight - 2 * borderWidth;

const dayFontSizeScale = 0.55;

const cell = {
  border: {
    width: `${ borderWidth }mm`,
    style: 'solid',
    color: 'black',
  }
};

const cellDay = {
  verticalAlign: 'middle',
}

const colDate = {
  width: '9mm',
  textAlign: 'right',
};

const colDayName = {
  width: '10.3mm',
};

const styles = {

  '@global': {
    body: {
      backgroundColor: '#ddd',
    },
    '@page': {
      margin: 0,
    }
  },

  page: {
    width: `${ page.width }mm`,
    height: `${ page.height }mm`,

    padding: {
      top: `${ page.padding.top }mm`,
      right: `${ page.padding.right }mm`,
      bottom: `${ page.padding.bottom }mm`,
      left: `${ page.padding.left }mm`,
    },

    position: 'relative',
    overflow: 'hidden',
    pageBreakAfter: 'always',

    backgroundColor: '#fff',
    boxShadow: '2px 2px 10px 0px #888',

    fontFamily: "'Buenard', serif",

    '@media print': {
      margin: 0,
      boxShadow: 'none',
    },

    '&:before': {
      display: 'block',

      objecFit: 'cover',

      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
  },

  table: {
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
  },

  rowMonthHeader: {
    height: `${ rowHeaderHeight }mm`,
  },

  monthHeader: {
    position: 'relative',
    paddingTop: '0mm',
    paddingLeft: '6mm',
  },

  monthNumber: {
    position: 'absolute',
    top: '-27mm',
    left: '-8mm',

    fontSize: '37mm',
    fontWeight: 'bold',

    opacity: 0.05,
    display: 'none',
  },

  monthName: {
    fontSize: '8mm',
    fontWeight: 'bold',
  },

  colDate: {
    extend : colDate,
  },

  colDayName: {
    extend: colDayName,
  },

  floorLabel: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    fontSize: '5mm',
  },

  rowOptions: {
    height: `${ rowOptionsHeight }mm`,
  },

  rowDay: {
    height: `${ rowDayHeight }mm`,
    fontSize:  `${ rowDayInnerHeight * dayFontSizeScale }mm`,
    backgroundColor: '#fff',
  },

  rowDay_6: {
    backgroundColor: '#f7f8fb',
  },

  rowDay_0: {
    backgroundColor: '#eff0f2',
  },

  cellOption: {
    textAlign: 'center',
    verticalAlign: 'bottom',
    paddingBottom: '1mm',
  },

  cellDayDate: {
    extend: [ cell, cellDay, colDate ],

    borderRightWidth: 0,
    paddingRight: 0,
  },

  cellDayName: {
    extend: [ cell, cellDay, colDayName ],

    borderLeftWidth: 0,
    paddingLeft: `${ rowDayHeight * dayFontSizeScale * 0.15 }mm`,
  },

  cell: {
    extend: [ cell ],
  }
};

export default styles;

function getPageInnerDimensions( page ) {
  return {
    width: page.width - page.padding.left - page.padding.right,
    height: page.height - page.padding.top - page.padding.bottom,
  }
}
