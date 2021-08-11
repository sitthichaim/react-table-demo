import makeData from './makeData'
import TableRederer from './TableRender'
import './App.css'

function App() {
  const data = makeData(20, [])
  const columns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Age',
          accessor: 'age',
        },
        {
          Header: 'Visits',
          accessor: 'visits',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Profile Progress',
          accessor: 'progress',
        },
      ],
    },
  ]

  return (
    <>
      <TableRederer columns={columns} data={data} />
    </>
  )
}

export default App
