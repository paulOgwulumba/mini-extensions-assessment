import Airtable from 'airtable';

Airtable.configure({
    apiKey: 'keydIhqb7naJgNJF7',// process.env.API_KEY,
    endpointUrl: "https://api.airtable.com",
});

const base = Airtable.base('app8ZbcPx7dkpOnP0');

const fetchClassesOfStudent = (studentName: string) => {
    return new Promise((resolve, reject) => {
        let dataRetrieved: any[] = [];
        base('Students')
            .select({
                view: "Grid view",
                fields: ['Name', 'Classes'],
                filterByFormula: `({Name} = '${studentName}')`,
            })
            .eachPage((records, fetchNextPage) => {  
                console.log(records)
                dataRetrieved.push(records);    
                fetchNextPage();
                }, (err) => {
                    if (err) {
                      console.error(err);
                    }

                    console.log(dataRetrieved)
                    
                    resolve(dataRetrieved[0][0].fields?.Classes || []);
                });   
    })
    
};

const fetchStudentIDsAndClassNames = (classId: any) => {

    return new Promise((resolve, reject) =>{
        let dataRetrieved: any[] = [];

        for (let id of classId) {
            base('Classes')
                // .find(id, (error, record) => {
                //     dataRetrieved.push(record);
                // })
                .select({
                    filterByFormula: `({ID} = '${id}')`
                })
                .all((error, records) => {
                    console.log(records)
                })
        }
        // console.log(dataRetrieved);
        resolve(dataRetrieved)
    })
}

export const UserService = {
    fetchClassesOfStudent,
    fetchStudentIDsAndClassNames,
}