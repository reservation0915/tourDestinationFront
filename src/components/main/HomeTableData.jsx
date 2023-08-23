const HomeTableData = ({ data, row }) => {
    return <tr>
        {row.map(({ value, type }) =>
            <td key={data.id + value}>
                {data[value]}
            </td>
        )}
    </tr >
}
export default HomeTableData