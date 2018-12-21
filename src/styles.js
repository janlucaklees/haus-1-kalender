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

const rowHeaderHeight = 25;
const rowDayHeight = ( canvas.height - rowHeaderHeight ) / 31;
const rowDayInnerHeight = rowDayHeight - 2 * borderWidth;

const dayFontSizeScale = 0.55;

const bordered = {
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
  width: '9.5mm',
  textAlign: 'right',
};

const colDayName = {
  width: '10.5mm',
};

const styles = {

  '@global': {
    body: {
      backgroundColor: '#beeeef',
    },
    '@page': {
      margin: 0,
    }
  },

  page: {
    width: `${ page.width }mm`,
    height: `${ page.height }mm`,

    margin: '30mm auto',
    padding: {
      top: `${ page.padding.top }mm`,
      right: `${ page.padding.right }mm`,
      bottom: `${ page.padding.bottom }mm`,
      left: `${ page.padding.left }mm`,
    },

    position: 'relative',
    overflow: 'hidden',
    pageBreakAfter: 'always',

    backgroundColor: '#def',
    boxShadow: '2px 2px 10px 0px #888',

    '@media print': {
      margin: 0,
    },

    '&:before': {
      content: 'url()',
      display: 'block',

      position: 'absolute',
      top: `${ page.padding.top }mm`,
      right: `${ page.padding.right }mm`,
      bottom: `${ page.padding.bottom }mm`,
      left: `${ page.padding.left }mm`,

      border: '1px solid #ddd',

      display: 'none',

      '@media print': {
        display: 'none',
      },
    }
  },

  table: {
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
  },

  colDate: {
    extend : colDate,
  },

  colDayName: {
    extend: colDayName,
  },

  rowHeader: {
    height: `${ rowHeaderHeight }mm`,
  },

  rowDay: {
    height: `${ rowDayHeight }mm`,
    fontSize:  `${ rowDayInnerHeight * dayFontSizeScale }mm`,
    backgroundColor: '#fff',
  },

  rowDay_6: {
    backgroundColor: '#eee',
  },

  rowDay_0: {
    backgroundColor: '#ddd',
  },

  cellOption: {
    textAlign: 'center',
    verticalAlign: 'bottom',
    paddingBottom: '1mm',
  },

  optionLabel: {
    fontSize: '4.5mm',
  },

  cellDayDate: {
    extend: [ bordered, cellDay, colDate ],

    borderRightWidth: 0,
    paddingRight: 0,
  },

  cellDayName: {
    extend: [ bordered, cellDay, colDayName ],

    borderLeftWidth: 0,
    paddingLeft: `${ rowDayHeight * dayFontSizeScale * 0.15 }mm`,
  },

  cell: {
    extend: [ bordered ],
  }
};

export default styles;

function getPageInnerDimensions( page ) {
  return {
    width: page.width - page.padding.left - page.padding.right,
    height: page.height - page.padding.top - page.padding.bottom,
  }
}
