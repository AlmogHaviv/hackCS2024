import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from 'react';

/**
 * Data table component
 * @param size <'small', 'medium', 'large'> - Table width size
 * @param rows <object[]> - Table data
 * @param cols <object[]> - Table columns
 */
export default function Table(props) {
  const [tableWidth, setTableWidth] = useState('80vw');

  useEffect(() => {
    switch (props.size) {
      case 'small':
        setTableWidth('20vw');
        break;
      case 'medium':
        setTableWidth('50vw');
        break;
      case 'large':
        setTableWidth('80vw');
        break;
      default:
        setTableWidth('80vw');
    }
  }, [props.size]);

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div
      className="ag-theme-quartz"
      style={{ height: 'calc(100% - 100px)', width: tableWidth }}
    >
      <AgGridReact
        rowData={props.rows}
        columnDefs={props.cols}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={100}
        paginationPageSizeSelector={[20, 50, 100, 200, 500, 1000]}
      />
    </div>
  );
}
