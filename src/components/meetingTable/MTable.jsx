import "./mTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../dTableSource"
import { Link } from "react-router-dom";
import { useState } from "react";


const MTable = () => {

    const [data, setData] = useState(userRows);
  
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
  
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
  
  
      return(
        
          <div className="meetingsTable" >
            <div className="title">Meetings Table</div>
              <DataGrid
                  rows={userRows}
                  columns={userColumns.concat(actionColumn)}
                  pageSize={8}
                  rowsPerPageOptions={[8]}
                  checkboxSelection
              /> 
          </div>
      )
  }
  export default MTable;
