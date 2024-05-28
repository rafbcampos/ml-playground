export function printTable(table: (string|number)[][]): void {
  const columnWidths: number[] = [];

  for (const row of table) {
    for (let i = 0; i < row.length; i++) {
      const cellLength = row[i].toString().length;
      if (columnWidths[i] === undefined || cellLength > columnWidths[i]) {
        columnWidths[i] = cellLength;
      }
    }
  }

  const rowSeparator = '-'.repeat(columnWidths.reduce((a, b) => a + b, 0) + columnWidths.length * 3 - 1);

  console.log(rowSeparator);
  
  for (const row of table) {
    let rowString = '| ';
    for (let i = 0; i < row.length; i++) {
      rowString += row[i].toString().padEnd(columnWidths[i]) + ' | ';
    }
    console.log(rowString);
    console.log(rowSeparator);
  }
}