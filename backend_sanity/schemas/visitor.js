export default {
    name:'visitors',
    title:'Visitors Info',
    type:'document',
    fields:[
           {name:'ipaddress',
               title:'IP Address',
               type:'string'
            },
            {
                name:'date',
                title:'Last Sync',
                type:'string'
            },
            {
                name:'c_name',
                title:'Country Name',
                type:'string'
            },
            {
                name:'city',
                title:'City',
                type:'string'
            }
    ]
}