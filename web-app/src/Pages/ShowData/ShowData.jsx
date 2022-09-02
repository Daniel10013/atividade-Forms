import './ShowData.css'

// components
import DataTable from '../../Components/DataTable/DataTable'

function Show() {
  
    return (
        <div className='showData'>
            <div className='filter'>
                <DataTable />
            </div>
        </div>
        )
  }
  
  export default Show
  