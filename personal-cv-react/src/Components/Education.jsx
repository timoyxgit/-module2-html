function Education() {
    const tableStyles = {
        borderCollapse: 'collapse',
    };

    const cellStyles = {
        border: '3px solid black',
    };

    return (
         <section className="card">
            <h2>Education</h2>
            <style>{`
                table {
                    border-collapse: collapse;
                }
                table, th, td { 
                    border: 3px solid black;
                }
            `}</style>
                <table border="1">
                <tr>
                    <th>Program</th>
                    <th>Institution</th>
                    <th>Graduated</th>
                </tr>
                <tr>
                    <td> BS Information Technology </td>
                    <td> USTP CDO Campus </td>
                    <td> 2028 </td>
                </tr>
                <tr>
                    <td> computer system servicing </td>
                    <td> Agusan Del Sur National Highschool </td>
                    <td> 2024 </td>
                </tr>
                <tr>
                    <td> Crack  </td>
                    <td> Agusan Del Sur National Highschool </td>
                    <td> 2021 </td>
                </tr>
                <tr>
                    <td> KINGS  </td>
                    <td> Light and life christian learning center </td>
                    <td> 2016 </td>
                </tr>
               
            </table>
        </section>
 );
}
export default Education;