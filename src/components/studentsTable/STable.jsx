import "./sTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../sTableSource"
import { Link } from "react-router-dom";
import { useState } from "react";

const STable = () => {

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
        <div className="staudentsTable" >
          <div className="title">Students Table</div>
            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            /> 
        </div>
    )
}
export default STable;