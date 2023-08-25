const MypageTable=({data}) =>{
    return <div>
        {data.map(data =>
            <tr>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.phone_number}</td>
                <td>{data.username}</td>
            </tr>
        )}
    </div>
}
export default MypageTable;