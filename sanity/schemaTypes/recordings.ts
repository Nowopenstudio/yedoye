export default {
    name:"recordings",
    type:"document",
    title:'Recordings',
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
            type:'string',
            name:'title',
            title:'Title',
        },
        {
            type:'slug',
            name:'slug',
            title:'Slug',
            group:'infoSet',
            options:{
                source:'title'
            }

        },
         {
            type:'object',
            name:'info',
            title:'Inforamtion',
            fieldsets:[{
                name:'2col',
                options:{columns:2}
            }],
            fields:[
                {name:"date", type:"string", title:"Date", fieldset: '2col'},
                {name:"timeStart",type:"string", title:"Time Start", fieldset: '2col'},
                {name:"timeStop",type:"string", title:"Time Stop", fieldset: '2col'},
                {name:"location",type:"text",title:"Location"},
                {name:"url",type:"url",title:"Link to Stream"},
                {name:"cta",type:"string",title:"CTA"}
            ]
        },

        {   name:'content',
            type:'array',
            title:'Content',
            options:{sortable:true,layout:"list"},
            of:[{
                name:"section",
                type: "object",
                title:'Content',
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
                    },
                    {
                        name:"desc",
                        type:'array',
                        title:"Content",
                        of:[{type:"block"}]
                    }
                ]
            }]
    
         },
         {name:'credits',type:'array', title:'Credits',of:[
            {name:'title', type:"string", title:'Title'},
            {name:'name', type:'string', title:"Name"},
        
        ]},
        {
            name:"orderRank",type:"string",title:"Rank"
        }
       
    ]
}