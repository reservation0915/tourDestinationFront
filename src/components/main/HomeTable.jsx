import { useSelector } from "react-redux"
import HomeTableData from "./HomeTableData"

const HomeTable = () => {
    const { all } = useSelector((state) => state.all)
    const row = [
        { name: "id", value: "id"},
        { name: "grade", value: "grade" },
        { name: "period", value: "period" },
        { name: "location", value: "location" },
        { name: "pageLink", value: "pageLink" },
        { name: "pagePicture", value: "pagePicture" },
    ]

    return <table>
        <thead>
            <tr>
                {row.map(({ name }) => <th key={name}>{name}</th>)}
            </tr>
        </thead>
        <tbody>
            {/*{all.map(data =>*/}
            {/*    <HomeTableData data={data} key={data.id} row={row} />*/}
            {/*)}*/}
            {all.map(data =>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.grade}</td>
                    <td>{data.period}</td>
                    <td><a href ={data.pageLink}>사이트이동</a></td>
                    <td><img src={data.pagePicture} width='300'/></td>
                </tr>
            )}
        </tbody>
    </table>
}
export default HomeTable