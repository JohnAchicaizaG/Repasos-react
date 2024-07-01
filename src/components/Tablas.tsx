import DataTable from 'react-data-table-component';


interface Movie {
    id: number;
    title: string;
    year: string;
}

interface ExpandedComponentProps {
    data: Movie; // Define la propiedad data como un objeto de tipo Movie
}

const ExpandedComponent: React.FC<ExpandedComponentProps> = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
);

const columns = [
    {
        name: 'Title',
        selector: (row: Movie) => row.title,
    },
    {
        name: 'Year',
        selector: (row: Movie) => row.year,
    },
    {
        name: 'consecutivo',
        selector: (row: Movie) => row.id,
    },
];

const data: Movie[] = [
    {
        id: 1,
        title: 'Matrix',
        year: '1988',
    },
    {
        id: 2,
        title: 'Hombres de Negro',
        year: '1984',
    },
]


function TablasReact() {
    return (
            <DataTable
			columns={columns}
			data={data}
            expandableRows
			expandableRowsComponent={ExpandedComponent}
		/>
        
    )
}

export default TablasReact