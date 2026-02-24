export default {
    name:"home",
    type:"document",
    title:'Home',
   groups:[{
        name: 'infoSet',
        title: 'Info',
        options: { columns: 2 },
      }],
    fields:[
        {
            type:"object",
            name:"cover",
            title:'Cover',
            fields:[
                
                    {
                        name:"image",
                        type:'image',
                        title:"file"
                    },
                    {
                        name:"video",
                        type:'mux.video',
                        title:"Video"
                    }
                
            ]

        },
        {
            type:"object",
            name:"coverVert",
            title:'Cover',
            fields:[
                
                    {
                        name:"image",
                        type:'image',
                        title:"file"
                    },
                    {
                        name:"video",
                        type:'mux.video',
                        title:"Video"
                    }
                
            ]

        },
        {
            type:"object",
            name:"shows",
            title:'Shows BG',
            fields:[
                
                    {
                        name:"image",
                        type:'image',
                        title:"file"
                    },
                    {
                        name:"video",
                        type:'mux.video',
                        title:"Video"
                    }
                
            ]

        },
        {
            type:"object",
            name:"showVert",
            title:'Shows BG',
            fields:[
                
                    {
                        name:"image",
                        type:'image',
                        title:"file"
                    },
                    {
                        name:"video",
                        type:'mux.video',
                        title:"Video"
                    }
                
            ]

        }
       
    ],
    // preview: {
    //     select: {
    //       title: 'Home',
    //     }
    //   },
}